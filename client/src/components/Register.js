import React,{Fragment, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';


function Register(){
    const[name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const onSubmitForm= async e =>{
        e.preventDefault();
        try {
            const body = {name, email,password}
            await fetch("http://localhost:4000/api/register",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            
            
            setRedirect(true);
            
        } catch (err) {
            console.error(err.message);
        }
        if(redirect){
            return <Redirect to="/login"/>
        }
    }
    return(

        <Fragment>
            <h1 className="text-center my-5">Register</h1>
            <form onSubmit={onSubmitForm}>
            <input type="text" name="name" placeholder="name" className="form-control my-3" required onChange={e=>setName(e.target.value)}/>
            <input type="email" name="email" placeholder="email" className="form-control my-3" required onChange={e=>setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="password" className="form-control my-3" required onChange={e=>setPassword(e.target.value)}/>
            <button className="btn btn-success btn-block" >Register</button>
            </form>
            <h5>If you have account</h5>
            <Link to="/login">Login</Link>
        </Fragment>
    )
}
export default Register;