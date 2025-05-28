import { Route, Routes } from 'react-router-dom'
import './App.css'
import Start from './pages/Start'
import Login from './pages/Login'
import Signup from './pages/Signup'
import logo from './assets/images/smartsky-logo.png'
import { useContext } from 'react'
import { ThemeDataContext } from './contexts/ThemeContext'
import Freelancer from './components/Freelancer'
import Employee from './components/Employee'
import Owner from './components/Owner'
import CheckboxStructure from './components/CheckboxStructure'


const App = () => {
  const { theme, toggleTheme } = useContext(ThemeDataContext); 
  console.log(theme)

  return (
    <div data-theme={theme} className='w-full h-screen font-[inter] bg-linear-to-br from-[#FFF5D0] via-[#FFE27A] to-[#F8CA1E] dark:from-[#CFDFFF] dark:via-[#78A5FF] dark:to-[#1254DB]'>
      <img className='fixed w-40 top-4 left-8' src={logo} alt="logo-smartsky" />


      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />   
        <Route path='/freelancer' element={<Freelancer />} />   
        <Route path='/employee' element={<Employee />} />   
        <Route path='/owner' element={<Owner />} />   
        <Route path='/checkbox' element={<CheckboxStructure />} />   
      </Routes>
    </div>
  )
}

export default App