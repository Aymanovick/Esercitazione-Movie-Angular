from django.contrib import admin

from movies.models import Movie, Platform


admin.site.register(Movie)
admin.site.register(Platform)
