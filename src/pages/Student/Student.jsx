import { useState } from "react";
import "./Student.css";
import StudentCard from "../../components/StudentCard/StudentCard";

function Student({ students, setStudents }) {

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.studentName.toLowerCase().includes(search.toLowerCase())
  );

  function deleteStudent(id) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {

      const updatedStudents = students.filter(
        (student) => student.id !== id
      );

      setStudents(updatedStudents);
    }
  }

  return (
    <div className="student-container">

      <h1>Registered Students</h1>

      <input
        type="text"
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

          {/* Cards */}

          <div className="card-grid">

            {filteredStudents.map((student) => (

              <StudentCard
                key={student.id}
                student={student}
              />

            ))}

          </div>

          {/* Table */}

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

                  <tr key={student.id}>

                    <td>{index + 1}</td>

                    <td>{student.studentName}</td>

                    <td>{student.email}</td>

                    <td>{student.mobile}</td>

                    <td>{student.branch}</td>

                    <td>{student.cgpa}</td>

                    <td>

                      <button
                        className="delete-btn"
                        onClick={() => deleteStudent(student.id)}
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