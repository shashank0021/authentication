import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css';
function App() {
  return (
    <div>
<BrowserRouter>
<Routes>

<Route path='/' element={<Home></Home>} ></Route>
<Route path='/login' element={<Login></Login>} ></Route>
<Route path='/singup' element={ <Signup></Signup>} ></Route>
 
     
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App