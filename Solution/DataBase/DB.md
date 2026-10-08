# Student Management System - Database Setup

This document contains the MySQL database setup, table structure, and dummy data required for the Student Management System.

---

# 1. Database Information

| Property      | Value                |
| ------------- | -------------------- |
| Database Name | `student_management` |
| Table Name    | `students`           |
| Database      | MySQL                |
| Port          | `3306`               |
| Username      | `root`               |

---

# 2. Create Database

Open MySQL and run:

```sql
CREATE DATABASE student_management;
```

Select the database:

```sql
USE student_management;
```

---

# 3. Create Students Table

Run the following SQL:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    course VARCHAR(100)
);
```

---

# 4. Table Structure

The `students` table contains the following columns:

| Column   | Data Type    | Description                 |
| -------- | ------------ | --------------------------- |
| `id`     | INT          | Primary key, Auto Increment |
| `name`   | VARCHAR(100) | Student name                |
| `email`  | VARCHAR(100) | Student email, Unique       |
| `age`    | INT          | Student age                 |
| `course` | VARCHAR(100) | Student course              |

---

# 5. Insert Dummy Data

Run the following SQL to insert sample students:

```sql
INSERT INTO students
(name, email, age, course)
VALUES
('Rahul Patil', 'rahul.patil@gmail.com', 22, 'Python'),
('Amit Sharma', 'amit.sharma@gmail.com', 23, 'Java'),
('Sneha Joshi', 'sneha.joshi@gmail.com', 21, 'React'),
('Priya Kulkarni', 'priya.kulkarni@gmail.com', 22, 'Angular'),
('Akash More', 'akash.more@gmail.com', 24, 'Dot Net'),
('Pooja Deshmukh', 'pooja.deshmukh@gmail.com', 21, 'Python'),
('Rohit Pawar', 'rohit.pawar@gmail.com', 23, 'Java'),
('Neha Patil', 'neha.patil@gmail.com', 22, 'MySQL'),
('Sagar Jadhav', 'sagar.jadhav@gmail.com', 24, 'Node.js'),
('Snehal More', 'snehal.more@gmail.com', 21, 'React');
```

---

# 6. Check Inserted Data

Run:

```sql
SELECT * FROM students;
```

Expected result:

| id | name           | email                                                       | age | course  |
| -: | -------------- | ----------------------------------------------------------- | --: | ------- |
|  1 | Rahul Patil    | [rahul.patil@gmail.com](mailto:rahul.patil@gmail.com)       |  22 | Python  |
|  2 | Amit Sharma    | [amit.sharma@gmail.com](mailto:amit.sharma@gmail.com)       |  23 | Java    |
|  3 | Sneha Joshi    | [sneha.joshi@gmail.com](mailto:sneha.joshi@gmail.com)       |  21 | React   |
|  4 | Priya Kulkarni | [priya.kulkarni@gmail.com](mailto:priya.kulkarni@gmail.com) |  22 | Angular |
|  5 | Akash More     | [akash.more@gmail.com](mailto:akash.more@gmail.com)         |  24 | Dot Net |
|  6 | Pooja Deshmukh | [pooja.deshmukh@gmail.com](mailto:pooja.deshmukh@gmail.com) |  21 | Python  |
|  7 | Rohit Pawar    | [rohit.pawar@gmail.com](mailto:rohit.pawar@gmail.com)       |  23 | Java    |
|  8 | Neha Patil     | [neha.patil@gmail.com](mailto:neha.patil@gmail.com)         |  22 | MySQL   |
|  9 | Sagar Jadhav   | [sagar.jadhav@gmail.com](mailto:sagar.jadhav@gmail.com)     |  24 | Node.js |
| 10 | Snehal More    | [snehal.more@gmail.com](mailto:snehal.more@gmail.com)       |  21 | React   |

---

# 7. Verify Table Structure

Run:

```sql
DESC students;
```

or:

```sql
DESCRIBE students;
```

---

# 8. Check Total Students

```sql
SELECT COUNT(*) AS total_students
FROM students;
```

Expected:

```text
10
```

---

# 9. Test CRUD Operations

## CREATE

```sql
INSERT INTO students
(name, email, age, course)
VALUES
('Vikas Shinde', 'vikas.shinde@gmail.com', 25, 'Python');
```

---

## READ

Get all students:

```sql
SELECT * FROM students;
```

Get one student:

```sql
SELECT *
FROM students
WHERE id = 1;
```

---

## UPDATE

Update student:

```sql
UPDATE students
SET
    name = 'Rahul Patil Updated',
    age = 23,
    course = 'FastAPI'
WHERE id = 1;
```

Check:

```sql
SELECT *
FROM students
WHERE id = 1;
```

---

## DELETE

Delete a student:

```sql
DELETE FROM students
WHERE id = 10;
```

Check:

```sql
SELECT * FROM students;
```

---

# 10. Reset Database

If you want to completely remove the database and create it again:

```sql
DROP DATABASE student_management;
```

Then:

```sql
CREATE DATABASE student_management;
```

After that:

```sql
USE student_management;
```

Create the table again:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    course VARCHAR(100)
);
```

Then insert the dummy data again.

---

# 11. Complete Database Setup Script

For a new machine, you can run the following complete script:

```sql
CREATE DATABASE IF NOT EXISTS student_management;

USE student_management;

CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    course VARCHAR(100)
);

INSERT INTO students
(name, email, age, course)
VALUES
('Rahul Patil', 'rahul.patil@gmail.com', 22, 'Python'),
('Amit Sharma', 'amit.sharma@gmail.com', 23, 'Java'),
('Sneha Joshi', 'sneha.joshi@gmail.com', 21, 'React'),
('Priya Kulkarni', 'priya.kulkarni@gmail.com', 22, 'Angular'),
('Akash More', 'akash.more@gmail.com', 24, 'Dot Net'),
('Pooja Deshmukh', 'pooja.deshmukh@gmail.com', 21, 'Python'),
('Rohit Pawar', 'rohit.pawar@gmail.com', 23, 'Java'),
('Neha Patil', 'neha.patil@gmail.com', 22, 'MySQL'),
('Sagar Jadhav', 'sagar.jadhav@gmail.com', 24, 'Node.js'),
('Snehal More', 'snehal.more@gmail.com', 21, 'React');

SELECT * FROM students;
```

---

# 12. Backend Database Connection

The FastAPI backend connects to this database using SQLAlchemy.

File:

```text
DB/connection.py
```

Example:

```python
DATABASE_URL = "mysql+pymysql://root:YOUR_PASSWORD@localhost:3306/student_management"
```

Replace:

```text
YOUR_PASSWORD
```

with the MySQL password of the current machine.

---

# 13. New Machine Setup

After cloning the project:

### Step 1

Install MySQL.

### Step 2

Open MySQL.

### Step 3

Run the complete SQL script from this file.

### Step 4

Update the password in:

```text
DB/connection.py
```

### Step 5

Start FastAPI:

```bash
uvicorn main:app --reload
```

### Step 6

Start React:

```bash
cd frontend
npm install
npm run dev
```

---

# Database Flow

```text
MySQL
  |
  ▼
student_management
  |
  ▼
students
  |
  ├── id
  ├── name
  ├── email
  ├── age
  └── course
```

The React frontend communicates with FastAPI, and FastAPI performs CRUD operations on the `students` table.
