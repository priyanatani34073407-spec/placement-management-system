import "./StudentCard.css";

function StudentCard({ student }) {
  return (
    <div className="student-card">

      <div className="student-header">
        <h2>{student.studentName}</h2>
      </div>

      <div className="student-body">

        <p>
          <strong>Email :</strong> {student.email}
        </p>

        <p>
          <strong>Mobile :</strong> {student.mobile}
        </p>

        <p>
          <strong>Branch :</strong> {student.branch}
        </p>

        <p>
          <strong>CGPA :</strong> {student.cgpa}
        </p>

      </div>

    </div>
  );
}

export default StudentCard;