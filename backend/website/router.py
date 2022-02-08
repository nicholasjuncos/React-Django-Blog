from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from .users.viewsets import UserViewSet
from .blog.viewsets import PostViewSet, PostReadOnlyViewSet
# from website.articles.views import ArticleViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register('users', UserViewSet)
router.register('blog/posts/form', PostViewSet)
router.register('blog/posts/read', PostReadOnlyViewSet)

app_name = 'api'

urlpatterns = router.urls
