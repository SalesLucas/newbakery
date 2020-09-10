import React, { useEffect, useState } from 'react';
// import PageDefault from '../../components/PageDefault';
import Sad from '../../../assets/img/sad.JPG';


function Notfound() {
  


  return (
    
     <div style={
         {
             textAlign: "center"
         }
     }>
      <img src={Sad}  alt="..." />
      Ainda não disponível ! ='(
     </div>   

   
  );
}
export default Notfound;