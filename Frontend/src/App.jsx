import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from '../src/components/NavBar'
import Home from '../src/Pages/Home'
import Login from '../src/Pages/Login'
import Register from '../src/Pages/Register'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../Context/userContext'
import Dashboard from './Pages/Dashboard'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
    <Navbar/>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/register' element = {<Register/>} />
      <Route path = '/dashboard' element = {<Dashboard/>} />
    </Routes>
    </UserContextProvider>
  )
}

export default App;
