import React from 'react'
import { BrowserRouter as Router,
          Route,
          Routes,
          Navigate
        } from 'react-router-dom';
import MyState from './context/data/myState.jsx';
import Home from './pages/home/Home.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import Login from './pages/login/Login.jsx';
import AddNote from './pages/addnote/AddNote.jsx';
import Updatenote from './pages/updatenote/Updatenote.jsx';
import Profile from './pages/profile/Profile.jsx';
import Nopage from './pages/nopage/Nopage.jsx';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element = {<ProtectedRoute><Home/></ProtectedRoute>}></Route>

          <Route path='/signup' element = {<SignUp/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>

          <Route path='/addnote' element = {<ProtectedRoute><AddNote/></ProtectedRoute>}></Route>
          <Route path='/notes/edit/:id' element = {<ProtectedRoute><Updatenote/></ProtectedRoute>}></Route>
          <Route path='/profile' element = {<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
          <Route path='/*' element = {<Nopage/>}></Route>
        </Routes>
      </Router>
    </MyState>
  )
}

export default App

export const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem("token")
  if(token){
    return children
  }else{
    return <Navigate to = {"/login"}/>
  }
}