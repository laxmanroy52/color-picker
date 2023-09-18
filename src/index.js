import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

root.render(
    <>
    <App />
    </>
    );