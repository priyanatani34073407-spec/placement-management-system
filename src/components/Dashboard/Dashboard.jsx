import "./Dashboard.css";

function Dashboard({ students }) {

  const totalStudents = students.length;

  const totalBranches = [
    ...new Set(
      students.map((student) => student.branch)
    ),
  ].length;

  const averageCGPA =
    students.length === 0
      ? 0
      : (
          students.reduce(
            (sum, student) =>
              sum + Number(student.cgpa),
            0
          ) / students.length
        ).toFixed(2);

  return (
    <div className="dashboard">

      <h1>Placement Management Dashboard</h1>

      <p className="dashboard-subtitle">
        Welcome to the Student Placement Management System
      </p>

      <div className="dashboard-cards">

        <div className="dashboard-card">

          <h2>{totalStudents}</h2>

          <p>Total Students</p>

        </div>

        <div className="dashboard-card">

          <h2>{totalBranches}</h2>

          <p>Total Branches</p>

        </div>

        <div className="dashboard-card">

          <h2>{averageCGPA}</h2>

          <p>Average CGPA</p>

        </div>

      </div>

      {students.length === 0 ? (

        <div className="dashboard-empty">

          <h2>No Student Data Available</h2>

          <p>
            Register students to view dashboard statistics.
          </p>

        </div>

      ) : (

        <div className="dashboard-success">

          <h3>
            Student records loaded successfully.
          </h3>

        </div>

      )}

    </div>
  );
}

export default Dashboard;