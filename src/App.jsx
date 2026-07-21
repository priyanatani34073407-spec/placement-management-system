import './App.css';

import { Routes, Route } from "react-router-dom";

import { useState } from 'react';

import Layout from './components/Layouts/Layout';

import Home from './components/pages/Home';

import Register from './components/Registration/Registration';

import Login from './components/pages/Login/Login';

import Students from './components/pages/Student/Students';

import StudentDetails from './components/StudentDetails';

import Dashboard from './components/Dashboard/Dashboard';

import NotFound from './components/pages/NotFound/NotFound';

import CompanyRegistration from './components/pages/CompanyRegistration/CompanyRegistration';

import Companies from './components/Companies/Companies';
import EditStudent from "./components/pages/EditStudent/EditStudent";



function App() {

  const [students, setStudents] = useState([]);

  return (

    <Routes>

      <Route 
        path="/login" 
        element={<Login />}
      />

      {/* Without Layout */}



      <Route 
        path="/register" 
        element={<Register />}
      />



      {/* With Layout */}

      <Route element={<Layout />}>


        <Route 
          path="/" 
          element={<Home />}
        />


        <Route 
          path="/dashboard" 
          element={<Dashboard />}
        />


        <Route 
          path="/students" 
          element={<Students />}
        />


        <Route 
          path="/student/:id" 
          element={<StudentDetails />}
        />
        <Route
          path="/students/edit/:id"
          element={
            <EditStudent
              students={students}
              setStudents={setStudents}
            />
          }
        />


        <Route 
          path="/company-registration" 
          element={<CompanyRegistration />}
        />


        <Route 
          path="/companies" 
          element={<Companies />}
        />


      </Route>



      {/* 404 Page */}

      <Route 
        path="*" 
        element={<NotFound />}
      />


    </Routes>

  );

}
export default App;
