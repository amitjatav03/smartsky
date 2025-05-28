import React , {useState} from 'react'
import StartStructure from '../components/StartStructure'


const PrimaryGoal = () => {
  const data = [

    {
      label : 'Lead Generation',
      name: 'leadGeneration'
    },

    {
      label : 'Client Follow-up',
      name: 'clientFollowUp'

    },

    {
      label : 'Cold Outreach',
      name: 'coldOutreach'

    },

    {
      label : 'Portfolio Promotion',
      name: 'portfoloiPromotion'
    }
  ];

  const[formData , setFormData] = useState({
    leadGeneration : false,
    clientFollowUp : false,
    coldOutreach : false,
    portfoloiPromotion : false
  }
  )

  function changeHandler(event){
    const {name , value , type , checked} = event.target;
    setFormData(prevData =>{
      return{
        ...prevData,
        [name] : checked
      }
    })
  }

  function submitHandler(){
    e.preventDefault();
    console.log(formData.leadGeneration)
    console.log(formData.clientFollowUp)
    console.log(formData.coldOutreach)
    console.log(formData.portfoloiPromotion)
    setFormData({
      pleadGeneration : false,
      clientFollowUp : false,
      coldOutreach : false,
      portfoloiPromotion : false 
    })
  }

  return (
    <StartStructure>
      <div>

        <h1>
          <span className='text-[1.9vw] font-semibold text-left absolute left-[55%] leading-1 top-[12%]' >What is your primary</span>
          <br />
          <span className='text-[1.9vw] font-semibold text-left absolute left-[55%] leading-1 top-[19%]' >goal with SmartSky?</span> 
        </h1>

        <form onSubmit={submitHandler}>
          <div className='flex flex-col'>
            <CheckboxStructure />
          </div>

          <div>
            <button>
              Next
            </button>
            <button
            type ='button'>
              Skip
            </button>
          </div>

        </form>


      </div>
    </StartStructure>
  )
}

export default PrimaryGoal