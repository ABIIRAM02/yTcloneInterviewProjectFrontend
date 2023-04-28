import { Link } from "react-router-dom";
import './signup.css'
import { useState } from "react";
import axios from "axios";

const Signup = () => {

    let [name , setName] = useState()
    let [email, setEmail] = useState()
    let [password, setPassword] = useState()
    let [confirmPassword, setConfirmPassword] = useState()

    let handleLogin = (e)=>
    {
        e.preventDefault()
        let data = { name , email , password  }
        if(password === confirmPassword)
        {
            axios.post('http://localhost:2001/signup' ,data)
            .then((response)=>
            {
                alert(response.data.message)
            })
        }else {
            alert("Password mismatch")
        }
    }

    return ( 
        <section className='login' >
            <main className='main' >
                <h2>SignUp</h2>
                <form onSubmit={handleLogin} className='signup-form' >
                    <input onChange={(e)=>{setName(e.target.value)}} required type="text" placeholder="name" />
                    <input onChange={(e)=>{setEmail(e.target.value)}} required type="email" placeholder="email" />
                    <input onChange={(e)=>{setPassword(e.target.value)}} required type="password" placeholder="password" />
                    <input onChange={(e)=>{setConfirmPassword(e.target.value)}} required type="password" placeholder="Confirm-password" />
                    <input type="submit" />
                </form>
                <div className='user' >
                    <p>Already an User.?</p>
                    <Link to='/'><h2 className='link' >Login.</h2></Link>
                </div>
            </main>
        </section>
     );
}
 
export default Signup;