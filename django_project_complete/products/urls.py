
from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.get_users, name='get_users'),
    path('user/<int:user_id>/', views.get_user, name='get_user'),
    path('products/', views.get_products, name='get_products'),
    path('product/<int:product_id>/', views.get_product, name='get_product'),
]
        