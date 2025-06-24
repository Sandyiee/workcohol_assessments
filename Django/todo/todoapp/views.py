from django.shortcuts import render

from rest_framework import generics
from .models import TodoItem
from .serializers import TodoSerializer

class TodoList(generics.ListCreateAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoSerializer
