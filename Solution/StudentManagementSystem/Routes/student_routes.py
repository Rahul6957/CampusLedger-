from fastapi import APIRouter
from schemas.Student_schema import StudentCreate, StudentUpdate
from controllers.StudentControllers import (
    create_student,
    get_all_students,
    get_student,
    update_student,
    delete_student
)

router = APIRouter()


# CREATE
@router.post("/students")
def create_student_route(student: StudentCreate):
    return create_student(student)


# READ ALL
@router.get("/students")
def get_all_students_route():
    return get_all_students()


# READ ONE
@router.get("/students/{student_id}")
def get_student_route(student_id: int):
    return get_student(student_id)


# UPDATE
@router.put("/students/{student_id}")
def update_student_route(
    student_id: int,
    student: StudentUpdate
):
    return update_student(student_id, student)


# DELETE
@router.delete("/students/{student_id}")
def delete_student_route(student_id: int):
    return delete_student(student_id)