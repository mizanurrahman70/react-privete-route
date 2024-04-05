import React, { useContext } from 'react';
import { TextContext } from '../AuthContext/AuthContext';
import { Result } from 'postcss';


const Regester = () => {
  const {creatUser}=useContext(TextContext)
  
    const btnHandle=(e)=>{
        e.preventDefault()
        const email= e.target.email.value 
        const password =e.target.password.value
        console.log('button  working',email,password)
        creatUser(email,password)
        .then((result)=>console.log(result.user))
        .catch((error)=>console.log(error.massage))
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
                <input type="password" name='password'  placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Regester</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Regester;