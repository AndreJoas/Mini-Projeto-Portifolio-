import React from 'react';
import CadMenu from '../../components/cadMenuSuperior/index';
import CadHome from '../../components/cadhome/index';
import CadLateral from '../../components/cadMenuLateral/index';
import { HomeP } from './styles';
const PrincipalPage = () => (
    <div>
        <HomeP>
            <CadHome/>
            <CadMenu/>    
            <CadLateral/>
        </HomeP>     
    </div>
    
);
export default PrincipalPage;