from rest_framework import views, viewsets, permissions, response, status

from core.permissions import *
from core.pagination import PaginationType1
from app.models import WebSubscriberModel


class WebSubscriberViewSet(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        try:
            email = request.data.get("email")
            cur_user = WebSubscriberModel()
            cur_user.email = email
            cur_user.save()
            return response.Response(status=status.HTTP_200_OK, data={"success": True})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"{str(e)}"})
