import React, { FunctionComponent } from 'react';
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { Router, Route } from './navigation/router';
import { routes } from './navigation/routes';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import BaseLayout from './layouts/BaseLayout';

const App: FunctionComponent = () => {
  return (
    <Router>
      <BaseLayout>
        <Route exact path={routes.home()} component={HomeScreen} />
        <Route exact path={routes.settings()} component={SettingsScreen} />
      </BaseLayout>
    </Router>
  );
};

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
