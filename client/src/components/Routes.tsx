import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={undefined} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;