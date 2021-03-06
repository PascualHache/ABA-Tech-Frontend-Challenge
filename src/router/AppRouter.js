import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import RedirectPage from '../components/RedirectPage';
import Main from '../components/Main';
import NotFoundPage from '../components/NotFoundPage';

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/redirect" component={RedirectPage} />
            <Route exact path="/main" component={Main} />
            <Route component={NotFoundPage} />
          </Switch>
      </BrowserRouter>
    );
  }
}
export default AppRouter;