from django.db import models
from model_utils.managers import InheritanceManager


# Create your models here.

class React(models.Model): 
	name = models.CharField(max_length=30) 
	detail = models.CharField(max_length=500)
	name = 'core'

class Location(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    
    def __str__(self):
        string = "Latitude: "+str(self.latitude) + "\n"+ "Longitude: " + str(self.longitude)
        return string

    # # Convenience method to return a Point object from latitude and longitude
    # def get_point(self):
    #     return f'POINT({self.longitude} {self.latitude})'

    # def __str__(self):
    #     return f"{self.latitude}, {self.longitude}"
class Detail(models.Model):
    description = models.TextField(max_length= 255)
    rating = models.FloatField()
    image = models.ImageField(upload_to="images")
    objects = InheritanceManager()
    def __str__(self):
        string = "Description: "+self.description + "\nRating: " + str(self.rating)
        return string

class RestroomDetail(Detail):
    hasPaper = models.BooleanField()

class VendingMachineDetail(Detail):
    isFunctional = models.BooleanField()
    pass

class StudyroomDetail(Detail):
    hasBed = models.BooleanField(default=True)
    pass

class Place(models.Model):
    name = models.CharField(max_length=100)
    location = models.OneToOneField(Location, on_delete=models.CASCADE, related_name='location')
    level = models.IntegerField()
    icon = models.ImageField(upload_to="images")
    detail = models.OneToOneField(Detail,on_delete=models.CASCADE, related_name='detail')
    type = models.CharField(max_length=100)
    
    def __str__(self):
        string = "Name: "+self.name + "\nLocation: " + "\nLevel: " + str(self.level)
        return string



