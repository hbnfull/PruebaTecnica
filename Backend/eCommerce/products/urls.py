from django.urls import path
from products import views

urlpatterns = [
    path('api/productos', views.productos.as_view()),
    path('api/eliminar', views.eliminar.as_view()),
]