from rest_framework import serializers
from core.models import ProfileModel
from core.serializers.user_serializer import UserSerializer


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = ProfileModel
        fields = ['id', 'uuid', 'name', 'email', 'submitted_date',
                  'submitted_time', 'submitted_date_time', 'photo', 'created_at', 'updated_at']
