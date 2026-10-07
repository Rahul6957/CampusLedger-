from DB.connection import SessionLocal
from Services.StudentServices import (
    create_student as create_student_service,
    get_all_students as get_all_students_service,
    get_student as get_student_service,
    update_student as update_student_service,
    delete_student as delete_student_service
)


# CREATE
def create_student(student):
    db = SessionLocal()

    try:
        return create_student_service(db, student)
    finally:
        db.close()


# READ ALL
def get_all_students():
    db = SessionLocal()

    try:
        return get_all_students_service(db)
    finally:
        db.close()


# READ ONE
def get_student(student_id):
    db = SessionLocal()

    try:
        return get_student_service(db, student_id)
    finally:
        db.close()


# UPDATE
def update_student(student_id, student):
    db = SessionLocal()

    try:
        return update_student_service(db, student_id, student)
    finally:
        db.close()


# DELETE
def delete_student(student_id):
    db = SessionLocal()

    try:
        return delete_student_service(db, student_id)
    finally:
        db.close()