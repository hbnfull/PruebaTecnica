from django.urls import path
from authentication import views

urlpatterns = [
    path('api/register', views.register.as_view()),
    path('api/login', views.login.as_view())
]