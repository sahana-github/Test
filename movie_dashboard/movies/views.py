from rest_framework import generics
from .models import Movie
from .serializers import MovieSerializer

class TopMoviesByGrossView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        year = self.request.query_params.get('year', None)
        return Movie.objects.filter(year=year).order_by('-gross')[:5]

class TopMoviesByVotesView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        return Movie.objects.order_by('-votes')[:5]

class TopMoviesByRatingView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        year = self.request.query_params.get('year', None)
        return Movie.objects.filter(year=year).order_by('-rating')[:10]
