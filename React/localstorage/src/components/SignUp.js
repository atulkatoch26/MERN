import React, { useEffect, useState } from "react";
import './SignUp.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '', 
    username: '', 
    password: '', 
    confirmPassword: ''
  });

  const [records, setRecords] = useState([]);


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword){
      const newRecord = {...formData, id: new Date().getTime().toString()}

      setRecords([...records, newRecord])
      setFormData({
        fullName: '', 
        username: '', 
        password: '', 
        confirmPassword: ''
      });
    }
  }

  useEffect(() => {
    localStorage.setItem( "input",JSON.stringify(records));
  }, [records])

  return(
      <>
            <form className="form" onSubmit={handleSubmit}>
                    <h1> Sign Up </h1>
                    <label htmlFor="fullName" >
                        <input
                        type="text" 
                        name="fullName" 
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="fullName"
                        className="formInput"/>
                    </label>
                    <label htmlFor="username" >
                        <input type="text" 
                        name="username" 
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="username"
                        className="formInput"/>
                    </label>
                    <label htmlFor="password" >
                        <input type="password" 
                        name="password"
                        value={formData.password} 
                        onChange={handleChange}
                        placeholder="password"
                        className="formInput"/>
                    </label>
                    <label htmlFor="confirmPassword" >
                        <input type="password" 
                        name="confirmPassword" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="confirm password"
                        className="formInput"/>
                    </label>
                    <button>Sign Up</button>
            </form>
       </>
  )
}

export default SignUp;
