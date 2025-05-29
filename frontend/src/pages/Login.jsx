import React,{useState} from 'react'
import StartStructure from '../components/StartStructure'
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {

  const[formData , setFormData] = useState({
    email : '',
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

  function clickHandler(e){
    e.preventDefault();
    console.log(formData.email)
    console.log(formData.password)
    setFormData({
      email : '',
      password : ''
    })
  }

  return (
    <StartStructure>
        <h1 className='text-center text-[1.7vw] mb-3'>
          Welcome back , 
          <span className='font-semibold'> 
            SkyRoute 
          </span> 
        </h1>

        <div className='absolute top-[6em] left-[38em]'>
          <p className='text-left text-[1.1em]'> 
            let's get you signed in.
          </p>
        </div>
        

        <div className='w-full h-[90%] flex justify-center relative'>
          <form>
            <input 
            className='w-[25vw] h-[3.7vw] bg-white p-2 pl-7 rounded-3xl border border-zinc-400 my-13 shadow-sm focus:outline-none focus:border-[1px] focus:border-zinc-700 text-zinc-900'
            type='email'
            name='email'
            placeholder='abc@gmail.com' 
            value={formData.email}
            onChange={changeHandler}
            />
            
            <br/>

            <div className=' password w-[25vw] h-[3.7vw] bg-white p-2 pl-7 rounded-3xl border border-zinc-400 flex justify-between items-center shadow-sm focus:border-[1px] focus-within:border-zinc-700'>
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
            className='flex items-center justify--center px-6 bg-[#f8ca1e] rounded-3xl border border-zinc-600 shadow-sm absolute top-[18vw] left-[8.5vw] hover:bg-[#e6b81b] pl-10'
            type='submit'
            onClick={clickHandler}>
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