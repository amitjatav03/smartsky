import React, { useState } from 'react'
import StartStructure from '../components/StartStructure'
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import './Signup.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: location.state?.email || '',
    firstName: '',
    lastName: '',
    contact: '',
    password: ''
  })

  const [show, setShow] = useState(false);

  function changeHandler(event) {
    const { name, value, type } = event.target

    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const {firstName, lastName, email, password, contact} = formData

    const data = {
      firstname: firstName,
      lastname: lastName,
      email, password, contact
    }

    console.log("signup data", data)
    const api = `${import.meta.env.VITE_BASE_URL}/signup`;

    try {
      await axios.post(api, data);
      navigate('/login');
      console.log("User Created Successfully")

    } catch(error) {
      console.log(error.message);
    }
  }


  return (
    <StartStructure>
      <div className=' absolute top-[6%]'>
        <h1 className=' text-[1.7vw]'>
          <span className='text-red-600 font-semibold'>
            Hmm...
          </span>

          <span>
            &nbsp;we don't recognize
          </span>

          <br />

          <span>
            that email address
          </span>
        </h1>

        <div className='mt-2 text-[1em]'>
          <p>let's get you signed up!</p>
        </div>

        <div className='w-full h-[100%] flex justify-center relative '>
          <form onSubmit={submitHandler}>
            <input
              className='w-[27vw] h-[3.7vw] bg-white p-2 pl-7 rounded-3xl border border-zinc-400 mt-7 shadow-sm focus:outline-none focus:border-[1px] focus:border-zinc-700 text-zinc-900'
              type='email'
              name='email'
              placeholder='abc@gmail.com'
              value={formData.email}
              onChange={changeHandler}
            />

            <div className='flex justify-between'>
              <input
                className='w-[12.8vw] h-[3.7vw] mt-5 bg-white pl-4 rounded-3xl border border-zinc-400 shadow-sm focus:outline-none focus:border-[1px] focus:border-zinc-700 text-zinc-900'
                type='text'
                name='firstName'
                placeholder='First name'
                value={formData.firstName}
                onChange={changeHandler} />

              <input
                className='w-[12.8vw] h-[3.7vw] mt-5 bg-white pl-4 rounded-3xl border border-zinc-400 shadow-sm focus:outline-none focus:border-[1px] focus:border-zinc-700 text-zinc-900'
                type='text'
                name='lastName'
                placeholder='Last name'
                value={formData.lastName}
                onChange={changeHandler} />
            </div>

            <input
              className='contact w-[27vw] h-[3.7vw] mt-5 bg-white pl-4 rounded-3xl border border-zinc-400 shadow-sm focus:outline-none focus:border-[1px] focus:border-zinc-700 text-zinc-900'
              type='number'
              name='contact'
              placeholder='(+91) 99999 99999'
              value={formData.contact}
              onChange={changeHandler} />

            <div className=' password w-[27vw] h-[3.7vw] mt-5 bg-white p-2 pl-7 rounded-3xl border border-zinc-400 flex justify-between items-center shadow-sm focus:border-[1px] focus-within:border-zinc-700'>

              <input
                className='w-full h-full focus:outline-none'
                type={show ? 'text' : 'password'}
                placeholder='password'
                name='password'
                value={formData.password}
                onChange={changeHandler}
              />

              <button
                type='button'
                onClick={() => {
                  setShow(prev => !prev);
                }}>
                {
                  show ?
                    <FaRegEyeSlash style={{ fontSize: '20px', margin: '2px', marginRight: '15px' }} />
                    :
                    <IoEyeOutline style={{ fontSize: '20px', margin: '2px', marginRight: '15px' }} />
                }

              </button>
            </div>

            <button
              className='flex items-center mt-5 px-6 bg-[#f8ca1e] rounded-3xl border border-zinc-600 shadow-sm absolute  left-[8.5vw] hover:bg-[#e6b81b] pl-10 cursor-pointer'
              type='submit'
              >
              Sign Up
              <img
                className='w-[2.6em] ml-1'
                src="19.png"
              />
            </button>
          </form>
        </div>
      </div>

    </StartStructure>
  )
}

export default Signup