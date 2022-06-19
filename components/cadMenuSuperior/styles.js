import Styled, { css } from "styled-components";


export const Menu = Styled.div`
    .menu{
        list-style: none;
        float: left;
        width: 41.875rem;
        height:2.1875rem;
        align-items: flex;
        margin-left: 54rem;
        margin-top: -13.4em;
        color: #FFFFFF;
        font-size: 1rem;
    }
    .menu li{
        float: left;
        width: 8.125rem;
    }
    .menu li a{
        color: #FFFFFF;
        text-decoration: none;
        padding: 0.625rem 1rem;
        display: flex;
        font-family: 'Poppins';
        justify-content: space-between;
        justify-content: center;
        transition: 1s;

    }
    .menu li a:hover{
        color:#FFFFFF;
        transform: rotate(360deg);
        border-bottom-style: solid ;
        border-bottom-color: #FFB800;
        text-shadow: 0px 0px 0px #4c2ec4;
        font-family: 'Poppins';
    }
    `