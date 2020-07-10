import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Auth from './containers/auth/Auth';
import Login from './containers/auth/Login';
import history from './common/history';
import './css/bootstrap.min.css';
import './App.scss';

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
