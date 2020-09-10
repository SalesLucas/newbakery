import React, { useEffect, useState } from 'react';
//import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';
import Carousel from '../../components/Carousel';
import Container from '../../components/Container';


function Home() {
  

  return (
    <PageDefault paddingAll={0}>
     <Carousel />     
     <Container />
      </PageDefault>
  );
}
export default Home;