# Student Management System

A full-stack Student Management System built using:

* React
* FastAPI
* SQLAlchemy
* MySQL
* Axios

The application supports:

* Add Student
* View Students
* Update Student
* Delete Student

---

# Project Architecture

```text
React Frontend
      |
      | HTTP Request
      ▼
FastAPI Backend
      |
      ▼
Route
      |
      ▼
Controller
      |
      ▼
Service
      |
      ▼
Repository
      |
      ▼
MySQL Database
```

---

# Project Structure

```text
StudentManagementSystem/
│
├── main.py
│
├── DB/
│   └── connection.py
│
├── models/
│   └── student_model.py
│
├── schemas/
│   └── student_schema.py
│
├── repositories/
│   └── student_repository.py
│
├── services/
│   └── student_service.py
│
├── controllers/
│   └── student_controller.py
│
├── routes/
│   └── student_routes.py
│
├── requirements.txt
│
├── frontend/
│   ├── package.json
│   ├── src/
│   └── ...
│
└── README.md
```

---

# Prerequisites

Before running the project, install the following software:

1. Git
2. Python
3. Node.js
4. MySQL

Check the installations:

```bash
git --version
python --version
node --version
npm --version
mysql --version
```

---

# 1. Clone the Project

Clone the repository from GitHub:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go inside the project:

```bash
cd StudentManagementSystem
```

---

# 2. Backend Setup

## Create Python Virtual Environment

```bash
python -m venv venv
```

Activate the virtual environment.

### Windows

```bash
venv\Scripts\activate
```

After activation, you should see something like:

```text
(venv)
```

before your terminal path.

---

# 3. Install Backend Dependencies

Install all required Python packages:

```bash
pip install -r requirements.txt
```

The `requirements.txt` file contains:

```text
fastapi
uvicorn
sqlalchemy
pymysql
pydantic
```

---

# 4. MySQL Database Setup

Open MySQL.

Create the database:

```sql
CREATE DATABASE student_management;
```

Select the database:

```sql
USE student_management;
```

Create the students table:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    course VARCHAR(100)
);
```

Check the table:

```sql
SELECT * FROM students;
```

---

# 5. Configure Database Connection

Open:

```text
DB/connection.py
```

Update the database connection according to your MySQL username and password.

Example:

```python
DATABASE_URL = "mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/student_management"
```

Replace:

```text
YOUR_PASSWORD
```

with your MySQL password.

Do not upload your real password to GitHub.

---

# 6. Run Backend

From the project root:

```bash
uvicorn main:app --reload
```

Backend will run at:

```text
http://127.0.0.1:8000
```

FastAPI Swagger documentation:

```text
http://127.0.0.1:8000/docs
```

You can use Swagger to test the APIs.

---

# 7. Frontend Setup

Open another terminal.

Go to the frontend:

```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

This installs the dependencies defined in:

```text
package.json
```

---

# 8. Run Frontend

Run:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

Open this URL in your browser.

---

# 9. API Endpoints

The application provides the following APIs:

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| GET    | `/students`      | Get all students |
| GET    | `/students/{id}` | Get one student  |
| POST   | `/students`      | Create student   |
| PUT    | `/students/{id}` | Update student   |
| DELETE | `/students/{id}` | Delete student   |

---

# 10. Complete Run Process

After cloning the project on another machine:

### Terminal 1 — Backend

```bash
cd StudentManagementSystem

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

### Terminal 2 — Frontend

```bash
cd StudentManagementSystem/frontend

npm install

npm run dev
```

### MySQL

Make sure MySQL Server is running and the following database exists:

```text
student_management
```

---

# 11. Open the Application

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://127.0.0.1:8000
```

Swagger API documentation:

```text
http://127.0.0.1:8000/docs
```

---

# 12. Important Git Files

Do not push the following files/folders to GitHub:

```text
node_modules/
venv/
__pycache__/
.env
```

Add them to `.gitignore`:

```text
node_modules/
venv/
__pycache__/
.env
```

---

# 13. Recommended requirements.txt

The backend should contain:

```text
fastapi
uvicorn
sqlalchemy
pymysql
pydantic
```

Then anyone can install all backend dependencies using:

```bash
pip install -r requirements.txt
```

---

# 14. Troubleshooting

## MySQL Connection Error

Check:

* MySQL Server is running.
* Database name is `student_management`.
* Username is correct.
* Password is correct.
* Port is `3306`.

---

## CORS Error

Make sure `main.py` contains:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## Frontend Cannot Connect to Backend

Make sure the backend is running:

```bash
uvicorn main:app --reload
```

Then check:

```text
http://127.0.0.1:8000/docs
```

Also make sure the frontend API URL is:

```text
http://127.0.0.1:8000
```

---

# 15. Application Flow

```text
User
 |
 ▼
React Frontend
 |
 | Axios
 ▼
FastAPI
 |
 ▼
Routes
 |
 ▼
Controllers
 |
 ▼
Services
 |
 ▼
Repositories
 |
 | SQL Query
 ▼
MySQL
```

---

# 16. Technologies Used

### Frontend

* React
* Vite
* Axios
* CSS

### Backend

* Python
* FastAPI
* SQLAlchemy
* PyMySQL
* Pydantic

### Database

* MySQL

---

# 17. CRUD Operations

The application implements complete CRUD functionality.

```text
C → Create → POST
R → Read   → GET
U → Update → PUT
D → Delete → DELETE
```

Example:

```text
Add Student
     ↓
POST /students
     ↓
FastAPI
     ↓
Repository
     ↓
MySQL
```

---

# 18. Quick Start

If everything is already installed:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL

cd StudentManagementSystem

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Open another terminal:

```bash
cd frontend

npm install

npm run dev
```

Then open:

```text
http://localhost:5173
```

---

# Author

RAHUL

Student Management System

Built as a full-stack learning project using React, FastAPI and MySQL.
