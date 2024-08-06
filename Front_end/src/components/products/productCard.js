// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';
import QuantityControl from './QuntityControl';

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--nord3);
  border-radius: 8px;
  background-color: #fffff;
  color: var(--nord6);
  margin: 10px;
  width: 1200px;
  padding: 10px;
  height: 350px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  background-color: #e0e0e0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-right: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom:20px;
  color: #000;
`;

const Details = styled.p`
  font-size: 1em;
  color: #000;
   margin-bottom:40px;
  background-color: #fffff;
  padding: 5px;
  border-radius: 4px;
`;

const Price = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #000;
`;

const ProductCard = ({ product }) => (
  <Card>
    <ImageWrapper>
      <Image src={product.image_url} alt={product.name} />
    </ImageWrapper>
    <Content>
      <Title>{product.name}</Title>
      <Details>{product.description}</Details>
      <Price>Price: ${product.price}</Price>
      <QuantityControl />
    </Content>
  </Card>
);

export default ProductCard;