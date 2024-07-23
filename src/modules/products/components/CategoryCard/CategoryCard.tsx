import { FC, memo, useEffect } from 'react';
import { Colors } from 'react-native-ui-lib';
import { Image } from 'expo-image';
import LottieView from 'lottie-react-native';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIStack, UIText, UITouchableOpacity, UIView } from 'components/UIKit';
import { PressToDownscale } from 'components/PressToDownscale';

import { CategoryCardProps } from 'modules/products/components/CategoryCard/types';
import { CATEGORIES_IMAGES, isAndroid, isIOS } from 'src/constants';
import { isHotCategory } from 'modules/products/utils';

export const CategoryCardLoader = ({}) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <UIView row flex br16 backgroundColor={theme.colors.primary} style={styles.container}>
      <UIView flex centerV padding-page>
        <UIView height={25} backgroundColor={theme.colors.secondary} br8 style={{ width: '80%' }} />
      </UIView>
      <UIView flex backgroundColor={theme.colors.secondary} style={{ borderBottomRightRadius: 16, borderTopRightRadius: 16 }} />
    </UIView>
  );
};

export const CategoryCard: FC<CategoryCardProps> = memo(({ category }) => {
  const { styles, theme } = useStyles(stylesheet);
  const { navigate } = useNavigation();
  const backgroundColor = isHotCategory(category) ? theme.colors.hot : theme.colors.primary;

  return (
    <PressToDownscale>
      <UITouchableOpacity onPress={() => navigate('ProductsByCategory', { category })}>
        <UIStack gap={10} row br16 backgroundColor={backgroundColor} style={styles.container}>
          <UIView flex centerV paddingL-25>
            <UIText h2 color={theme.colors.typography}>
              {category.toUpperCase().replace(/-/g, ' ')}
            </UIText>
            {isHotCategory(category) ? (
              <>
                <UIText bodyM4 style={styles.hotText}>Hot category</UIText>
                <LottieView autoPlay speed={0.9} loop source={require('lottie/salyut.json')} style={styles['salyut-right']} />
                <LottieView autoPlay speed={0.6} loop source={require('lottie/salyut.json')} style={styles['salyut-left']} />
              </>
            ) : null}
          </UIView>
          <UIView flex>
            <Image source={CATEGORIES_IMAGES[category] || ''} style={[styles.image, { backgroundColor: Colors.grey30 }]} />
          </UIView>
        </UIStack>
      </UITouchableOpacity>
    </PressToDownscale>
  );
});

const stylesheet = createStyleSheet((theme) => ({
  container: {
    elevation: 4,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: theme.colors.shadow,
    shadowOffset: { height: 0, width: 0 },
  },
  image: {
    height: 120,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  hotText: {
    position: 'absolute',
    top: 5,
    left: 10,
    color: '#fff2f2',
    textShadowColor: '#ff4b4b',
    textShadowRadius: isAndroid ? 2 : 0.5,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1.5,
    shadowColor: '#ff4b4b',
  },
  'salyut-right': {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 100,
    height: 100,
  },
  'salyut-left': {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 50,
    height: 50,
  },
}));
