import { Cont } from './components/Container/styles'
import { HeaderSection } from './components/Header/index'
import { ThemeProvider } from 'styled-components'
import { Card } from './components/Card'
import themes from "./styles/themes/themes";
import GlobalStyle from './styles/global';
import content from './content';

type content = {
  item: {
    id: number;
    title: string;
    body: string;
    image: string;
  }
}

const App = () => {
  return (
    <ThemeProvider theme={themes}>
    <>
    <GlobalStyle/>
    <HeaderSection/>
    <Cont>
     {content.map((item, index) => (
       <Card key={index} item={item}/>
     ))}
    </Cont>
    </>
    </ThemeProvider>
  )
}


export default App
