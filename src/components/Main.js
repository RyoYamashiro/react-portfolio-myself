import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from '../routes';

import styled from 'styled-components';
import { media, space_l, space_m} from '../utils/styledComponents';

const MainContainer = styled.div`
  padding-top: 62px;
  .main{
    width: 820px;
    margin: ${space_l} auto;
    ${media.handheld`
      width: 100%;
      box-sizing: border-box;
      padding: 0 ${space_m};
    `}
  }
`;


function Main(){
  return (
    <MainContainer>
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
    </MainContainer>
  )
}
export default withRouter(Main);
