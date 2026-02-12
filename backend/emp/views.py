from rest_framework.viewsets import ModelViewSet
from .models import EmployeeModel
from .serializers import EmployeeSerializer


class EmployeeViewSet(ModelViewSet):
    """
    GET     /api/emp/
    POST    /api/emp/
    GET     /api/emp/{id}/
    PUT     /api/emp/{id}/
    PATCH   /api/emp/{id}/
    DELETE  /api/emp/{id}/
    """
    queryset = EmployeeModel.objects.all()
    serializer_class = EmployeeSerializer
