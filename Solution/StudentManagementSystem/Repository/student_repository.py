from sqlalchemy import text


# CREATE
def create_student(db, student):
    query = text("""INSERT INTO students (name, email, age, course) VALUES (:name, :email, :age, :course) """)

    db.execute(
        query,
        {
            "name": student.name,
            "email": student.email,
            "age": student.age,
            "course": student.course
        }
    )

    db.commit()

    return get_student_by_email(db, student.email)


# READ ALL
def get_all_students(db):
    query = text("""SELECT  id, name, email, age, course FROM students""")

    result = db.execute(query)

    return result.mappings().all()


# READ ONE
def get_student(db, student_id):
    query = text(""" SELECT id, name, email, age, course FROM students WHERE id = :student_id """)

    result = db.execute( query,{"student_id": student_id} )

    return result.mappings().first()


# UPDATE
def update_student(db, student_id, student):
    query = text("""UPDATE studentsSET name = :name,    email = :email,    age = :age,    course = :courseWHERE id = :student_id """)

    result = db.execute(query,
        {
            "name": student.name,
            "email": student.email,
            "age": student.age,
            "course": student.course,
            "student_id": student_id
        }
    )

    db.commit()

    if result.rowcount == 0:
        return None

    return get_student(db, student_id)


# DELETE
def delete_student(db, student_id):
    query = text("""DELETE FROM students WHERE id = :student_id""")

    result = db.execute( query, {"student_id": student_id} )

    db.commit()

    if result.rowcount == 0:
        return None

    return {"message": "Student deleted successfully"}


# Helper
def get_student_by_email(db, email):
    query = text("""SELECT id, name, email, age, course FROM students WHERE email = :email """)

    result = db.execute(query,{"email": email} )

    return result.mappings().first()