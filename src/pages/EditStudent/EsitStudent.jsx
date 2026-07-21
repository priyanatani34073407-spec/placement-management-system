import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";
import "./EditStudent.css";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const[loading, setLoading] = useState(false);
  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await api.get(`/students/${id}`);

      const student = response.data.student;

      setStudentName(student.studentName);
      setEmail(student.email);
      setPhone(student.phone);
      setBranch(student.branch);
      setCgpa(student.cgpa);
    } catch (error) {
      console.error(error);
      alert("Student not found");
    }
  };

 const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    await api.put(`/students/${id}`, {
      studentName,
      email,
      phone,
      branch,
      cgpa,
    });

    alert("Student Updated Successfully");
    navigate("/students");
  } catch (error) {
    console.error(error);
    alert("Update Failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="edit-container">
      <h2>Edit Student</h2>

      <form onSubmit={handleUpdate} className="edit-form">

        <label>Name</label>
        <input
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Branch</label>
        <input
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />

        <label>CGPA</label>
        <input
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
        />

        <button disabled={loading} type="submit">
          {loading ? "Updating student..":"Update Student"}
        </button>

      </form>
    </div>
  );
}

export default EditStudent;
