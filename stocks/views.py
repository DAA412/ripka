from rest_framework import viewsets
from stocks.serializers import StockSerializer
from stocks.models import Stock


class StockViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать детское питание
    """
    # queryset всех пользователей для фильтрации по цене товара
    queryset = Stock.objects.all().order_by('price')
    serializer_class = StockSerializer  # Сериализатор для модели