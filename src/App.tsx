import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
// import Term from './containers/auth/Term';
// import Info from './containers/auth/Info';
import Auth from './containers/auth/Auth';
import Login from './containers/auth/Login';
import history from './common/history';

import TopPageContainer from './containers/TopPageContainer';

const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Auth>
          <Route exact path="/" component={TopPageContainer} />
        </Auth>
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
