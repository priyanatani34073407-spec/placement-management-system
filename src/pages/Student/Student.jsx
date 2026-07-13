import { useState } from "react";
import "./Student.css";
import StudentCard from "../../components/StudentCard/StudentCard";

function Student({ students, setStudents }) {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.studentName.toLowerCase().includes(search.toLowerCase())
  );

  function deleteStudent(index) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      const updatedStudents = students.filter((_, i) => i !== index);
      setStudents(updatedStudents);
    }
  }

  return (
    <div className="student-container">
      <h1>Registered Students</h1>

      <input
        type="text"
        className="search-box"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredStudents.length === 0 ? (
        <div className="empty-state">
          <h2>No Students Registered</h2>
          <p>Please register students to view records.</p>
        </div>
      ) : (
        <>
          {/* Student Cards */}

          <div className="card-grid">
            {filteredStudents.map((student, index) => (
              <StudentCard
                key={index}
                student={student}
              />
            ))}
          </div>

          {/* Student Table */}

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Branch</th>
                  <th>CGPA</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.studentName}</td>
                    <td>{student.email}</td>
                    <td>{student.mobile}</td>
                    <td>{student.branch}</td>
                    <td>{student.cgpa}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteStudent(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Student;