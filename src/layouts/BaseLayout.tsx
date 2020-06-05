import React, { FunctionComponent } from 'react';
import { Container } from 'native-base';
import NavBar from '../components/NavBar';

const BaseLayout: FunctionComponent = ({ children }) => {
  return (
    <Container>
      {children}
      <NavBar />
    </Container>
  );
};

export default BaseLayout;
