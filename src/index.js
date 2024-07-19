import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './Context/ThemeContext'; // Import the ThemeProvider

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap the App component with ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
