import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
function Main(){
  return (
    <main className="main">
    <Switch>
        {routes.map((route, idx) => (
           <Route
               path={route.path}
               exact={route.exact}
               component={route.component}
               key={idx}
           />
      ))}
   </Switch>
    </main>
  )
}

export default Main;
