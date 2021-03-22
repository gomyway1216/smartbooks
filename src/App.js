import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RefProvider } from './Provider/RefProvider';
import Routes from './Routes';
import ApplicationBar from './Component/ApplicationBar';
import './app.scss';


const App = (props) => {
  return (
    <BrowserRouter >
      <RefProvider>
        <ApplicationBar />
        <Routes />
      </RefProvider>
    </BrowserRouter>
  );
};


export default App;