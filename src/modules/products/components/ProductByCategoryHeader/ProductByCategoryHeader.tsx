import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import upperFirst from 'lodash/upperFirst';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIText, UITouchableOpacity, UIView } from 'components/UIKit';

import { ProductByCategoryHeaderProps } from 'modules/products/components/ProductByCategoryHeader/types';
import { isHotCategory } from 'modules/products/utils';
import { isIOS } from 'src/constants';

export const ProductByCategoryHeader: FC<ProductByCategoryHeaderProps> = ({ category }) => {
  const { goBack } = useNavigation();
  const { top } = useSafeAreaInsets();
  const { styles, theme } = useStyles(stylesheet);
  const backgroundColor = isHotCategory(category) ? theme.colors.hot : theme.colors.primary;

  return (
    <UIView row centerV padding-page backgroundColor={backgroundColor} style={[styles.container, { paddingTop: isIOS ? top : 40 }]}>
      {isHotCategory(category) ? <LottieView autoPlay loop source={require('lottie/hot-stamp')} style={styles.lottie} /> : null}

      <UITouchableOpacity onPress={goBack}>
        <AntDesign name='arrowleft' size={22} color={theme.colors.typography} />
      </UITouchableOpacity>

      <UIView marginL-12>
        <UIText h2 color={theme.colors.typography}>
          {upperFirst(category).replace(/-/g, ' ')}
        </UIText>
      </UIView>
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    elevation: 4,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: theme.colors.shadow,
    shadowOffset: { height: 0, width: 0 },
    zIndex: 1,
  },
  lottie: {
    position: 'absolute',
    bottom: isIOS ? 0 : -20,
    right: 0,
    width: 120,
    height: 120,
    transform: [{ rotate: '30deg' }],
  },
}));
