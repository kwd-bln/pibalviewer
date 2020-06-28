import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import Term from './containers/auth/Term';
// import Info from './containers/auth/Info';
import Auth from './containers/auth/Auth';
import Login from './containers/auth/Login';

import TopPageContainer from './containers/TopPageContainer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <React.Fragment>
        <TopPageContainer />
      </React.Fragment>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <Route path="/info" component={Info} />
        <Route path="/term" component={Term} />
        <Auth>
          <Route exact path="/" component={Home} />
        </Auth> */}
        <Auth>
          <Route exact path="/" component={() => <>Top!</>} />
        </Auth>
        <Route path="/detail/" component={() => <>Detail!</>} />
      </Switch>
    </HashRouter>
  );
}

export default App;
