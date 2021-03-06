import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Neo4jProvider } from 'use-neo4j';
import './index.css';

const logo = () => {
  return (<div className="logo">Hello</div>)
}

const footer = () => {
  return (<div className="footer">
    Help plz
    </div>)
}

ReactDOM.render(
  <React.StrictMode>
    <Neo4jProvider logo={logo()} footer={footer()}>
      <App />
    </Neo4jProvider>
  </React.StrictMode>,
  document.getElementById('root')
);