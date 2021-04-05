import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Layout from "../containers/layout";
import routes from "./routes";
import { ROUTES } from "../shared/constants";

function Routes() {
  const PublicRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  };

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route, idx) => {
            return (
              <PublicRoute
                key={idx}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
          <Redirect to={ROUTES.login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
