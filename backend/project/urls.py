from django.contrib import admin  
from django.urls import path  
from profile_application import views  
  
urlpatterns = [  
    path('admin/', admin.site.urls),  
    path('hello/', views.hello),
    path('index/', views.index),   
    path('show/', views.show), 
    path('register_student/', views.register_student, name='register_student'),
    path('get_student/<int:user_id>/', views.get_student, name='get_student'),
    path('login/', views.login_student, name='login_student'),
    path('update_student/<int:user_id>/', views.update_student, name='update_student'),
]  