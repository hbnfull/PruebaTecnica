from django.db import models
from datetime import datetime

class User(models.Model):
    name = models.CharField(max_length=60)
    lastName = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    password = models.CharField(max_length=16)

"""     def __str__(self):
        return self.fecha """
    
# Create your models here.
