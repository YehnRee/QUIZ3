from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from products.models import Product

# Accounts Views
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_users(request):
    """ Returns a list of all users (admin-only feature). """
    users = list(User.objects.values('id', 'username', 'email'))
    return Response(users)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request, user_id):
    """ Returns details of a specific user. """
    user = get_object_or_404(User, pk=user_id)
    return Response({'id': user.id, 'username': user.username, 'email': user.email})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    """ Returns the authenticated user's profile. """
    user = request.user
    return Response({
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
    })

# Products Views
@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])  # Public can view, but modifying requires auth
def get_products(request):
    """ Returns a list of all products. """
    products = list(Product.objects.values(
        'id', 'name', 'brand', 'category', 'description', 'rating',
        'numReviews', 'price', 'stock', 'createdAt', 'updatedAt', 'uuid'
    ))
    return Response(products)

@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def get_product(request, product_id):
    """ Returns details of a single product. """
    product = get_object_or_404(Product, pk=product_id)
    return Response({
        'id': product.id,
        'name': product.name,
        'brand': product.brand,
        'category': product.category,
        'description': product.description,
        'rating': product.rating,
        'numReviews': product.numReviews,
        'price': str(product.price),  # Convert Decimal to string for JSON response
        'stock': product.stock,
        'createdAt': product.createdAt,
        'updatedAt': product.updatedAt,
        'uuid': str(product.uuid),
    })

