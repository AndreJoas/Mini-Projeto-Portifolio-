import Styled, {css} from "styled-components";


export const Lateral = Styled.div`
.menu{
    list-style: none;
    float: left;
    width: 41.875rem;
    height:2.1875rem;
    align-items: flex;
    margin-left: 2rem;
    margin-top: -18rem;
    color: #FFFFFF;
    position: fixed;
    
   
}
.menu li{
    width: 8.125rem;
}
.menu li a{
    color: #FFFFFF;
    margin-top: 2rem;
    text-decoration: none;
    padding: 0.625rem 1rem;
    display: flex;
    justify-content: space-between;
    justify-content: center;
    transition: 0.5s;
}
.menu li a:hover{
    color:#FFFFFF;
    transform: rotate(7deg);
    border-bottom-style: solid;
    border-bottom-color: #FFB800;

}
.linke{
    width: 3rem;
    
}
.guit{
    width: 3rem;
}
.insta{
    width: 3rem;
}
`