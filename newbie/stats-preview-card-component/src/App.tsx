import React from 'react';
import Card from './components/Card';
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import themes from './styles/themes/themes';

const App = () => {
  return (
    <ThemeProvider theme={themes}>
    <div className="App">
      <GlobalStyle/>
      <Card/>
    </div>
    </ThemeProvider>
  )
}

export default App;
