import React from 'react';


import {
  Container,
  Section,
  MainText,
  Paragraph
} from "./styles"

const Card: React.FC = () => {
  return(
    <Container>
     <Section>
        <MainText > Get insights that help your business grow </MainText>
        <Paragraph> Discover the benefits of data analatycs and make better decisions regarding revenue, customer experience, and overall efficiency</Paragraph>
     </Section>
    </Container>
  );
}

export default Card