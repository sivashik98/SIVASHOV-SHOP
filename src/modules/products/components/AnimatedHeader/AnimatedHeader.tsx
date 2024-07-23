import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIText, UITouchableOpacity, UIView } from 'components/UIKit';

import { AnimatedHeaderProps } from 'modules/products/components/AnimatedHeader/types';
import { isIOS } from 'src/constants';

export const AnimatedHeader: FC<AnimatedHeaderProps> = ({ title, scrollOffset, styles: outsideStyles }) => {
  const { goBack } = useNavigation();
  const { top } = useSafeAreaInsets();
  const { styles, theme } = useStyles(stylesheet);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: interpolate(scrollOffset.value, [0, 80], [0, 1], Extrapolation.CLAMP),
  }));

  return (
    <UIView reanimated center absH padding-header style={[styles.header, { paddingTop: isIOS ? top : 40 }, animatedStyles, outsideStyles]}>
      <LottieView speed={0.8} loop autoPlay source={require('lottie/flickering-stars.json')} style={styles.lottie} />
      <UITouchableOpacity onPress={goBack} padding-header style={styles.backButton}>
        <AntDesign name='arrowleft' size={24} color={theme.colors.typography} />
      </UITouchableOpacity>
      <UIText bodyB1 color={theme.colors.typography}>
        {title}
      </UIText>
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  header: {
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowColor: theme.colors.shadow,
    shadowOffset: { height: 1, width: 0 },
    elevation: 3,
    backgroundColor: theme.colors.primary,
    zIndex: 1,
  },
  lottie: {
    position: 'absolute',
    top: -50,
    left: 0,
    width: 200,
    height: 200,
    zIndex: -1,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
}));
