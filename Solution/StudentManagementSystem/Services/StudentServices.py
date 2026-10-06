from Model.studentModel import Student


# CREATE
def create_student(db, student):
    new_student = Student(
        name=student.name,
        email=student.email,
        age=student.age,
        course=student.course
    )

    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    return new_student


# READ ALL
def get_all_students(db):
    return db.query(Student).all()


# READ ONE
def get_student(db, student_id):
    return db.query(Student).filter(Student.id == student_id).first()


# UPDATE
def update_student(db, student_id, student):
    existing_student = db.query(Student).filter(
        Student.id == student_id
    ).first()

    if existing_student is None:
        return None

    existing_student.name = student.name
    existing_student.email = student.email
    existing_student.age = student.age
    existing_student.course = student.course

    db.commit()
    db.refresh(existing_student)

    return existing_student


# DELETE
def delete_student(db, student_id):
    existing_student = db.query(Student).filter(
        Student.id == student_id
    ).first()

    if existing_student is None:
        return None

    db.delete(existing_student)
    db.commit()

    return existing_student