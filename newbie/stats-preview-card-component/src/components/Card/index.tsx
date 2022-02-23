import React from 'react';


import {
  Container,
  ContainerImg,
  Section,
  Overlay,
  MainText,
  SpanMain,
  Paragraph,
  Footer,
  List,
  ListItems,
  ListSpan
} from "./styles"

const Card: React.FC = () => {
  return(
    <Container>
     <Section>
        <MainText > Get <SpanMain> insights </SpanMain> that help your business grow </MainText>
        <Paragraph> Discover the benefits of data analatycs and make better decisions regarding revenue, customer experience, and overall efficiency</Paragraph>
        <Footer>
          <List>
          <ListItems> 
            <ListSpan> 10k+ </ListSpan>
          <Paragraph> COMPANIES </Paragraph>
          </ListItems>
          <ListItems> 
            <ListSpan> 314 </ListSpan>  
          <Paragraph> TEMPLATES </Paragraph>
          </ListItems>
          <ListItems>
            <ListSpan> 12M+ </ListSpan>
          <Paragraph>  QUERIES </Paragraph>
          </ListItems>
          </List>
        </Footer>
     </Section>
     <ContainerImg>
      <Overlay> </Overlay>
     </ContainerImg>
    </Container>
  );
}

export default Card