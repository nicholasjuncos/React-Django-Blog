from django.db.models import Q
from rest_framework import filters, permissions
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend

from ..common.mixins import GetSerializerClassMixin
from .models import Post
from .permissions import IsAuthorOrReadOnly
from .serializers import PostSerializer, PostSerializerReadOnly


class PostViewSet(GetSerializerClassMixin, ModelViewSet):
    serializer_class = PostSerializer
    serializer_action_classes = {
        'retrieve': PostSerializerReadOnly,
        'list': PostSerializerReadOnly
    }
    queryset = Post.objects.all()
    lookup_field = 'id'
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['post_date']
    ordering = ['-post_date']
    filterset_fields = {
        'author__username': ['exact'],
        'author': ['exact'],
        'status': ['exact'],
        'post_date': ['gte', 'lte', 'exact', 'gt', 'lt']
    }
    search_fields = ['author', 'title', 'text1', 'text2', ]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly]

    def get_queryset(self, *args, **kwargs):
        # allow superusers to see all users
        if self.request.user.is_superuser:
            return self.queryset
        # by default only show users themselves, alter this filter to allow users to see others
        return self.queryset.filter(Q(author_id=self.request.user.id) | Q(status='P'))
