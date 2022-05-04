import styled from 'styled-components/native';

export const RootKeyboard = styled.TouchableWithoutFeedback``;

export const Container = styled.View`
  flex: 1px;
  background: #fff;
`;

export const BoxTitle = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Roboto_700Bold';
  color: #4a1cc9;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  font-family: 'Roboto_400Regular';
`;

export const BoxForm = styled.View`
  padding: 20px;
`;

export const BoxFormKeyboard = styled.KeyboardAvoidingView``;

export const InputName = styled.TextInput`
  background: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #4a1cc9;
  padding-left: 5px;
  font-family: 'Roboto_700Bold';
  color: #000;
  margin-top: 60px;
`;

export const InputEmail = styled.TextInput`
  background: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #4a1cc9;
  padding-left: 5px;
  font-family: 'Roboto_700Bold';
  color: #000;
  margin-top: 40px;
`;

export const InputPassword = styled.TextInput`
  background: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #4a1cc9;
  padding-left: 5px;
  font-family: 'Roboto_700Bold';
  color: #000;
  margin-top: 40px;
`;

export const Action = styled.View`
  align-items: center;
  background: #fff;
  top: 30px;
  height: 150px;
`;

export const ActionAlreadyAccount = styled.View`
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: row;
`;

export const AlreadyAccount = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-family: 'Roboto_400Regular';
  color: #555;
`;
