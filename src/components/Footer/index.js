import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';


function Footer() {
  return (
    <FooterBase>
      <a href="/">            
           <img class="Logo" src={Logo} alt="logo" />
           
      </a>
      <p>
        {' '}                              
        <a href="/" class="fa fa-facebook"></a>
        <a href="/" class="fa fa-twitter"></a>
        <a href="/" class="fa fa-instagram"></a>
        </p>
    </FooterBase>
  );
}

export default Footer;
