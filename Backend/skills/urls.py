from django.urls import path
from skills.views import SkillList


urlpatterns = [
    path("", SkillList.as_view()),
]
