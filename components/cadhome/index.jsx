import React from 'react';
import { Home } from './styles';
import perfil from "../cadhome/perfil.svg";

const CadHome = () => (
    
        
     
        <Home>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
            <img className="perfil" src={perfil} />
            <h2 className="nome"> André Joás</h2>
            <h3 className="funcao">Eu sou um |-[Web Designer]-|</h3>
        </Home>
   
)
export default CadHome;