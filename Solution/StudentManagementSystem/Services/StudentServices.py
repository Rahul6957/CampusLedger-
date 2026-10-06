from Repository.student_repository import (
    create_student as create_student_repo,
    get_all_students as get_all_students_repo,
    get_student as get_student_repo,
    update_student as update_student_repo,
    delete_student as delete_student_repo
)


# CREATE
def create_student(db, student):
    return create_student_repo(db, student)


# READ ALL
def get_all_students(db):
    return get_all_students_repo(db)


# READ ONE
def get_student(db, student_id):
    return get_student_repo(db, student_id)


# UPDATE
def update_student(db, student_id, student):
    return update_student_repo(db, student_id, student)


# DELETE
def delete_student(db, student_id):
    return delete_student_repo(db, student_id)