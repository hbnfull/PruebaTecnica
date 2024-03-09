from django.db import models
from datetime import datetime
from django.conf import settings
import os

def ruta(instance, filename):
    return os.path.join('images', instance.product, filename)

class Producto(models.Model):
    product = models.CharField(max_length=30)
    stock = models.CharField(max_length=16)
    price = models.FloatField(default=0)
    description = models.CharField(max_length=256)
    image = models.ImageField(upload_to=ruta, null=True)

    def removeD(instance):
        path= os.path.join(settings.MEDIA_ROOT, 'images', instance.product)
        try:
            os.remove(path)
            os.rmdir(path)
        except PermissionError as e:
            print("Error permisos", e)