import React from 'react';
import CadMenuSuperior from '../../components/cadMenuSuperior/index';
import CadHome from '../../components/cadhome/index';
import CadLateral from '../../components/cadMenuLateral/index';
import { HomeP } from './styles';
const PrincipalPage = () => (
    
        <HomeP>
            <CadHome/>
            <CadMenuSuperior/>    
            <CadLateral/>
        </HomeP>     
    
    
);
export default PrincipalPage;