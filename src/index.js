import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import BootstrapTest from './BootstrapTest';
import { Button } from './App';
import styled from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    scale: 1.1;
  }
`;

root.render(
    <>
      <App />
      <BigButton as="a">BIG BUTTON AS A LINK</BigButton>
      <BootstrapTest/>
    </>
);

