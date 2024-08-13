import React, { useEffect, useState } from 'react';
import style from './homepage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [company, setCompany] = useState('');
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching data for index:", index);
    axios.get(`http://localhost:3000/${index}`)
      .then((response) => {
        console.log("Fetched data:", response.data);
        setName(response.data.name);
        setSalary(response.data.salary);
        setCompany(response.data.company);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.response ? error.response.data : error.message);
      });
  }, [index]);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const formHandle = (e) => {
    e.preventDefault();
    const payload = { name, salary, company };

    axios.put(`http://localhost:3000/${index}`, payload)
      .then(() => {
        console.log("Data has been saved");
        navigate('/users');
      })
      .catch((error) => {
        console.error("Error updating data:", error.response ? error.response.data : error.message);
      });
  };

  return (
    <div>
      <div id={style.myForm}>
        <form onSubmit={formHandle}>
          <h1 id={style.update}>UPDATE USER</h1>

          <label>NAME</label>
          <input type="text" value={name} onChange={handleInputChange(setName)} />
          <br />

          <label>SALARY</label>
          <input type="number" value={salary} onChange={handleInputChange(setSalary)} />
          <br />

          <label>COMPANY</label>
          <input type="text" value={company} onChange={handleInputChange(setCompany)} />
          <br /><br />

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
