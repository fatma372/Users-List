import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function FirstPage() {
    const [users,setUsers]= useState([])

    useEffect(
        ()=>{
            fetch("https://reqres.in/api/users?page=1")
            .then(res=> res.json())
            .then(data=> setUsers(data.data))
        }
    ,[]);
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
       {
        users.map(
            (user,index)=>(
                <div key={index} className="card m-1 p-0" style={{width: '18rem'}}>
                    <img src={user.avatar} className="card-img-top aspect-ratio-1 object-fit-cover" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                        <p className="card-text">{user.email}</p>
                        <Link to={`/${user.id}`} className="btn btn-primary">View Profile</Link>
                    </div>
                </div> 
            ))}
    </div>
    </>
  )
}
