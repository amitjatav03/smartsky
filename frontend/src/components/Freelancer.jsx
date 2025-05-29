import React , {useState} from 'react'
import data from '../freelancerData'
import CheckboxStructure from './Freelancer'


const Freelancer = () => {

  if (!Array.isArray(data)) return null; 

  const [idx , setIdx] = useState(1);
  const filterData = data.find(d => d.id === idx);

  function clickHandler(){
    setIdx(idx => idx+1)
  }

  return (
    <div className='w-[62%] h-[75%] absolute left-[53%] top-[54%] -translate-x-1/2 -translate-y-1/2 flex font-[poppins]' >

      <div className='relative w-1/2 h-full'>
        <img 
        className='w-full h-full absolute'
        src={filterData.src}
        style=
        {{
          transform : filterData.scale ,
          top : filterData.top , 
          left : filterData.left
        }}
        alt="" />
      </div>

      <div>
          <img className='absolute z-10 rotate-[-1deg] scale-3d scale-x-[-1] w-[12%] top-[-9%] left-[43%]' src="18.png" alt="" />
      </div>

      <div className='w-1/2 h-full bg-[#FFFCF2] rounded-2xl border-1 border-zinc-600 flex flex-col items-center gap-8 py-12 px-10'>
          <CheckboxStructure/>
          <button onClick={clickHandler}>Next</button>
          <button onClick={clickHandler}>skip</button>
      </div>

    </div>
  )
}

export default Freelancer