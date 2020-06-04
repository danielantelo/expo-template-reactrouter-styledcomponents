import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import BaseLayout from '../../layouts/BaseLayout';
import { HomeLink } from '../../navigation/routes';
import { Heading } from './styledComponents';

const SettingsScreen: FunctionComponent = () => {
  return (
    <>
      <Heading>Settings Screen</Heading>
      <HomeLink>
        <Text>Back</Text>
      </HomeLink>
    </>
  );
};

export default SettingsScreen;
