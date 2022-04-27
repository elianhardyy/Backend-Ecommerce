import React from 'react';

const Home = (props)=>{
    return(
        <div>
            <h1>
            {props.name ? 'Welcome '+ props.name:'You are not logged in'}
            </h1>
        </div>
    )
}
export default Home