from django.shortcuts import render
from datetime import date

from bmstu_lab.models import Cakes


def cakeList(request):
    return render(request, 'cakes.html', {'data': {
        'current_date': date.today(),
        'cakes': Cakes.objects.all()
    }})


def GetCake(request, id):
    return render(request, 'cake.html', {'data': {
        'current_date': date.today(),
        'cake': Cakes.objects.filter(id=id)[0]
    }})


def hello(request):
    return render(request, 'index.html', {'data': {'current_date': date.today(),
                                                   'list': ['python', 'django', 'html']}})
description= ['0', 'Сам рецепт был разработан специально ко Дню рождения одного из сыновей австро-венгерского министра. Сделано это было еще в начале девятнадцатого века. Еще тогда его хорошо оценили гости, приглашенные на мероприятие, а впоследствии блюдо получило свое название в честь известного Пала Антала Эстерхази. В основе торта лежат орехи, белки и сахар. Для создания устойчивой конструкции потребуется порядка пяти-шести коржей одинаковой формы и размера. Для приготовления кремовой массы необходимы такие компоненты: алкоголь, обычное и сгущенное молоко, а также сахар. Глазурь же создается из нескольких разновидностей шоколада и сливок. В качестве украшения лакомства служат кусочки шоколада и лепестки миндаля.',
              'Создается он из бисквитного теста и высококалорийного масляного теста. Из-за таких составляющих блюдо не рекомендуется к употреблению тем людям, которые тщательно следят за своей фигурой, хотя отказаться от такого удовольствия не так уж просто. Такое лакомство стало популярно еще в СССР. В то время хозяйки оформляли его в виде длинного рулета и украшали всевозможными цветами из крема и фигурками из шоколада.',
              'Торт представляет собой бисквитный рулет, хорошенько промазанный смесью из сгущенного молока и масла. Он может быть сделан в виде полена или же просто как длинная полоска. Тесто смазывается сливками, а готовое блюдо посыпается сверху и по бокам миндальными хлопьями. Также лакомство украшается различными фигурками, сделанными из шоколада или мастики. Это могут быть грибочки, мелкие пеньки и прочие элементы, создающие композицию леса.']

def GetOrders(request):
    return render(request, 'orders.html', {'data': {
        'current_date': date.today(),
        'orders': [
            {'title': 'Эстерхази', 'id': 1,
             'description': 'Вкусно'},
            {'title': 'Сказка', 'id': 2,
             'description':'Очень вкусно'},
            {'title': 'Полено', 'id': 3,
             'description': 'Шедеврально'},
        ]
    }})


def GetOrder(request, id):
    return render(request, 'order.html', {'data': {
        'current_date': date.today(),
        'description': description[id],
        'id': id
    }})