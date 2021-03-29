import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Page/HomePage';

const Routes = () => {
  return (
    <div className="page-container">
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={HomePage} exact />
      </Switch>
    </div>
  );
};

export default Routes;