import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
let user = JSON.parse(localStorage.getItem("user")) || []
let initinal = {
    email: "",
    password: ""
}
const Login = () => {
    const [details, setDetails] = useState(initinal)
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target

        setDetails((prev) => ({ ...prev, [name]: value }))
    }

    const handlenavigate=() => {
        navigate("/");
    }
    const handleLogin = () => {
        let userdata = user.find((ele) => ele.email === details.email && ele.password === details.password)
        if (userdata) {
            alert("login successfull")
        } else {
            alert("user details not found")
        }
    }
    return (
        <div className='w-[40%] m-auto shadow-2xl p-3 mt-5'>
            <h1 className='text-center text-2xl font-bold'>Login Form</h1>
            <form action="" className='w-[90%] m-auto p-4'>
                <label htmlFor="">Email</label><br /><br />
                <input name='email' value={details.email} onChange={handleChange} className=' h-8 border border-black w-[100%]' type="text" placeholder='Enter you Email ' /><br /><br />
                <label htmlFor="">Password</label><br /><br />
                <input name='password' value={details.password} onChange={handleChange} className=' h-8 border border-black w-[100%]' type="text" placeholder='Enter you Email ' /><br /><br />
                <div className='flex items-center justify-center '>
                    <button onClick={handleLogin} className='bg-blue-500 p-2 rounded-md text-white'>Login</button>
                </div>
                <p className='mt-5'>Create Account<span className=' cursor-pointer text-blue-400' onClick={handlenavigate}>Click Here</span></p>

            </form>
        </div>
    )
}

export default Login
