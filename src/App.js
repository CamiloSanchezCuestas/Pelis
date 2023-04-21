//Camilo Sánchez y Juliana Espinel
import React from 'react';
import { NavBar } from './NavBar';
import { Route, Routes } from 'react-router-dom';
import { BlogList, FavoriteView } from './components';



function App() {

    return (
      <React.Fragment>
      <NavBar/>
      <Routes> 
        <Route path='/favoriteView' element={<FavoriteView/>}/>
        <Route path='/blogList' element={<BlogList/>}/>
      </Routes>
    </React.Fragment>
    );
}

export default App;