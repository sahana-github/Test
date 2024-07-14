import pandas as pd
from django.core.management.base import BaseCommand
from movies.models import Movie

class Command(BaseCommand):
    help = 'Load movies from Excel file'

    def handle(self, *args, **kwargs):
        # Replace 'path/to/movies.xlsx' with the actual path to your Excel file
        df = pd.read_excel('movies.xlsx')

        for _, row in df.iterrows():
            Movie.objects.create(
                title=row['MOVIES'],
                year=row['YEAR'],
                genre=row['GENRE'],
                rating=row['RATING'],
                one_line=row['ONE-LINE'],
                stars=row['STARS'],
                votes=row['VOTES'],
                runtime=row['RunTime'],
                gross=row['Gross'],
            )

        self.stdout.write(self.style.SUCCESS('Successfully loaded data'))
