from django.urls import path, include
from django.contrib import admin
from . import views
from django.conf import settings
from django.conf.urls.static import static

# from .views import user_submission

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.Homepage, name="homepage"),
    path('places/', views.place_list, name='place-list'),
    path('places/create/', views.place_create, name='place-create'),
    path('places/<int:pk>/update/', views.place_update, name='place-update'),
    path('places/<int:pk>/delete/', views.place_delete, name='place-delete'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)