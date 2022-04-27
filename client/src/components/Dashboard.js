import React,{useEffect} from 'react';
import { useState } from 'react';
import {toast} from 'react-toastify'

const Dashboard = ({setAuth})=>{
    const [name, setName] = useState("");
    const getProfile = async ()=>{
        try{
            const response = await fetch("http://localhost:5000/dashboard",{
                method:"POST",
                headers:{jwt_token: localStorage.jwToken}
            })
            const parseRes = await response.json();
            setName(parseRes.regist_name)
        }catch(e){
            console.error(e.message);
        }
    }
    const logout = async e =>{
        e.preventDefault();
        try {
            localStorage.removeItem("token");
            setAuth(false);
            toast.success("Log out successfully")
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=>{
        getProfile();
    },[]);
    return(
        <div>
            <h1 className="mt-5">Dashboard</h1>
            <h2>Welcome {name}</h2>
            <button onClick={e=>logout(e)} className="btn btn-danger">Logout</button>
        </div>
    )
}
export default Dashboard;