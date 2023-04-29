import { Link, useNavigate } from "react-router-dom";
import './signup.css'
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import {formSchema} from '../../models/index'

const Signup = () => {

    // let [name , setName] = useState()
    // let [email, setEmail] = useState()
    // let [password, setPassword] = useState()
    // let [confirmPassword, setConfirmPassword] = useState()

    // let handleLogin = (e)=>
    // {
    //     e.preventDefault()
    //     let data = { name , email , password  }
    //     if(password === confirmPassword)
    //     {
    //         axios.post('http://localhost:2001/signup' ,data)
    //         .then((response)=>
    //         {
    //             alert(response.data.message)
    //         })
    //     }else {
    //         alert("Password mismatch")
    //     }
    // }

    let navigate = useNavigate()

    let onSubmit = ( values , actions )=>
    {
        console.log(values);
        let data = { name:values.name , email:values.email , password:values.password  }
     
            axios.post('http://localhost:2001/signup' ,data)
            .then((response)=>
            {
                alert(response.data.message)
                actions.resetForm()
                navigate('/')
            })
     
    }

    let { values , handleBlur , handleChange , handleSubmit , errors , touched } = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            ConfirmPassword:''
        },
        onSubmit,
        validationSchema: formSchema
    })

    console.log(errors);


    return ( 
        <section className='login' >
            <main className='main' >
                <div>
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit} className='signup-form' >

                    <input id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} required type="text" placeholder="name" className={errors.name && touched.name ? 'inputERR' : ''} />
                    { errors.name && touched.name && <p>{errors.name}</p> }

                    <input id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} required type="email" placeholder="email" className={errors.email && touched.email ? 'inputERR' : ''} />
                    { errors.email && touched.email && <p>{errors.email}</p> }
                    
                    <input id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} required type="password" placeholder="password" className={errors.password && touched.password ? 'inputERR' : ''} />
                    { errors.password && touched.password && <p>{errors.password}</p> }
                    
                    <input id="ConfirmPassword" value={values.ConfirmPassword} onChange={handleChange} onBlur={handleBlur} required type="password" placeholder="Confirm-password" className={errors.ConfirmPassword && touched.ConfirmPassword ? 'inputERR' : ''} />
                    { errors.ConfirmPassword && touched.ConfirmPassword && <p>{errors.ConfirmPassword}</p> }
                    
                    <input type="submit" />

                </form>
                </div>
                <div className='user' >
                    <p>Already an User.?</p>
                    <Link to='/'><h2 className='link' >Login.</h2></Link>
                </div>
            </main>
        </section>
     );
}
 
export default Signup;