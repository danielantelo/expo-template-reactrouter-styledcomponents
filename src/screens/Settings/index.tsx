import React, { FunctionComponent } from 'react';
import { Body, Button, Content, Header, Icon, Left, Title, Text } from 'native-base';
import { useRoutes } from '../../navigation/routes';

const SettingsScreen: FunctionComponent = () => {
  const { navigateToHome } = useRoutes();
  return (
    <>
      <Header>
        <Left>
          <Button transparent onPress={navigateToHome}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Settings</Title>
        </Body>
      </Header>
      <Content>
        <Text>settings screen</Text>
      </Content>
    </>
  );
};

export default SettingsScreen;
