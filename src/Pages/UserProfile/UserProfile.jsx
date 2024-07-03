import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function UserProfile() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data.data);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching user data:", error));
    }, []);

    if (loading) {
        return <>
            <center className='w-100 h-100 p-5'>
                <div className="spinner-border text-primary p-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </center>
        </>;
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">User profile</a>
                </div>
            </nav>

            <div className="user-details-wrapper row container-fluid px-0 mx-0 p-2">
                <div className="col-12 col-md-4 col-sm-6">
                    <div className="user-image aspect-ratio-1" >
                        <img className="user-picture w-100 " src={user.avatar} style={{maxHeight:'350px', minWidth:'250px'}} alt=""/>
                    </div>
                </div>
                <div className="col-12 col-sm-6 ">
                    <div className="user-details">
                        <h2 className="user-name">{user.first_name} {user.last_name}</h2>
                        <p className="user-email">{user.email}</p>
                        <a className="btn btn-primary" href="../">Back to home</a>
                    </div>
                </div>
            </div>
        </>
    );
}