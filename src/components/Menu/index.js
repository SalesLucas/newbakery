import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Menu/Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">            
           <img class="Logo" src={Logo} alt="LucaFlix logo" />
           </a>
           <Button as="a" className="ButtonLink" href="/pages/NotFound" >
               Fazer Pedido !
           </Button>
        </nav>
    );
}

export default Menu; // Component Menu