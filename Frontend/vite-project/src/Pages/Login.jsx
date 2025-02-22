import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {

  const [LoginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleChange = async (e)=>{LoginInfo
    e.preventDefault()
    const { email, password}= LoginInfo

    try{
      const {LoginInfo} = await axios.post('./login', {
        email, password
      })

      if(LoginInfo.error){
        toast.err(LoginInfo.error);
      }
      else{
        setLoginInfo({})
        toast.success('Login Successfully...  Welcome..!!')
        navigate('/')
      }
    }

    catch(error){
      console.log(error);
    }
  }

  return (
    <div className='container'>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                    onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                    onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                    />
                </div>
                <button type='submit'> Login </button>
                <span> Don't have an account ? 
                    <Link to="/signup"> Signup </Link>
                </span>
            </form>
            <ToastContainer />
        </div>
  )
}
