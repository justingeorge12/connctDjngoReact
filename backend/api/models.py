from django.db import models


class Car(models.Model):
    carName = models.CharField(max_length=50)
    release_year = models.IntegerField()

    def __str__(self):
        return self.carName