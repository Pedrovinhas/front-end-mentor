import styled from 'styled-components'
import img from '../../public/img/image-header-desktop.jpg'

export const Container = styled.div`
    width: 70vw;
    height: 60vh;
    
    margin: 0 auto;
    border-radius: 1.2rem;

    display: flex;
    
    background-color: ${props => props.theme.colors.cardBg};

    @media only screen and (max-width: 924px) {
            height: 70vh;
            width: 90vw;
        }

        @media only screen and (max-width: 672px) {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
            

            height: 90vh;
            width: 90vw;
        }
   
`
export const Section = styled.section`
    width: 55%;
    height: 100%;

    padding: 4rem;
   

    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 672px) {
            width: 100%;
            text-align: center;
        }

    
`

export const ContainerImg = styled.div`
    width: 45%;
    height: 100%;

    border-radius: 0 1.2rem 1.2rem 0;
    
    background: url(${img});
    background-size: cover;
    background-repeat: no-repeat;

    @media only screen and (max-width: 672px) {
            width: 100%;
            text-align: center;
        }
`

export const Overlay = styled.div`
    background-color: ${props => props.theme.colors.violet};
    opacity: .3;
    width: 100%;
    height: 100%;
`

export const MainText = styled.h1`
    color: white;
    font-size: 3.4rem;
    padding: 1.6rem;

   
`

export const SpanMain = styled(MainText)`
    color: ${props => props.theme.colors.violet};
    padding: 0;
    display: inline;
`

export const Paragraph = styled.p`
    color: ${props => props.theme.colors.mainParagraph};
    font-size: 1.3rem;
    
    margin-top: 1.2rem;

    font-family: 'Lexend Deca';
    font-weight: 400;

    padding-bottom: 1.6rem;
    padding-left: 1.6rem;
    padding-right: 1.2rem;
    
    
`

export const Footer = styled.footer`
    margin-top: 2.2rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const List = styled.ul`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    list-style: none;

    @media only screen and (max-width: 672px) {
            width: 100%;
            justify-content: center;
            display: flex;
            align-items: center;
        }
`

export const ListItems = styled.li`
    margin-right: .8rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

export const ListSpan = styled.span`
    padding-top: 1.6rem;
    padding-right: 1.6rem;
    padding-left: 1.6rem;
    font-size: 2.4rem;
    color: white;

    @media only screen and (max-width: 924px) {
            font-size: 2rem;
        }

        

`
