from rest_framework import viewsets

from movies.models import Movie, Platform
from movies.serializers import MovieSerializer, PlatformSerializer

__all__ = [
    "MovieViewSet",
]


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    #    permission_classes = (IsOwnerOrReadOnly,)

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)

class PlatformViewSet(viewsets.ModelViewSet):
    queryset = Platform.objects.all()
    serializer_class = PlatformSerializer
