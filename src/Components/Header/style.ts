import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background: #fff;
  padding-top: ${getStatusBarHeight(true) + 20};
  padding-left: 20px;
`;
