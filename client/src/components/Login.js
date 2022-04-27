import React,{Fragment, useState} from 'react';
import { Link } from 'react-router-dom';

import {Redirect} from 'react-router-dom'


const Login =(props)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const onSubmitForm = async (e)=>{
        e.preventDefault();
        
        const body = {email, password}
        const response = await fetch("http://localhost:4000/api/login",{
            method:"POST",
            headers:{"Content-type": "application/json"},
            credentials:'include',
            body: JSON.stringify(body)
        });
        const content = await response.json();
        setRedirect(true)
        props.setName(content.name)
       
        if(redirect){
            return <Redirect to="/ "/>
        }
    }
    return(
        <Fragment>
            <h1 className="text-center my-5">Login</h1>
            <form onSubmit={onSubmitForm}>
                <input type="email" name="email" placeholder="email" className="form-control my-3"
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" name="password" placeholder="password" className="form-control my-3"
                 onChange={e => setPassword(e.target.value)}
                />
                <button className="btn btn-success btn-block" >Login</button>
            </form>
            <Link to="/register">Register</Link>
        </Fragment>
    )
}
export default Login;