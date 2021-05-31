import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Router from './routes/Router';

const App: React.FC = () => (
  <div>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </div>
);

export default App;