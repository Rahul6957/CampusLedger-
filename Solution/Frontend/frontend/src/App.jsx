import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://127.0.0.1:8000";

function App() {
  const [students, setStudents] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });

  // GET students when page loads
  useEffect(() => {
    getStudents();
  }, []);

  // GET ALL STUDENTS
  const getStudents = async () => {
    try {
      const response = await axios.get(`${API_URL}/students`);

      setStudents(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load students");
    }
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // CREATE / UPDATE STUDENT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const studentData = {
        name: formData.name,
        email: formData.email,
        age: Number(formData.age),
        course: formData.course,
      };

      // UPDATE
      if (editingId) {
        await axios.put(
          `${API_URL}/students/${editingId}`,
          studentData
        );

        alert("Student updated successfully!");

        setEditingId(null);
      }

      // CREATE
      else {
        await axios.post(
          `${API_URL}/students`,
          studentData
        );

        alert("Student added successfully!");
      }

      // Clear form
      setFormData({
        name: "",
        email: "",
        age: "",
        course: "",
      });

      // Refresh student list
      getStudents();

    } catch (error) {
      console.error(error);
      alert("Operation failed");
    }
  };

  // EDIT STUDENT
  const handleEdit = (student) => {
    setEditingId(student.id);

    setFormData({
      name: student.name,
      email: student.email,
      age: student.age,
      course: student.course,
    });

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // DELETE STUDENT
  const handleDelete = async (studentId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(
        `${API_URL}/students/${studentId}`
      );

      alert("Student deleted successfully!");

      getStudents();

    } catch (error) {
      console.error(error);
      alert("Failed to delete student");
    }
  };

  // CANCEL EDIT
  const handleCancelEdit = () => {
    setEditingId(null);

    setFormData({
      name: "",
      email: "",
      age: "",
      course: "",
    });
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="header-content">
          <div>
            <h1>Student Management</h1>
            <p>Manage your students easily</p>
          </div>

          <div className="student-count">
            <span>{students.length}</span>
            <small>Students</small>
          </div>
        </div>
      </header>

      <main className="container">

        {/* ADD / EDIT STUDENT */}
        <section className="card">

          <div className="section-title">
            <div>
              <h2>
                {editingId
                  ? "Edit Student"
                  : "Add New Student"}
              </h2>

              <p className="subtitle">
                {editingId
                  ? "Update student information"
                  : "Enter student information below"}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              {/* NAME */}
              <div className="input-group">
                <label>Student Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter student name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="input-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* AGE */}
              <div className="input-group">
                <label>Age</label>

                <input
                  type="number"
                  name="age"
                  placeholder="Enter age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* COURSE */}
              <div className="input-group">
                <label>Course</label>

                <input
                  type="text"
                  name="course"
                  placeholder="Enter course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-buttons">

              <button
                className="add-btn"
                type="submit"
              >
                {editingId
                  ? "Update Student"
                  : "+ Add Student"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              )}

            </div>

          </form>
        </section>


        {/* STUDENT LIST */}
        <section className="card">

          <div className="table-header">

            <div>
              <h2>Students</h2>

              <p className="subtitle">
                Total Students: {students.length}
              </p>
            </div>

            <button
              className="refresh-btn"
              onClick={getStudents}
            >
              ↻ Refresh
            </button>

          </div>

          <div className="table-container">

            {students.length === 0 ? (

              <div className="empty-state">
                <h3>No Students Found</h3>

                <p>
                  Add your first student using the form above.
                </p>
              </div>

            ) : (

              <table>

                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {students.map((student) => (

                    <tr key={student.id}>

                      <td>
                        <span className="id-badge">
                          #{student.id}
                        </span>
                      </td>

                      <td className="student-name">
                        {student.name}
                      </td>

                      <td>
                        {student.email}
                      </td>

                      <td>
                        {student.age}
                      </td>

                      <td>
                        <span className="course">
                          {student.course}
                        </span>
                      </td>

                      <td>

                        <button
                          className="edit-btn"
                          onClick={() =>
                            handleEdit(student)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() =>
                            handleDelete(student.id)
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            )}

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;