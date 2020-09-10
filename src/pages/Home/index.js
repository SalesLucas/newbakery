import React, { useEffect, useState } from 'react';
//import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';



function Home() {
  

  return (
    <PageDefault paddingAll={0}>
     <Carousel />
      </PageDefault>
  );
}
export default Home;