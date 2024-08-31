import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001")
      .then(result => { 
        console.log(result.data);
        setUsers(result.data);
      })
      .catch(err => console.log("not getting users details", err));
  }, []);



  const handleDelete=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3001/deleteUser/"+id)
    .then(res=>{
      console.log(res)
      window.location.reload()
    }).catch(err=>console.log(err))
  }

  return (
    <div className='container pt-5'>
      <div>
        <h1>
          CRUD oparetion using MERN Stack
        </h1>
      </div>
      <div className='container m-5'>
        <Link to='/create-user' className='btn btn-success'>+ Add User</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users.map((ele, index) => (
            <tr key={index}>
              <td>{ele.name}</td> 
              <td>{ele.email}</td>
              <td>{ele.age}</td>
              <td>
                <Link to={`/update-user/${ele._id}`} className='btn btn-success'>Edit</Link>
                <button className='btn btn-danger' onClick={(e)=>handleDelete(ele._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
