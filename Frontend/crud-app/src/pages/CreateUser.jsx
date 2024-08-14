import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [age , setAge] = useState();
  const navigate =useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/createUser' , {name , email , age})
    .then(result=>{
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="container m">
      <div className="container mx-auto mt-5 border">
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name....."
              onChange={(e)=>{setName(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email.........."
              aria-describedby="emailHelp"
              onChange={(e)=>{setEmail(e.target.value)}}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Age.........."
              onChange={(e)=>{setAge(e.target.value)}}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
