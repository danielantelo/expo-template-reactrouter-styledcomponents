import React, { FunctionComponent } from 'react';
import { Link } from './router';

export const routes: { [key: string]: () => string } = {
  home: () => '/',
  settings: () => '/settings',
};

export const HomeLink: FunctionComponent = ({ children }) => <Link to={routes.home()}>{children}</Link>;

export const SettingsLink: FunctionComponent = ({ children }) => <Link to={routes.settings()}>{children}</Link>;
