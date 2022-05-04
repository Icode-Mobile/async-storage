import React, { useState } from 'react';
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
  InputName,
  InputEmail,
  InputPassword,
  Action,
  ActionAlreadyAccount,
  AlreadyAccount,
} from './style';

import Header from '../../Components/Header';
import Button from '../../Components/Button';

interface SignUpProps {}

export default function SignUp({}: SignUpProps) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [ready, setReady] = useState<boolean>(false);
  const navigation = useNavigation();

  const handleCreateUser = async () => {
    if (name === '' || email === '' || password === '') {
      Alert.alert('Campos Obrigatórios', 'Preencha o nome, email ou senha!');
    } else {
      await AsyncStorage.setItem('@asyncStorage:nameUser', name);
      await AsyncStorage.setItem('@asyncStorage:emailUser', email);
      await AsyncStorage.setItem('@asyncStorage:passUser', password);
      setReady(true);
      setTimeout(() => {
        setReady(false);
        navigation.goBack();
      }, 3000);
    }
  };

  return (
    <Container>
      <RootKeyboard onPress={Keyboard.dismiss}>
        <BoxFormKeyboard behavior='position' enabled>
          <>
            <Header />
            <BoxTitle>
              <Title> Olá, você é novo por aqui? </Title>
              <SubTitle> Crie sua conta </SubTitle>
            </BoxTitle>

            <BoxForm>
              <InputName
                placeholder='Fulano De Tal'
                placeholderTextColor={'#999'}
                selectionColor='#000'
                keyboardType='email-address'
                keyboardAppearance='dark'
                onChangeText={(t) => setName(t)}
                autoCapitalize='words'
              />
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
                  title='Registrar'
                  fill={true}
                  onPress={handleCreateUser}
                  activeOpacity={1}
                  loading={ready ? true : false}
                />
                <ActionAlreadyAccount>
                  <AlreadyAccount> Already have an account? </AlreadyAccount>
                  <AlreadyAccount
                    style={{ color: '#4a1cc9', fontFamily: 'Roboto_700Bold' }}
                    onPress={() => navigation.navigate('SignIn')}
                  >
                    {' '}
                    SignIn{' '}
                  </AlreadyAccount>
                </ActionAlreadyAccount>
              </Action>
            </BoxForm>
          </>
        </BoxFormKeyboard>
      </RootKeyboard>
    </Container>
  );
}
