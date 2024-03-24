# from rest_framework import serializers 
# from . models import *

# class ReactSerializer(serializers.ModelSerializer): 
# 	class Meta: 
# 		model = React 
# 		fields = ['name', 'detail'] 

from rest_framework import serializers
from .models import *

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['latitude', 'longitude']

class DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detail
        fields = ['description', 'rating', 'image']

class PlaceSerializer(serializers.ModelSerializer):
    location = LocationSerializer()
    detail = DetailSerializer()

    class Meta:
        model = Place
        fields = ['id', 'name', 'location', 'level', 'icon', 'detail']

    # def create(self, validated_data):
    #     location_data = validated_data.pop('location')
    #     detail_data = validated_data.pop('detail')

    #     location = Location.objects.create(**location_data)
    #     detail = Detail.objects.create(**detail_data)

    #     place = Place.objects.create(location=location, detail=detail, **validated_data)
    #     return place

    # def update(self, instance, validated_data):
    #     location_data = validated_data.pop('location')
    #     detail_data = validated_data.pop('detail')

    #     location_serializer = self.fields['location']
    #     detail_serializer = self.fields['detail']

    #     location_instance = instance.location
    #     location_serializer.update(location_instance, location_data)

    #     detail_instance = instance.detail
    #     detail_serializer.update(detail_instance, detail_data)

    #     instance.name = validated_data.get('name', instance.name)
    #     instance.level = validated_data.get('level', instance.level)
    #     instance.icon = validated_data.get('icon', instance.icon)
    #     instance.save()

    #     return instance
