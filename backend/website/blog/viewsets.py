from rest_framework import status, filters, permissions
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

from .models import Post
from .serializers import PostSerializer


class PostViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    lookup_field = 'id'
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['post_date']
    ordering = ['-post_date']
    filterset_fields = {
        'author': ['exact'],
        'status': ['exact'],
        'post_date': ['gte', 'lte', 'exact', 'gt', 'lt']
    }
    search_fields = ['author', 'title', 'text1', 'text2', ]
    permission_classes = []

    # def get_queryset(self, *args, **kwargs):
    #     # allow superusers to see all users
    #     if self.request.user.is_superuser:
    #         return self.queryset
    #     # by default only show users themselves, alter this filter to allow users to see others
    #     return self.queryset.filter(id=self.request.user.id)
