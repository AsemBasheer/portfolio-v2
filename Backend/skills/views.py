from django.shortcuts import render
from rest_framework import generics
from skills.serializers import SkillCreateSerializer
from skills.models import Skill

# Create your views here.
class SkillList(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillCreateSerializer
