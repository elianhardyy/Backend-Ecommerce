import React, {Fragment, useState} from 'react';
import axios from 'axios';
const Identity = () => {
    const[inputs, setInputs] = useState({
        buyer:"",
        address:""
    })
    const {buyer,address} = inputs;
    const OnChange = (e) => setInputs({...inputs,[e.target.name]:[e.target.value]})
    const OnSubmit = async () =>{
        const receiptsFormData = new FormData();
        receiptsFormData.append("buyer",buyer)
        receiptsFormData.append("address",address)
        try {
            return await axios.post("http://localhost:8081/api").then(res => res.data)
        } catch (error) {
            console.log(error)
        }
    }
    

    return(
        <Fragment>
            <div className="container text-center">
            Employee Form
            </div>
            <form autoComplete="off" className="col-md-4"  onSubmit={OnSubmit} >
            <div className="card">
                
                <div className="card-body">
                    <div className="form-group">
                        <input className="form-control" placeholder="Name" name="buyer" onChange={OnChange} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Address" name="address" onChange={OnChange} />
                    </div>
                    
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-success">Buy</button>
                    </div>
                </div>
            </div>

        </form>
        </Fragment>
    )
}
export default Identity;