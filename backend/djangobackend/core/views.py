from django.shortcuts import render 
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from rest_framework.views import APIView 
from . models import *
# from rest_framework.response import Response 
from . serializer import *
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.generics import ListCreateAPIView
# from rest_framework import generics


# def place_list(request):

@api_view(['GET'])
def place_list(request):
    """
    List all place
    """
    Places = Place.objects.all()
    serializer = PlaceSerializer(Places, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def place_create(request):
    """
    Create a new place
    """
    serializer = PlaceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def place_update(request, pk):
    """
    Update a place
    """
    try:
        place = Place.objects.get(pk=pk)
    except place.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = PlaceSerializer(place, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def place_delete(request, pk):
    """
    Delete a place
    """
    try:
        place = Place.objects.get(pk=pk)
    except place.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    place.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

def Homepage(request):
    return HttpResponse("Hello, world. This is the homepage.")
