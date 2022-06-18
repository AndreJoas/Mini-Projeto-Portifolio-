import React from 'react';
import { Lateral} from './styles';
import linkedin from "../cadMenuLateral/linkedin.svg";
import guit from "../cadMenuLateral/guithub.svg";
import instagram from "../cadMenuLateral/instagram.svg";
const CadLateral = () => (

    <div>
        <Lateral>
            <nav class="menu">
                <li><a href="https://www.linkedin.com/in/andre-joas-433280238/"><img className="linke" src={linkedin}/></a></li>
                <li><a href="https://github.com/AndreJoas"><img className="guit" src={guit}/></a></li>
                <li><a href="https://www.instagram.com/andre_izuke/"><img className="insta" src={instagram}/></a></li>
            </nav>
        </Lateral>
    </div>
)
export default CadLateral;