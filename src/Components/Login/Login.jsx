import React, { useContext, useState } from 'react';
import { TextContext } from '../AuthContext/AuthContext';

const Login = () => {
  const {loginUser,setUser}=useContext(TextContext)
 
   const [error,setError]=useState('')
   const [sucess,setSucess]=useState('')
  
    const btnHandle=(e)=>{
        e. preventDefault()
        setSucess('')
        setError('')
      
        const email= e.target.email.value 
        const password =e.target.password.value
        loginUser(email,password)
        .then(result=>{
          const userData=result.user
          setUser(userData)
          setSucess('Login Sucess')
        })
        .catch((error)=>{
          const errorMsg=error.message
          setError(errorMsg)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={btnHandle} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {error && <p className='text-red-500'> {error} </p>}
        {sucess && <p className='text-green-700'> {sucess} </p>}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;