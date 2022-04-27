import React from 'react';
import Products from './Products';
import axios from 'axios';

const ProductHeader = ()=>{ 
    const shopAPI = (url='https://localhost:7125/api/Products')=>{
        return{
            fetchAll : ()=> axios.get(url),
            create : newRecord=>axios.post(url, newRecord),
            update : (id, updateRecord)=> axios.put(url + id,updateRecord),
            delete: id => axios.delete(id)
        }
    }
    const addOrEdit = (formData, onSuccess)=>{
        shopAPI().create(formData)
        .then(res=>{
            onSuccess();
        }).catch(err=>console.log(err))
    }
    return(
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 className="display-4">Posting your Products</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <Products addOrEdit={addOrEdit}/>
            </div>
        </div>
    )

}
export default ProductHeader;