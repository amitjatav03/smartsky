import { useState, useRef, useEffect } from 'react'
import StartStructure from '../components/StartStructure'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { Power0 } from 'gsap-trial'
import { Power1 } from 'gsap/all'
import axios from 'axios'

const Start = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const boxRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    gsap.set(boxRef.current, {x: -150})
    gsap.set(imageRef.current, {x: 150})
    let tl = gsap.timeline()
    .from(boxRef.current, {
      y: 400,
      opacity: 0,
      duration: .4,
      ease: Power1
    }, "abc")
    .from(imageRef.current, {
      y: 400,
      opacity: 0,
      duration: .4,
      ease: Power1
    }, "abc")
    .to(boxRef.current, {
      x: `.5%`,
      duration: .3,
      ease: Power1
    }, "move-apart")
    .to(imageRef.current, {
      x: `-1.5%`,
      duration: .3,
      ease: Power1
    }, "move-apart")
    .from(contentRef.current, {
      x: 200,
      opacity: 0,
      duration: .5,
      ease: Power1
    })
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const api = `${import.meta.env.VITE_BASE_URL}/checkmail`;
      const response = await axios.post(api, { email });

      
      if (response.data.success) {
          if (response.data.exists) {
              navigate('/login', { state: { email } });
            } else {
              navigate('/signup', { state: { email } });
          }
      }
    } catch (error) {
        console.error(error);
    }
    
  } 

  return (
    <StartStructure>
        <h1 className='text-center text-[1.7vw]'><span className='font-semibold'>Login</span> or <span className='font-semibold'>Sign Up</span> with <br /> your Email Address</h1>

        <form onSubmit={submitHandler} className='w-full flex justify-center' action="">
            <input 
            type="email" 
            placeholder='Enter your mail'
            onChange={e => setEmail(e.target.value)}
            value = {email}
            className='w-[90%] bg-white border-1 outline-1 outline-zinc-400 border-zinc-300 rounded-3xl px-7 py-4 text-lg'
            />
        </form>

        <p className='text-center w-[95%]'>
            Flexible login-type in any email address. if you already have an account. you can log in! if you don't have an account yet, we'll get you signed up.
        </p>

        <div className='w-[95%] flex items-center justify-center gap-1'>
            <div className='w-1/2 h-[.5px] bg-black'></div>
            <span>Or</span>
            <div className='w-1/2 h-[.5px] bg-black'></div>
        </div>

        <div className='flex flex-col gap-4'>
            <button className='px-4 py-3 bg-white border-1 border-zinc-600 rounded-full text-sm cursor-pointer flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all ease'>
                <FaFacebook size={25} color='blue' /> Sign in with Facebook
            </button>
            <button className='px-4 py-3 bg-white border-1 border-zinc-600 rounded-full text-sm cursor-pointer flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all ease'>
                <FcGoogle size={25} /> Sign in with Google
            </button>
        </div>

    </StartStructure>
  )
}

export default Start