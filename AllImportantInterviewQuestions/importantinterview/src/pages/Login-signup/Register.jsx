import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const details = {
    name: "",
    password: "",
    email: ""

}
let arr = JSON.parse(localStorage.getItem("user")) || []
const Register = () => {
    const [data, setData] = useState(details)
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({
            ...prev, [name]: value
        }))
    }
    const handlenavigate = () => {
        navigate("/login");
    }

    const handleValue = (e) => {
        e.preventDefault()
        alert("submitted")
        arr.push(data)
        localStorage.setItem("user", JSON.stringify(arr))
        setData(details)
        console.log(data);

    }

    return (
        <div className='w-[40%] m-auto shadow-2xl p-3 mt-5'>
            <h1 className='text-center text-2xl font-bold'>Registration Form</h1>
            <form action="" className='w-[90%] m-auto p-4'>
                <label htmlFor="">Name</label><br /><br />
                <input name="name" value={data.name} onChange={handleChange} className=' h-8 border border-black w-[100%]' type="text" placeholder='Enter you Your ' /><br /><br />
                <label htmlFor="">Email</label><br /><br />
                <input name="email" value={data.email} onChange={handleChange} className=' h-8 border border-black w-[100%]' type="text" placeholder='Enter you Email ' /><br /><br />
                <label htmlFor="">Password</label><br /><br />
                <input name="password" value={data.password} onChange={handleChange} className=' h-8 border border-black w-[100%]' type="text" placeholder='Enter you  Password ' /><br /><br />
                <div className='flex items-center justify-center '>
                    <button onClick={handleValue} className='bg-blue-500 p-2 rounded-md text-white'>Register</button>
                </div>
                <p className='mt-5'>Already User<span className=' cursor-pointer text-blue-400' onClick={handlenavigate}>Click Here</span></p>

            </form>
        </div>
    )
}

export default Register
