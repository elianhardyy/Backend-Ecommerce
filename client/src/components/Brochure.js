import React, {Fragment} from 'react';

const Brochure = (props) =>{
    return(
        <Fragment>
            <div className="text-center">
                <h1> Name &nbsp; : &nbsp; {props.name}</h1>
                <h1> Address &nbsp; : &nbsp; {props.address}</h1>
                <h1> Product &nbsp; : &nbsp; {props.product}</h1>
                <h1> Descrpition &nbsp; : &nbsp; {props.desc}</h1>
                <h1> Price &nbsp; : &nbsp; {props.price}</h1>
            </div>
        </Fragment>
    )
}
export default Brochure;