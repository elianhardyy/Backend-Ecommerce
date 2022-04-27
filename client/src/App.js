import './App.css';
import React, {Fragment, useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'
import Nav from './components/Nav'
import Brochure from './components/Brochure';
import ProductHeader from './components/ProductHeader';
import Identity from './components/Identity';

function App() {
  const [name, setName] = useState('');
  const [ buyer, setBuyer] = useState('');
  const [address, setAddress] = useState(' ');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');


  useEffect(()=>{(
    async()=>{
      const response = await fetch("http://localhost:4000/api/user",{
        method : "GET",
        headers : {'Content-Type': 'application/json'},
        credentials:'include',
      });
      const content = await response.json();
      setName(content.name)

      const brochure = await fetch("http://localhost:8081/api",{
        method: "GET",
        headers: {'Content-Type':'application/json'}
      })
      const brochureSubmit = await brochure.json();
      setBuyer(brochureSubmit.buyer)
      setAddress(brochureSubmit.address)

      const getProduct = await fetch("https://localhost:7125/api/Products",{
        method: "GET",
        headers : {'Content-Type':'application/json'}
      })
      const brochureContinue = await getProduct.json();
      setTitle(brochureContinue.title)
      setDescription(brochureContinue.description)
      setPrice(brochureContinue.price)
    }
  )();
      
  })

  return (
    <Fragment>
      <BrowserRouter>
      <Nav name={name} setName={setName} />
      <main className="form-signin">
        <Route path="/" exact component={()=> <Home name={name}/>}/>
        <Route path="/login" exact component={()=> <Login  setName={setName}/>}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/products" exact component={ProductHeader}/>
        <Route path="/identity" exact component={Identity}/>
        <Route path="/brochure" exact components={()=><Brochure name={buyer} address={address} product={title} desc={description} price={price}/>}/>
      </main>
      </BrowserRouter>
    </Fragment> 
  );
}

export default App;
