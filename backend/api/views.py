
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Car
from .serializer import CarSerializer


@api_view(['GET'])
def get_car(request):
    cars = Car.objects.all()
    serializedData = CarSerializer(cars, many = True).data
    return Response(serializedData)

@api_view(['POST'])
def create_car(request):
    data = request.data
    serializer = CarSerializer(data = data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

