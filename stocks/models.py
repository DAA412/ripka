from django.db import models


class Stock(models.Model):
    baby_food_name = models.CharField(max_length=50, default='', verbose_name="Название детского питания")
    price = models.DecimalField(max_digits=8, default='', decimal_places=2, verbose_name="Цена")
    composition = models.CharField(max_length=150,default='', verbose_name="Состав")
    is_available = models.BooleanField(default='1',verbose_name="Доступен ли товар?")


