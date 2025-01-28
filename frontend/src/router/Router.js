

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from '../pages/Home';
import {Tour} from '../pages/Tour';
import { Register } from '../pages/Register';
import { SearchResultList } from '../pages/SearchResultList';
import { Login } from '../pages/Login';
import{TourDetails} from '../pages/TourDetails';

 const Router = () => {

  return (
    <Routes>
        <Route path='/' element={<navigate to ='/home'/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/tour' element={<Tour/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/tour/search' element={<SearchResultList/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/tour/:id' element={<TourDetails/>}/>
    
        
    </Routes>
  )
};

export default Router;
