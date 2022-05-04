import React, { useMemo, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  RootKeyboard,
  Container,
  BoxTitle,
  Title,
  SubTitle,
  BoxForm,
  BoxFormKeyboard,
  InputEmail,
  InputPassword,
  Action,
  ActionNotAccount,
  NotAccount,
} from './style';

import Header from '../../Components/Header';
import Button from '../../Components/Button';

interface SignInProps {}

export default function SignIn({}: SignInProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [ready, setReady] = useState<boolean>(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Campos Obrigatórios', 'Preencha o email ou senha!');
    } else {
      const emailUser = await AsyncStorage.getItem('@asyncStorage:emailUser');
      const passUser = await AsyncStorage.getItem('@asyncStorage:passUser');
      if (emailUser === email && passUser === password) {
        Alert.alert('Sucesso✔', 'Usuário logado!');
        setReady(true);
        setTimeout(() => {
          setReady(false);
          navigation.goBack();
        }, 3000);
      } else {
        Alert.alert('Erro❌', 'Usuário incorreto!');
      }
    }
  };

  return (
    <Container>
      <RootKeyboard onPress={Keyboard.dismiss}>
        <BoxFormKeyboard behavior='position' enabled>
          <>
            <Header />
            <BoxTitle>
              <Title> Bem vindo de volta! </Title>
              <SubTitle> Faça seu login </SubTitle>
            </BoxTitle>
            <BoxForm>
              <InputEmail
                placeholder='exemple@email.com'
                placeholderTextColor={'#999'}
                selectionColor='#000'
                keyboardType='email-address'
                keyboardAppearance='dark'
                onChangeText={(t) => setEmail(t)}
                autoCapitalize='none'
              />
              <InputPassword
                placeholder='******'
                placeholderTextColor={'#999'}
                selectionColor='#000'
                secureTextEntry={true}
                onChangeText={(t) => setPassword(t)}
                autoCapitalize='none'
              />
              <Action>
                <Button
                  title='Login'
                  fill={true}
                  onPress={handleLogin}
                  loading={ready ? true : false}
                  activeOpacity={1}
                />
                <ActionNotAccount>
                  <NotAccount> Don't have an account? </NotAccount>
                  <NotAccount
                    style={{ color: '#4a1cc9', fontFamily: 'Roboto_700Bold' }}
                    onPress={() => navigation.navigate('SignUp')}
                  >
                    {' '}
                    SignUp{' '}
                  </NotAccount>
                </ActionNotAccount>
              </Action>
            </BoxForm>
          </>
        </BoxFormKeyboard>
      </RootKeyboard>
    </Container>
  );
}
