import { View } from 'react-native';
import { StyledComponent } from '../../utils';

export const NavBarContainer = StyledComponent(({ float }) => {
  console.log('---float', float)
  return {
    display: 'flex',
    flexDirection: 'row',
    ...(float ? {'@media(min-width: 768px)': {
      position: 'fixed',
      top: 0,
      right: 0,
      background: 'white',
      flexDirection: 'column',
    }} : {})
  }
}, View);

export const NavBarItem = StyledComponent({
  padding: '16px',
}, View);
