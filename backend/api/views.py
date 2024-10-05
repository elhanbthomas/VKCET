from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .serializers import StudentDashboardSerializer
from userprofile.models import StudentProfile

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Dashboard(request):
    try:
        profile = StudentProfile.objects.get(user=request.user)
        serializer = StudentDashboardSerializer(profile)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except ObjectDoesNotExist:
        return Response({'error':'Profile not found'}, status=status.HTTP_404_NOT_FOUND)