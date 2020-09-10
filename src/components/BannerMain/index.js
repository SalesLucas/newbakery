import React from 'react';
import { BannerMainContainer, ContentAreaContainer } from './styles';
import Carousel from '../Carousel';



function BannerMain() {
  return (
    <BannerMainContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            <Carousel />
          </ContentAreaContainer.Title>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}

export default BannerMain;

