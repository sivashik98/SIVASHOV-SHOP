import { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Image } from 'expo-image';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import { UIStack, UIText, UITouchableOpacity, UIView } from 'components/UIKit';
import { ScaleOnMount } from 'components/ScaleOnMount';
import { SwipeToDeleteProduct } from 'modules/products/components/SwipeToDeleteProduct';
import { PressToDownscale } from 'components/PressToDownscale';

import { Product } from 'src/api/types';
import { BasketCardProps } from 'modules/products/components/BasketCard/types';
import { isPremiumProduct } from 'modules/products/utils';

export const BasketCardLoader = ({}) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <UIView br16 row padding-card spread backgroundColor={theme.colors.primary} style={styles.container}>
      <UIView flex spread>
        <UIStack flex gap={10}>
          <UIView br16 height={25} width={'80%'} backgroundColor={theme.colors.secondary} />
          <UIView br16 height={15} width={'50%'} backgroundColor={theme.colors.secondary} />
        </UIStack>
        <UIView br16 height={20} width={'35%'} backgroundColor={theme.colors.secondary} />
      </UIView>
      <UIView br16 height={100} width={100} backgroundColor={theme.colors.secondary} />
    </UIView>
  );
};

export const BasketCard: FC<BasketCardProps> = ({ item }) => {
  const { styles, theme } = useStyles(stylesheet);
  const { navigate } = useNavigation();
  const { id, price, brand, thumbnail, rating, title }: Product = item || {};

  return (
    <ScaleOnMount>
      <PressToDownscale>
        <SwipeToDeleteProduct productId={id} productTitle={title}>
          <UITouchableOpacity
            br16
            row
            padding-card
            backgroundColor={isPremiumProduct(rating) ? theme.colors.premium : theme.colors.primary}
            style={styles.container}
            onPress={() => navigate('Product', { id, isPremiumProduct: isPremiumProduct(rating) })}
            activeOpacity={1}
          >
            <UIView flex>
              <UIStack gap={6} flex>
                <UIText h2 color={theme.colors.typography}>
                  {title}
                </UIText>
                <UIText bodyM4 color={theme.colors.typographySecondary}>
                  {brand ? brand : 'No brand'}
                </UIText>
              </UIStack>

              <UIText bodyB1 color={theme.colors.typography}>
                ${price}
              </UIText>
            </UIView>

            <Image source={thumbnail} style={styles.image} contentFit='contain' />

            {isPremiumProduct(rating) ? (
              <>
                <LottieView speed={1} loop autoPlay source={require('lottie/flickering-stars.json')} style={styles.lottieStars} />
                <LottieView speed={0.5} loop autoPlay source={require('lottie/flickering-stars-small.json')} style={styles.lottieStarsBottom} />
              </>
            ) : null}
          </UITouchableOpacity>
        </SwipeToDeleteProduct>
      </PressToDownscale>
    </ScaleOnMount>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    elevation: 3,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: theme.colors.shadow,
    shadowOffset: { height: 0, width: 0 },
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 21, 47, 0.06)',
  },
  lottieStars: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  lottieStarsBottom: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
}));
