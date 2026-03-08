from rest_framework.routers import SimpleRouter
from movies.views import MovieViewSet, PlatformViewSet

app_name = "movies"

router = SimpleRouter()
router.register("movies", MovieViewSet, basename="movies")
router.register("channels", PlatformViewSet, basename="channels")

urlpatterns = router.urls
