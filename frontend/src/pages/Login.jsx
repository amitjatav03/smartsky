import {useState} from 'react'
import StartStructure from '../components/StartStructure'
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const[formData , setFormData] = useState({
    email : location.state?.email || '',
    password : ''
  })
  
  const [show , setShow] = useState(false);


  function changeHandler(event){
    const {name , value , type} = event.target;

    setFormData(prevData=>{
      return{
        ...prevData,
        [name] : value
      }
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      password: formData.password
    }

    console.log("login data", data)
    const api = `${import.meta.env.VITE_BASE_URL}/login`;

    try {
      await axios.post(api, data);
      navigate('/home');

    } catch(error) {
      console.log(error.message);
    }
  }

  return (
    <StartStructure>
        <h1 className='text-center text-[1.7vw]'>
          Welcome back , 
          <span className='font-semibold'> 
            SkyRoute 
          </span> 
        </h1>

        <div className='absolute top-[5.8em] left-[38em]'>
          <p className='text-left text-[1em]'> 
            let's get you signed in.
          </p>
        </div>
        

        <div className='w-full h-[90%] flex justify-center relative'>
          <form onSubmit={submitHandler}>
            <input 
            className='w-[25vw] h-[3.7vw] bg-white p-2 pl-7 rounded-3xl border border-zinc-400 my-13 shadow-sm focus:outline-none focus:border-[1px] focus:border-zinc-700 text-zinc-900'
            type='email'
            name='email'
            placeholder='abc@gmail.com' 
            value={formData.email}
            onChange={changeHandler}
            />
            
            <br/>

            <div className='relative'>
              <input
              className='block px-7 pb-2.5 w-[25vw] h-[3.7vw] pt-4 text-md text-zinc-900 bg-white appearance-none dark:text-white dark:border-gray-600 rounded-3xl focus:outline-none focus:ring-0 focus-within:border-zinc-700 peer shadow-sm focus:border-[1px] border border-zinc-400'
              type={show ? 'text' : 'password'}
              placeholder=''
              name='password'
              id="default_outlined"
              value={formData.password}
              onChange={changeHandler}
              />

              <label htmlFor="default_outlined" className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-90 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-7 text-md peer-focus:px-2 peer-focus:zinc-700 peer peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>

              <button 
              className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
              type='button'
              onClick={()=>{
                setShow(prev => !prev);
              }}>
                {
                show ? 
                  <FaRegEyeSlash style={{ fontSize: '20px', margin:'2px', marginRight:'15px' }} />
                :
                  <IoEyeOutline style={{ fontSize: '20px', margin:'2px', marginRight:'15px' }} /> 
                }

              </button>
            </div>

            <br/>

            <button 
            className='flex items-center justify--center px-6 bg-[#f8ca1e] rounded-3xl border border-zinc-600 shadow-sm absolute top-[18vw] left-[8.5vw] hover:bg-[#e6b81b] pl-10 cursor-pointer'
            type='submit'>
              Log In
              <img 
              className='w-[2.6em] ml-1'
              src="19.png" 
              />
            </button>

          </form>
        </div>
    </StartStructure>
  )
}

export default Login