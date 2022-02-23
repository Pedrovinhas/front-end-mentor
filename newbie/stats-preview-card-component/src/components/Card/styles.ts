import styled from 'styled-components'

export const Container = styled.div`
    width: 70vw;
    height: 60vh;
    
    margin: 0 auto;
    border-radius: 1.2rem;
    
    background-color: ${props => props.theme.colors.cardBg};
`
export const Section = styled.section`
    width: 60%;
    height: 100%;

    padding: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerImg = styled.div`
    width: 50%;
    height: 100%;

    background-image: url('img');
    
`

export const MainText = styled.h1`
    color: white;
    font-size: 3.2rem;
`

export const Paragraph = styled.p`
    color: ${props => props.theme.colors.mainParagraph};
    font-size: 1.5rem;
    text-align: left;
    margin-top: 3.2rem;
`