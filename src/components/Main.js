import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from '../routes';
function Main(){
  return (
    <main className="main">
      <div className="container">
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
     </div>
    </main>
  )
}
export default withRouter(Main);
