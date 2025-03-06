
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import Product

# Accounts Views
def get_users(request):
    users = list(User.objects.values())
    return JsonResponse(users, safe=False)

def get_user(request, user_id):
    user = get_object_or_404(User, pk=user_id)
    return JsonResponse({'id': user.id, 'username': user.username, 'email': user.email})

# Products Views
def get_products(request):
    products = list(Product.objects.values())
    return JsonResponse(products, safe=False)

def get_product(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    return JsonResponse({
        'id': product.id,
        'name': product.name,
        'brand': product.brand,
        'category': product.category,
        'description': product.description,
        'rating': product.rating,
        'numReviews': product.numReviews,
        'price': str(product.price),
        'stock': product.stock,
        'createdAt': product.createdAt,
        'updatedAt': product.updatedAt,
        'uuid': str(product.uuid),
    })
        