from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from rest_framework import generics
from .models import TodoItem
from .serializers import TodoSerializer,UserSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination

class TodoList(generics.ListCreateAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination  # ✅ FIXED

class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination  # ✅ FIXED

class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
