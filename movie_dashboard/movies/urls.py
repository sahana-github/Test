from django.urls import path
from .views import TopMoviesByGrossView, TopMoviesByVotesView, TopMoviesByRatingView

urlpatterns = [
    path('top-gross/', TopMoviesByGrossView.as_view(), name='top-gross'),
    path('top-votes/', TopMoviesByVotesView.as_view(), name='top-votes'),
    path('top-rating/', TopMoviesByRatingView.as_view(), name='top-rating'),
]
