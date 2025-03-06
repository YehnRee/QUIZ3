from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),  # Includes accounts-related routes
    path('products/', include('products.urls')),  # Includes product-related routes
]
