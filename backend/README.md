# emp_Django_RestfulAPI

![Python](https://img.shields.io/badge/Python-3.x-blue)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Project Overview 📖

> This is a **Django** practice project following **Restful API **style. 

## Prerequisites 📦

Make sure your system has the following installed:

- Python >= 3.8
- Other dependencies are managed via `requirements.txt`

## How to run 🚀

1. **Clone the repository**

   ```bash
   git clone https://github.com/SimpleJerry/emp_Django_RestfulAPI.git
   cd emp_Django_RestfulAPI
   ```

2. **Create a virtual environment and install dependencies**

   ```
   # Install dependencies
   pip install -r requirements.txt
   ```

3. **Docker**

   ```
   docker run -d --name postgres-db -e POSTGRES_USER=<your_username> -e POSTGRES_PASSWORD=<your_password> -e POSTGRES_DB=mydb -p 5432:5432 -v postgres_data:/var/lib/postgresql/data postgres:16
   ```

   - Replace the <your_username> and <your_password> with your own.

4. **settings.py**

      ```
      # setting.py
      DATABASES = {
          'default': {
              'ENGINE': 'django.db.backends.postgresql',
              'NAME': 'mydb',
              'USER': '<your_username>',
              'PASSWORD': '<your_password>',
              'HOST': 'localhost',
              'PORT': '5432',
          }
      }
      ```

5. **Migrate**

      ```
      ## If you didn't make migration, run the command below first.
      
      # python manage.py makemigrations
      
      python manage.py migrate
      ```

6. **Run the project**

    ```
    python manage.py runserver
    ```

7. **Create a superuser (Optional)**

    ```
    python manage.py createsuperuser
    ```

8. **Check the API (Optional)**

    ```
    python manage.py show_urls
    ```

​	
