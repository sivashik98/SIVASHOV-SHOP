import React, { FC } from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AntDesign } from '@expo/vector-icons';

import { UIStack, UIText, UITouchableOpacity, UIView } from 'components/UIKit';

import { PaymentCongratsProps } from 'modules/products/components/PaymentCongrats/types';
import { openTgApp } from 'modules/products/utils';

export const PaymentCongrats: FC<PaymentCongratsProps> = ({}) => {
  const { goBack } = useNavigation();
  const { styles, theme } = useStyles(stylesheet);

  const handlePress = async () => {
    await openTgApp();
  };

  return (
    <UIView center reanimated absF backgroundColor={theme.colors.primary}>
      <UITouchableOpacity padding-page onPress={goBack} style={styles.button}>
        <AntDesign name='closecircleo' size={24} color={theme.colors.typography} />
      </UITouchableOpacity>
      <UIStack center gap={20}>
        <UIText h2 color={theme.colors.typographySecondary}>
          Congratulations with your purchase!
        </UIText>
        <UIText h1 color={theme.colors.accent}>
          enjoy it...
        </UIText>
        <UIText h2 color={theme.colors.accent} onPress={handlePress}>
          and say thanks to me...
        </UIText>
      </UIStack>
      <LottieView autoPlay loop source={require('lottie/payment-congrats-green')} style={styles.green} />
      <LottieView autoPlay speed={0.8} loop source={require('lottie/payment-congrats-red')} style={[styles.red, styles['red-left']]} />
      <LottieView autoPlay speed={0.7} loop source={require('lottie/payment-congrats-red')} style={[styles.red, styles['red-right']]} />
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme, rt) => ({
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: rt.insets.top,
  },
  green: {
    position: 'absolute',
    top: 0,
    width: rt.screen.width,
    height: rt.screen.width,
    zIndex: -1,
  },
  red: {
    position: 'absolute',
    width: rt.screen.width,
    height: rt.screen.width,
    zIndex: -1,
  },
  'red-left': {
    bottom: 50,
    left: -rt.screen.width / 3,
    transform: [{ rotate: '20deg' }],
  },
  'red-right': {
    bottom: -100,
    right: -rt.screen.width / 4,
    transform: [{ rotate: '-20deg' }],
  },
}));
