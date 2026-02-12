from django.db import models


# Create your models here.

class EmployeeModel(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    job = models.CharField(max_length=100)
    language = models.CharField(max_length=100)
    pay = models.IntegerField()

    def __str__(self):
        return self.name
