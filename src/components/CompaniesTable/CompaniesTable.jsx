function CompaniesTable({ companies }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Company</th>
          <th>Location</th>
          <th>HR Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Job Role</th>
          <th>Package</th>
          <th>Eligibility</th>
        </tr>
      </thead>

      <tbody>
        {companies.map((company, index) => (
          <tr key={index}>
            <td>{company.companyName}</td>
            <td>{company.location}</td>
            <td>{company.hrName}</td>
            <td>{company.email}</td>
            <td>{company.phone}</td>
            <td>{company.jobRole}</td>
            <td>{company.package}</td>
            <td>{company.eligibility}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CompaniesTable;
