import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Me from '../pages/Me';
import Register from '../pages/Register';
import Footer from './footer/Footer';
import AppNavBar from './navbar/AppNavBar';

const Routes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <AppNavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/me" component={Me} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;