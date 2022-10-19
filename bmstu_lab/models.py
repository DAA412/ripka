from django.db import models


class Cakes(models.Model):
    name = models.CharField(max_length=30)
    ingredients = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'cakes'


class Customer(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    address = models.CharField(max_length=45)
    phone_number = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'customer'

class Order(models.Model):
    id_customer = models.ForeignKey(Customer, models.DO_NOTHING, db_column='id_customer')
    id_cake = models.ForeignKey(Cakes, models.DO_NOTHING, db_column='id_cake')
    order_date_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'order'
