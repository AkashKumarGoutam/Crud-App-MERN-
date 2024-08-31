import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdatesUser() {
  const {id} = useParams();
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [age , setAge] = useState();
  const navigate =useNavigate();

    useEffect(() => {
      axios.get("http://localhost:3001/getUser/" +id )
      .then(result=>{
        console.log(result.data)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
    }, [])




  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3001/userUpdate/" +id , {name , email , age})
    .then(result=>{
      console.log(result)
      navigate('/')
    })
    .catch(err =>console.log(err))
  }




  return (
    <div className="container m">
    <div className="container mx-auto mt-5 border">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Name....."
            aria-describedby="emailHelp"
            value={name}
            onChange={(e)=>setName(e.target.value)}
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
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="number"
            placeholder="Age.........."
            value={age}
            onChange={(e)=>setAge(e.target.value)}

          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default UpdatesUser
