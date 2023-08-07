// Entry javascript

// ====== IMPORTS ======

// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// App component
import App from './components/App.js';

// Css
import './styles.css';

const appRoot = createRoot(document.querySelector('.appRoot'));

appRoot.render(<App />);

