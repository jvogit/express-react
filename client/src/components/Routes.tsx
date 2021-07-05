import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Footer from './footer/Footer';
import DesktopNavBar from './navbar/DesktopNavBar';

const Routes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <DesktopNavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;