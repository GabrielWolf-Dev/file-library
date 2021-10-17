import React from 'react';
import GlobalStyle from './GlobalStyle';
import Routes from './routes';
import { IsAuthProv } from './context/isAuth';


const App = () => (
  <>
    <GlobalStyle />
      <IsAuthProv>
        <Routes />
      </IsAuthProv>
  </>
);

export default App;
