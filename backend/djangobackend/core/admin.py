from django.contrib import admin

# Register your models here.

from .models import Location
from .models import Place
from .models import Detail
from .models import RestroomDetail
from .models import VendingMachineDetail
from .models import StudyroomDetail


admin.site.register(Location)
admin.site.register(Place)
admin.site.register(Detail)
admin.site.register(RestroomDetail)
admin.site.register(VendingMachineDetail)
admin.site.register(StudyroomDetail)