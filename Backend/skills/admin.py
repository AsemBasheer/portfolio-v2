from django.contrib import admin
from skills.models import Skill
from import_export.admin import ImportExportModelAdmin

# Register your models here.

# admin.site.register(Skill)


@admin.register(Skill)
class SkillAdmin(ImportExportModelAdmin):
    pass
