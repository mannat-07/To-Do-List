import React , { useState } from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function Signup() {

  const [SignupInfo, setSignupInfo] = useState({
    userName: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  
  const handleChange = async (e)=>{
    e.preventDefault()
    const {userName, email, password}= SignupInfo

    try{
      const {SignupInfo} = await axios.post('./signup', {
        userName, email, password
      })

      if(SignupInfo.error){
        toast.err(SignupInfo.error);
      }
      else{
        setSignupInfo({})
        toast.success('Signup Successfully...  Welcome..!!')
        navigate('/login')
      }
    }

    catch(error){
      console.log(error);
    }
  }

  return (
    <div className='container'>
            <h1>Signup</h1>
            <form>
                <div>
                    <label htmlFor='userName'>Name</label>
                    <input
                    onChange={handleChange}
                        type='text'
                        name='userName'
                        autoFocus
                        placeholder='Enter your name...'
                    />
                </div>
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
                <button type='submit'> Signup </button>
                <span> Already have an account ?
                    <Link to="/login"> Login </Link>
                </span>
            </form>
            <ToastContainer />
        </div>
  )
}
