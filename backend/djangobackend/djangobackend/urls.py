from django.contrib import admin 
from django.urls import path, include 
# from django.conf.urls import url 
# from . import views
from core.views import *

urlpatterns = [ 
    path("", include("core.urls")),
    # path("", views.homepage, name="homepage"),
	# path('admin/', admin.site.urls), 
	# path('wel/', ReactView.as_view(), name="something")
]
