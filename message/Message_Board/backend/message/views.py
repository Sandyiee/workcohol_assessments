from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Message
from .serializers import MessageSerializer

@api_view(['GET', 'POST'])
def messages(request):
    if request.method == 'GET':
        msgs = Message.objects.all()
        serializer = MessageSerializer(msgs, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

