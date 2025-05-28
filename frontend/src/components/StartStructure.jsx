import { useContext } from 'react'
import yellowThemeLogo from '../assets/images/start-page.png'
import blueThemeLogo from '../assets/images/start-page-blue.png'
import { ThemeDataContext } from '../contexts/ThemeContext'


const StartStructure = ({children, boxRef, imageRef, contentRef }) => {
  const { theme } = useContext(ThemeDataContext);

  return (
    <div className='w-[67%] h-[80%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex font-[poppins]'>
        <div className='relative w-1/2 h-full'>
            <img className='absolute bottom-[-5%] right-[-7%]' src={`${theme === 'light' ? yellowThemeLogo : blueThemeLogo}`} alt="" />
        </div>
        <div ref={boxRef} className='w-1/2 h-full bg-[#FFFCF2] rounded-2xl border-1 border-zinc-600 flex flex-col items-center gap-8 py-12 px-10 overflow-hidden'>
            <div ref={contentRef} className='w-full h-full bg-[#FFFCF2] rounded-2xl flex flex-col items-center gap-8 '>
              {children}
            </div>
        </div>
    </div>
  )
}

export default StartStructure