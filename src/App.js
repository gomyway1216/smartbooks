import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import ApplicationBar from './Component/ApplicationBar';

const App = () => {
  return (
    <BrowserRouter >
      <ApplicationBar />
      <Routes />
    </BrowserRouter>
  );
};

export default App;