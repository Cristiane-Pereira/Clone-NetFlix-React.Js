import React from 'react';
import './style.css';

import Netflix from '../Assets/netflix-logo.png';

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header--logo">
                <img src={Netflix} alt="Netflix"/>
            </div>
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"/>
            </div>
        </header>
    )
}
