import './App.css'
import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './Actions/User'
import Home  from './Components/Home/Home'
import Account from './Components/Account/Account'
import NewPost from './Components/NewPost/NewPost'
import Register from './Components/Register/Register'
import UpdateProfile from './Components/UpdateProfile/UpdateProfile'
import UpdatePassword from './Components/UpdatePassword/UpdatePassword'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import UserProfile from './Components/UserProfile/UserProfile'
import Search from './Components/Search/Search'
import NotFound from './Components/NotFound/NotFound'
import Messenger from './Components/Messenger/Messenger'


const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser()); 
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.user);
  
  return (
    <Router>
      {
        isAuthenticated && <Header />
      }

      <Routes>
        {/* Xac minh chua dang nhap thi vao login neu dang nhap roi thi vao home */}
        <Route path='/' element={ isAuthenticated ? <Home /> : <Login />} />
        <Route path='/account' element={ isAuthenticated ? <Account /> : <Login />} />
        <Route path='/newpost' element={ isAuthenticated ? <NewPost /> : <Login />} />
        <Route path='/register' element={ isAuthenticated ? <Account /> : <Register />} />
        <Route path='/update/profile' element={ isAuthenticated ? <UpdateProfile /> : <Login />} />
        <Route path='/update/password' element={isAuthenticated ? <UpdatePassword /> : <Login />} />
        <Route path='/forgot/password' element={ isAuthenticated ? <UpdatePassword /> : <ForgotPassword />} />
        <Route path='/password/reset/:token'element={ isAuthenticated ? <UpdatePassword /> : <ResetPassword />} />
        <Route path='/user/:id' element={ isAuthenticated ? <UserProfile /> : <Login />} />
        <Route path='search' element={ isAuthenticated ? <Search /> : <Login />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/messenger' element={isAuthenticated ? <Messenger /> : <Login />} />
      </Routes>
 
    </Router>
  )
}

export default App