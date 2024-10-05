from django.contrib import admin

from .models import Department, Subject, Batch

admin.site.register(Department)
admin.site.register(Subject)
admin.site.register(Batch)
