import styled from 'styled-components'

interface IButton {
    bgColor: string;
} 

export const Button = styled.button<IButton>`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;

    background-color: ${({ bgColor }) => bgColor || '#fff'};
    color: ${({ color }) => color || '#333'};
    transition: 0.2s ease-in;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

`