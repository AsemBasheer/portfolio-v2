from rest_framework import serializers
from skills.models import Skill

class SkillCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Skill
        fields = ("id" ,"name", "iconURL")
