import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import { Container } from './style';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      <AntDesign
        name='arrowleft'
        size={32}
        color='black'
        onPress={() => navigation.goBack()}
      />
    </Container>
  );
}
