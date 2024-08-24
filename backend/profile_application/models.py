from django.db import models

class Student(models.Model):  
    first_name = models.CharField(max_length=20)  
    last_name  = models.CharField(max_length=30)  
    contact    = models.IntegerField()  
    email      = models.EmailField(max_length=50, unique=True)  
    age        = models.IntegerField() 
    sex        = models.CharField(max_length=10)
    address    = models.CharField(max_length=50)
    about      = models.TextField()
    password   = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:  
        db_table = "student"  

    def __str__(self):
        return self.first_name + " " + self.last_name