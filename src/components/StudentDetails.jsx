import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await fetch(`http://localhost:8000/students/${id}`);

      const data = await response.json();

      if (response.ok) {
        setStudent(data.student);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Unable to fetch student details.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div className="student-details">
      <h1>Student Details</h1>
      <hr />

      <p><strong>ID:</strong> {student._id}</p>
      <p><strong>Name:</strong> {student.studentName}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Branch:</strong> {student.branch}</p>
      <p><strong>CGPA:</strong> {student.cgpa}</p>

      <br />

      <Link to="/students">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default StudentDetails;
