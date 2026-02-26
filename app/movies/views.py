from rest_framework import viewsets

from movies.models import Movie, StreamingChannel
from movies.serializers import MovieSerializer, StreamingChannelSerializer

__all__ = [
    "MovieViewSet",
]


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    #    permission_classes = (IsOwnerOrReadOnly,)

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)

class StreamingChannelViewSet(viewsets.ModelViewSet):
    queryset = StreamingChannel.objects.all()
    serializer_class = StreamingChannelSerializer
