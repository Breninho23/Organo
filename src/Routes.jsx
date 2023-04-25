import React from 'react'
import {Routes, Route} from 'react-router-dom';

import Home from './Home'

function Rota(){
    return(
    <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/sobre" element={
            <div>
                Sobre
            </div>} 
        />        
        <Route path="*" element ={
            <div>
                Nada aqui amigo
            </div>} 
        />
    </Routes>
    );    
};

export default Rota;