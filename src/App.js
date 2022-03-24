import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import login from './login';
import dashboard from './dashboard';
import page from './page';

const AdminRoutes = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={login} />
          <AdminRoutes exact path="/admin" component={dashboard} />
          <Route exact path="*" component={page} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
