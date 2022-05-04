import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
  Easing,
  withRepeat,
} from 'react-native-reanimated';

import {
  Container,
  LogoInitial,
  Information,
  Title,
  SubTitle,
  Action,
} from './style';

import Logo from '../../Images/login-splash.png';
import Button from '../../Components/Button';

interface PresentationProps {}

export default function Presentation({}: PresentationProps) {
  const floatImage = useSharedValue(0);
  const navigation = useNavigation();

  const float = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: floatImage.value }],
    };
  });

  useEffect(() => {
    floatImage.value = withRepeat(
      withTiming(20, { duration: 1500, easing: Easing.linear }),
      -1,
      true
    );
  }, [floatImage.value]);

  return (
    <Container>
      <Animated.View style={float}>
        <LogoInitial source={Logo} />
      </Animated.View>
      <Information>
        <Title> Seja Bem Vindo! </Title>
        <SubTitle> Aprendendo login com Async Storage </SubTitle>
        <Action>
          <Button
            title='SignIn'
            fill={true}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('SignIn')}
          />
          <Button
            title='SignUp'
            fill={false}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('SignUp')}
          />
        </Action>
      </Information>
    </Container>
  );
}
