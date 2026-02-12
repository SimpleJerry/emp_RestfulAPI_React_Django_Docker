from django.contrib import admin

# Register your models here.
# employees/admin.py

from django.contrib import admin
from .models import EmployeeModel


class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'age', 'job', 'language', 'pay')  # 列表页显示的字段
    search_fields = ('id', 'name')  # 搜索框支持的字段
    list_filter = ('job',)  # 右侧过滤器
    ordering = ('id',)  # 默认排序


admin.site.register(EmployeeModel, EmployeeAdmin)
