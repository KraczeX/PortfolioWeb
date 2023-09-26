import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import { lightTheme } from './components/themes';
import { Route, Switch } from 'react-router-dom'; // Import Switch and Route from react-router-dom

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route></Route> {/* You should specify your routes here */}
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
