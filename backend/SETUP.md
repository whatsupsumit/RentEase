# Django Backend Setup Guide

## Prerequisites
- Python 3.8+ installed
- pip package manager

## Setup Instructions

### 1. Create Virtual Environment
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows PowerShell:
venv\Scripts\Activate.ps1
# Windows CMD:
venv\Scripts\activate.bat
# Linux/Mac:
source venv/bin/activate
```

### 2. Install Dependencies
```bash
pip install django
pip install djangorestframework
pip install djangorestframework-simplejwt
pip install django-cors-headers
pip install python-decouple
pip install pillow
```

### 3. Create Django Project
```bash
django-admin startproject rentease_backend .
cd rentease_backend
python manage.py startapp authentication
python manage.py startapp houses
```

### 4. Configure Settings
Add to `settings.py`:
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # Third party apps
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
    
    # Local apps
    'authentication',
    'houses',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# CORS settings
CORS_ALLOW_ALL_ORIGINS = True  # For development only
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # Vite dev server
    "http://127.0.0.1:5173",
]

# REST Framework settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}

# JWT settings
from datetime import timedelta
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': True,
}
```

### 5. Create API URLs
Create `urls.py` in the project root:
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('authentication.urls')),
    path('api/houses/', include('houses.urls')),
]
```

### 6. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser  # Optional: create admin user
```

### 7. Start Development Server
```bash
python manage.py runserver
```

The Django backend will be available at `http://localhost:8000`

## Next Steps
1. Implement authentication models and views
2. Create house/rental models and views
3. Set up API endpoints matching the frontend expectations
4. Test API endpoints with the React frontend
