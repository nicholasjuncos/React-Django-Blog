from rest_framework import serializers

from ..users.serializers import UserSerializer
from .models import Post


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ['id', 'author', 'status', 'get_status_display', 'post_date', 'title', 'title_sub_text', 'subtitle1', 'text1', 'subtitle2', 'text2', 'cover_image', 'image1', 'image2', 'image3', 'url']
        extra_kwargs = {
            'url': {'view_name': 'api:post-detail', 'lookup_field': 'id'}
        }


class PostSerializerReadOnly(PostSerializer):
    author = UserSerializer()
