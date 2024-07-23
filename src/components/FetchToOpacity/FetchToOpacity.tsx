import React, { FC, useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { UIView } from '../UIKit/UIView';

import { FetchToOpacityProps } from 'components/FetchToOpacity/types';
import { isAndroid } from 'src/constants';
import useActualTheme from 'hooks/useActualTheme';

export const FetchToOpacity: FC<FetchToOpacityProps> = ({ isFetching, children }) => {
  if (isAndroid) return children;
  const opacity = useSharedValue<number>(0.4);
  const actualTheme = useActualTheme();
  const minOpacityValue = actualTheme === 'dark' ? 0.8 : 0.5;

  useEffect(() => {
    opacity.value = isFetching ? minOpacityValue : 1;
  }, [isFetching]);

  const animatedStyles = useAnimatedStyle(() => ({ opacity: withTiming(opacity.value) }));

  return (
    <UIView reanimated flex style={animatedStyles}>
      {children}
    </UIView>
  );
};
