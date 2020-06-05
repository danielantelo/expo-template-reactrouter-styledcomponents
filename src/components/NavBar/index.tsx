import React, { FunctionComponent } from 'react';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import { useRoutes } from '../../navigation/routes';

const NavBar: FunctionComponent = () => {
  const { navigateToHome, navigateToSettings } = useRoutes();
  return (
    <Footer>
      <FooterTab>
        <Button vertical onPress={navigateToHome}>
          <Icon name="home" />
          <Text>Apps</Text>
        </Button>
        <Button vertical onPress={navigateToSettings}>
          <Icon name="settings" />
          <Text>Settings</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default NavBar;
