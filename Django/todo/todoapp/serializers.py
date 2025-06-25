from rest_framework import serializers
from .models import TodoItem
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from django.contrib.auth.models import User

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model=TodoItem
        fields='__all__'

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields =["username","password","email"]

    def create(self, validated_data):
        user=User.objects.create(username=validated_data['username'],password=validated_data['password'],email=validated_data.get('email',''))
        return user