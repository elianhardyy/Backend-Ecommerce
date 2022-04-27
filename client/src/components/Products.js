import React,{Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom';

const defaultImg = '/img/user.png'
const initialfield = {
    shopId:0,
    shopName:"",
    shopDesc:"",
    shopImage:"",
    imageSrc:defaultImg,
    imageFile:null,
    shopPrice:""
}


const Products = (props)=>{
    const {addOrEdit} = props;
    const [values, setValues] = useState(initialfield)
    const [errors, setErrors] = useState({})
    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,[name]:value
        })
    }
    const showPreview = e =>{
        if(e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x =>{
                setValues({
                    ...values,
                    imageFile,
                    imageSrc : x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }else{
            setValues({
                ...values,
                imageFile:null,
                imageSrc:defaultImg
            })
        }
    }
    const validate = ()=>{
        let temp = {}
        temp.shopName = values.shopName ==""?false :true
        temp.imageSrc = values.imageSrc ==defaultImg?false:true
        setErrors(temp)
        return Object.values(temp).every(x=>x==true)
    }
    const resetForm=()=>{
        setValues(initialfield)
        document.getElementById('image-uploader').value=null
        setErrors({})
    }
    const handleFormSubmit = e =>{
        e.preventDefault();
        if(validate()){
            const formData = new FormData();
            formData.append('shopId', values.shopId)
            formData.append('shopName', values.shopName)
            formData.append('shopDesc', values.shopDesc)
            formData.append('shopImage', values.shopImage)
            formData.append('imageFile', values.imageFile)
            formData.append('shopPrice', values.shopPrice)
            addOrEdit(formData,resetForm)
        }
        <Redirect to="/brochure"/>
    }
    
    const errorClass = field => ((field in errors && errors[field]==false)?'invalid-field':' ')
    return(
        <Fragment>

        <div className="container text-center">
            Employee Form
        </div>
        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
            <div className="card">
                <img src={values.imageSrc} className="card-img-top" alt="image" width="10%"/>
                <div className="card-body">
                    <div className="form-group">
                        <input className={"form-control" + errorClass('shopName')} placeholder="Name" name="shopName" value={values.shopName} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Description" name="shopDesc" value={values.shopDesc} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input type="file" accept="image/*" className={"form-control-file" + errorClass('imageSrc')} onChange={showPreview} id="image-uploader"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Price" name="shopPrice" value={values.shopPrice} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-light">Submit</button>
                    </div>
                </div>
            </div>

        </form>

        </Fragment>
    )
}
export default Products;