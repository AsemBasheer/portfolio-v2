from django.db import models

# Create your models here.
class Skill(models.Model):
    name = models.CharField(max_length=50, unique=True)
    iconURL = models.CharField(max_length=750)

    def __str__(self):
        return self.name