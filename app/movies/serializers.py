from rest_framework import serializers

from movies.models import Movie, Platform

__all__ = ["MovieSerializer",
           "StreamingChannelSerializer"]


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ["id", "title", "subtitle", "director", "description"]

class PlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = '__all__'
