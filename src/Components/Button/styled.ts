import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: ${Dimensions.get('window').width - 100};
  height: 45px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: 'Roboto_500Medium';
`;
