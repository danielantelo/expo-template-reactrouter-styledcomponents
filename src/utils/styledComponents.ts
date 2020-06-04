import { FunctionComponent } from 'react';
import styled from 'styled-components';

export const StyledComponent = (styles: { [key: string]: any }, component: any) => {
  return styled(component)(styles);
};
