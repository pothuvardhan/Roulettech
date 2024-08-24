import datetime  
import json

from .models import Student
from django.http import JsonResponse

from .serializers import StudentSerializer

from django.shortcuts import render  
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

# Create your views here.  
from django.http import HttpResponse  
from django.views.decorators.http import require_http_methods  

def hello(request):  
    return HttpResponse("<h2>Hello, Welcome to Django!</h2>")  


def index(request):  
    now = datetime.datetime.now()  
    html = "<html><body><h3>Now time is %s.</h3></body></html>" % now  
    return HttpResponse(html)    # rendering the template in HttpResponse  


@require_http_methods(["GET"])  
def show(request):  
    return HttpResponse('<h1>This is Http GET request.</h1>')  


@csrf_exempt
@require_http_methods(["POST"])  
def register_student(request):
    try:
        # Parse JSON body
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

    serializer = StudentSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors, status=400)

@csrf_exempt
@require_http_methods(["GET"])  
def get_student(request, user_id):
    try:
        student = Student.objects.get(pk=user_id)
        serializer = StudentSerializer(student)
        return JsonResponse(serializer.data, status=200)
    except Student.DoesNotExist:
        return JsonResponse({'error': 'Student not found'}, status=404)



@csrf_exempt
@require_http_methods(["POST"])
def login_student(request):
    try:
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return JsonResponse({'error': 'Email and password are required.'}, status=400)

        try:
            # Check if the student exists with the given email and password
            student = Student.objects.get(email=email, password=password)
            return JsonResponse({'message': 'Login successful', 'student_id': student.id}, status=200)
        except Student.DoesNotExist:
            return JsonResponse({'error': 'Invalid email or password.'}, status=401)
    
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)



@csrf_exempt
@require_http_methods(["PUT"])
def update_student(request, user_id):
    try:
        data = json.loads(request.body)

        try:
            student = Student.objects.get(pk=user_id)
        except Student.DoesNotExist:
            return JsonResponse({'error': 'Student not found'}, status=404)

        serializer = StudentSerializer(student, data=data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors, status=400)
    
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)