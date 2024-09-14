from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    username = serializers.Charfield()
    password = serializers.Charfield(write_only = True)
    confirm_password = serializers.Charfield(write_only = True)
    class Meta:
        model = User
        fields = ['username', 'password', 'confirm_password']
    
    def validate_username(self, data):
        if User.objects.filter(username=data).exists():
            raise serializers.ValidationError("This user is already registered")
        return data
    
    def validate(self, attrs):
        if len(attrs['password']) < 8:
            raise serializers.ValidationError("password must be at least 8 characters long")
        
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError("Passwords do not match. Try again")
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            username = validated_data['username'],
            password = validated_data['password']
        )
        return user