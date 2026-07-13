import "./StudentCard.css";
// function StudentCard({ student }) {
//   return (
//     <div className="student-card">
//       <div className="student-header">
//         <h2>{student.studentName}</h2>
//       </div>
//       <div className="student-body">
//         <p>
//           <strong>Email :</strong> {student.email}
//         </p>
//         <p>
//           <strong>Mobile :</strong> {student.mobile}
//         </p>
//         <p>
//           <strong>Branch :</strong> {student.branch}
//         </p>
//         <p>
//           <strong>CGPA :</strong> {student.cgpa}
//         </p>
//       </div>
//     </div>
//   );
// }
// export default StudentCard;
function StudentCard({ students }) {
  return (
    <div>
      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <p>Students are not found.</p>
      ) : ( 
        <table>
          <thead>
            <tr>
              <th>SI.No</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Branch</th>
              <th>CGPA</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.studentName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.branch}</td>
                <td>{student.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default StudentCard;