import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import './scss/style.scss';
import styled from 'styled-components';
import { media } from './utils/styledComponents';

const Container = styled.div`
  position: relative;
  padding-bottom: 50px;
  min-height: 100vh;
  box-sizing: border-box;
  ${media.handheld`
    padding-bottom: 45px;
  `}
`;

const App = () => {
    return (
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    );
};


export default App;
