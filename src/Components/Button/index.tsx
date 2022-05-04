import React from 'react';
import { View, Text, TouchableOpacityProps } from 'react-native';
import LottieView from 'lottie-react-native';

import { Container, Title } from './styled';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  fill: boolean;
  loading?: boolean;
}

export default function Button({
  title,
  fill,
  loading,
  ...props
}: ButtonProps) {
  if (loading) {
    return (
      <Container
        style={{
          backgroundColor: fill ? '#4a1cc9' : '#fff',
          borderWidth: 3,
          borderColor: '#4a1cc9',
          flexDirection: 'row',
        }}
        {...props}
        disabled
      >
        <LottieView
          style={{
            width: 45,
            height: 45,
            backgroundColor: '#4a1cc9',
          }}
          source={require('../../Images/loadingBounce.json')}
          loop
          autoPlay
          speed={2}
        />
        <Title style={{ color: fill ? 'white' : '#4a1cc9' }}>
          {' '}
          Carregando...{' '}
        </Title>
      </Container>
    );
  } else {
    return (
      <Container
        style={{
          backgroundColor: fill ? '#4a1cc9' : '#fff',
          borderWidth: 3,
          borderColor: '#4a1cc9',
        }}
        {...props}
      >
        <Title style={{ color: fill ? 'white' : '#4a1cc9' }}> {title} </Title>
      </Container>
    );
  }
}
