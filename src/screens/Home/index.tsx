import React, { FunctionComponent } from 'react';
import { Body, Button, Content, Header, Icon, Right, Title, Text } from 'native-base';
import { useRoutes } from '../../navigation/routes';

const HomeScreen: FunctionComponent = () => {
  const { navigateToSettings } = useRoutes();
  return (
    <>
      <Header noLeft>
        <Body>
          <Title>Welcome Home!</Title>
        </Body>
        <Right>
          <Button transparent onPress={navigateToSettings}>
            <Icon name="settings" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Text>main screen</Text>
      </Content>
    </>
  );
};

export default HomeScreen;
