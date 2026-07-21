import { useState } from "react";
import "./Companies.css";

function Companies() {
  const [companies] = useState([
    {
      id: 1,
      name: "TCS",
      location: "Hyderabad",
      package: "4 LPA",
    },
    {
      id: 2,
      name: "Infosys",
      location: "Bangalore",
      package: "5 LPA",
    },
    {
      id: 3,
      name: "Wipro",
      location: "Chennai",
      package: "3.8 LPA",
    },
    {
      id: 4,
      name: "Accenture",
      location: "Pune",
      package: "6 LPA",
    },
  ]);

  return (
    <div className="companies">
      <h1>Companies</h1>
      <p>List of companies participating in placements.</p>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Company Name</th>
            <th>Location</th>
            <th>Package</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((company, index) => (
            <tr key={company.id}>
              <td>{index + 1}</td>
              <td>{company.name}</td>
              <td>{company.location}</td>
              <td>{company.package}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Companies;
