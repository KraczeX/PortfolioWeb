import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import { lightTheme } from './components/themes';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './components/MainPage';
import AboutPage from './components/AboutPage';
import WorkPage from './components/WorkPage';
import SkillsPage from './components/SkillsPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
