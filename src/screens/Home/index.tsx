import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { SettingsLink } from '../../navigation/routes';
import { WelcomeText } from './styledComponents';

const HomeScreen: FunctionComponent = () => {
  return (
    <>
      <WelcomeText>Welcome Home!</WelcomeText>
      <SettingsLink>
        <Text>Go to Settings</Text>
      </SettingsLink>
    </>
  );
};

export default HomeScreen;
