import React from 'react';

function ButtonLink(props){
    //recebe props da outra classe
    
    return(
        <a href={props.href} className={props.className}>
          {props.children}              
        </a>
    );
}

export default ButtonLink;