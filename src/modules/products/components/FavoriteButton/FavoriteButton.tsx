import React, { FC, memo, useEffect, useRef } from 'react';
import { Colors } from 'react-native-ui-lib';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import { ActivityIndicator, StyleSheet, useColorScheme } from 'react-native';
import LottieView from 'lottie-react-native';
import { useStyles } from 'react-native-unistyles';

import { UITouchableOpacity, UIView } from 'components/UIKit';

import { FavoriteButtonProps } from 'modules/products/components/FavoriteButton/types';
import useIsFirstRender from 'hooks/useIsFirstRender';

export const FavoriteButton: FC<FavoriteButtonProps> = memo(({ loading, onPress, isLiked = false, styles: outsideStyles }) => {
  const isFirstRender = useIsFirstRender();
  const colorScheme = useColorScheme();
  const { theme } = useStyles();
  const lottieRef = useRef<LottieView>();
  const source = colorScheme === 'dark' ? require('lottie/heart-bounce-dark.json') : require('lottie/heart-bounce.json');
  const progress = isFirstRender && isLiked ? 1000 : 0;

  useEffect(() => {
    if (isFirstRender || loading) return;
    if (isLiked) lottieRef.current?.play();
    else lottieRef.current?.reset();
  }, [isLiked, isFirstRender, loading]);

  const handlePress = async () => {
    await impactAsync(ImpactFeedbackStyle.Light);
    onPress?.();
  };

  return (
    <UITouchableOpacity
      activeOpacity={loading ? 1 : 0.7}
      onPress={loading ? () => {} : handlePress}
      backgroundColor={theme.colors.accent}
      br100
      style={[styles.button, { borderColor: isLiked ? theme.colors.accent : Colors.grey80 }, outsideStyles]}
    >
      <LottieView ref={lottieRef} loop={false} source={source} progress={progress} style={styles.lottie} />
      {loading ? (
        <UIView absF center>
          <ActivityIndicator color={Colors.white} />
        </UIView>
      ) : null}
    </UITouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
  },
  lottie: {
    width: 60,
    height: 60,
  },
});
