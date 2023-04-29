import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Login = () => {

    let [email , setEmail] = useState()
    let [password , setPassword] = useState()

    let dispatch = useDispatch()

    let navigate = useNavigate()

    let handleLogin = (e)=>
    {
        e.preventDefault()
        let data = { email , password }
        console.log(data);
        axios.post('http://localhost:2001/login' , data )
        .then((response)=>
        {
            switch(response.data.message)
            {
                case "Login Successfull" : return dispatch({type:"user_data" , payload : response.data.userData }) , alert("login successfull") , navigate('/home') , console.log(response.data.userData);
                case "Incorrect password" : return setErrMsg(true)
                default : return alert("seems like you haven't signed before") 
            }
        })
    }

    let [errMsg , setErrMsg] = useState(false)

    return ( 
        <section className='login' >
            <main className='main' > 
                <h2>Login</h2>
                <form onSubmit={handleLogin} className='form' >
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='email' required />
                    <input onChange={(e)=>{setPassword(e.target.value) ; setErrMsg(false) }} type="password" placeholder='password' required />
                    {errMsg && <p>incorrect password</p> }
                    <input type="submit" />
                </form>
                <div className='user' >
                    <p>New User.?</p>
                    <Link to='/signup'><h2 className='link' >SignUp.</h2></Link>
                </div>
            </main>
        </section>
     );
}
 
export default Login;