import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CompanyRegistration.css';

function CompanyRegistration() {
  const navigate = useNavigate();

  const [company, setCompany] = useState({
    companyName: "",
    location: "",
    hrName: "",
    email: "",
    phone: "",
    package: "",
    jobRole: "",
    eligibility: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setCompany({
      ...company,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let companies =
      JSON.parse(localStorage.getItem("companies")) || [];

    companies.push(company);

    localStorage.setItem(
      "companies",
      JSON.stringify(companies)
    );

    alert("Company Registered Successfully!");

    navigate("/companies");
  }

  return (
    <div className="company-registration">
      <h1>Company Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={company.companyName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={company.location}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="hrName"
          placeholder="HR Name"
          value={company.hrName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="HR Email"
          value={company.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={company.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="jobRole"
          placeholder="Job Role"
          value={company.jobRole}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="package"
          placeholder="Package (LPA)"
          value={company.package}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="eligibility"
          placeholder="Eligibility Criteria"
          value={company.eligibility}
          onChange={handleChange}
          required
        />

        <button type="submit">Register Company</button>
      </form>
      </div>
  );
}

export default CompanyRegistration;


