import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import App from './App';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
        <App />    
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
