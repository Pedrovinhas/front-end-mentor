import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
    }
    
    #root {
        margin:0 auto;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        color: white;
        font-family: 'Open Sans', sans-serif; 
       
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: ${props => props.theme.colors.mainBg};
      
        
    }
 `