import { useContext } from 'react';
import { __RouterContext } from 'react-router';

export const routes: { [key: string]: () => string } = {
  home: () => '/',
  settings: () => '/settings',
};

export const useRoutes = () => {
  const { history } = useContext(__RouterContext);
  console.log(history);
  return {
    navigateToHome: () => history.push(routes.home()),
    navigateToSettings: () => history.push(routes.settings()),
  };
};
