from . import views
from django.urls import path

urlpatterns = [
    path('car/', views.get_car, name='get_car'),
    path('car/create/', views.create_car, name='create_car')
]
