import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './homepage.module.css';

const Users = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users")    
      .then((response) => {
        console.log("Got the Data");
        setContent(response.data);                     
      })
      .catch(() => {
        console.log("Error fetching data");
      });
  }, []);     

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        // Refresh the user list after deletion
        setContent(content.filter(user => user.id !== id));
      })
      .catch(() => {
        console.log("Error deleting user");
      });
  };

  return (
    <div id={style.homePage}>
      {content.map((user) => (
        <div key={user.id} id={style.card}>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>EMPLOYEE {user.id}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NAME:</td>      
                <td>{user.name}</td>   
              </tr>
              <tr>
                <td>SALARY:</td>      
                <td>{user.salary}</td>
              </tr>
              <tr>
                <td>Company:</td>       
                <td>{user.company}</td>    
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                  <Link to={`/edit/${user.id}`}>
                    <button className={style.buttons}>Edit</button>
                  </Link>
                </td>
                <td>
                  <button className={style.buttons} onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Users;
