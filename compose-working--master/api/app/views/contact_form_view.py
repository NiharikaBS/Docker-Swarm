from rest_framework import views, viewsets, permissions, response, status

from core.permissions import *
from core.models import NotificationTokenModel
from core.serializers import NotificationTokenSerializer
from core.pagination import PaginationType1


class ContactFormViewSet(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        try:
            name = request.data.get("name")
            email = request.data.get("email")
            submitted_date = request.data.get("submitted_date")
            submitted_time = request.data.get("submitted_time")
            submitted_date_time = request.data.get("submitted_date_time")
            photo = request.data.get("photo")
            print(name)
            return response.Response(status=status.HTTP_200_OK, data={"success": True})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})
