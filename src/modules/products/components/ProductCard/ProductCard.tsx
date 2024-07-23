import { FC, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIStack, UIText, UITouchableOpacity, UIView } from 'components/UIKit';
import { LikeButton } from 'components/LikeButton';
import { ScaleOnMount } from 'components/ScaleOnMount';
import { PressToDownscale } from 'components/PressToDownscale';
import { FetchToOpacity } from 'components/FetchToOpacity';

import { Product } from 'src/api/types';
import { useLikeProduct } from 'hooks/redux';
import { isPremiumProduct } from 'modules/products/utils';

export const ProductCardLoader = ({}) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <UIView flex br16 style={[styles.container, styles['container-loader']]}>
      <UIView right padding-10 height={150} backgroundColor={theme.colors.secondary} style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
        <AntDesign name='hearto' size={24} color={theme.colors.primary} />
      </UIView>
      <UIStack gap={10} margin-10>
        <UIView br50 height={20} backgroundColor={theme.colors.secondary} style={{ width: '90%' }} />
        <UIView br50 height={15} backgroundColor={theme.colors.secondary} style={{ width: '40%' }} />
        <UIView br50 height={25} backgroundColor={theme.colors.secondary} style={{ width: '55%' }} />
      </UIStack>
    </UIView>
  );
};

export const ProductCard: FC<{ item: Product }> = memo(({ item }) => {
  const { navigate } = useNavigation();
  const { styles, theme } = useStyles(stylesheet);
  const { id, price, brand, thumbnail, rating, title }: Product = item || {};
  const { isLiked, handleLike, isLoadingFavorites } = useLikeProduct(id, title);
  const backgroundColor = isPremiumProduct(rating) ? theme.colors.premium : theme.colors.primary;

  return (
    <FetchToOpacity isFetching={isLoadingFavorites}>
      <ScaleOnMount>
        <PressToDownscale>
          <UITouchableOpacity flex onPress={() => navigate('Product', { id, isPremiumProduct: isPremiumProduct(rating) })}>
            <UIView flex br16 padding-card style={[styles.container, { backgroundColor }]}>
              <UIView absR style={styles.heart}>
                <LikeButton isLiked={isLiked} onPress={handleLike} />
              </UIView>
              <Image source={thumbnail} style={styles.image} contentFit='contain' />
              <UIText bodyB3 marginT-12 color={theme.colors.typography}>
                {title}
              </UIText>
              <UIStack gap={8} flex bottom marginT-8>
                <UIText bodyM4 color={theme.colors.typography}>
                  {brand ? brand : 'No brand'}
                </UIText>

                <UIView row spread centerV>
                  <UIText bodyB1 color={theme.colors.typography}>
                    $ {price}
                  </UIText>

                  <UIView center row>
                    <UIText bodyM4 marginR-10 color={theme.colors.typography}>
                      {rating}
                    </UIText>
                    <LottieView speed={0.3} loop autoPlay source={require('lottie/coin-star.json')} style={styles.lottieCoinStar} />
                  </UIView>
                </UIView>
              </UIStack>

              {isPremiumProduct(rating) ? (
                <>
                  <LottieView speed={1} loop autoPlay source={require('lottie/flickering-stars.json')} style={styles.lottieStars} />
                  <LottieView speed={0.5} loop autoPlay source={require('lottie/flickering-stars-small.json')} style={styles.lottieStarsBottom} />
                </>
              ) : null}
            </UIView>
          </UITouchableOpacity>
        </PressToDownscale>
      </ScaleOnMount>
    </FetchToOpacity>
  );
});

const stylesheet = createStyleSheet((theme) => ({
  container: {
    elevation: 3,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: theme.colors.shadow,
    shadowOffset: { height: 0, width: 0 },
  },
  'container-loader': {
    backgroundColor: theme.colors.primary,
  },
  image: {
    height: 150,
  },
  heart: {
    zIndex: 1,
  },
  lottieCoinStar: {
    width: 20,
    height: 20,
  },
  lottieStars: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  lottieStarsBottom: {
    position: 'absolute',
    top: 150,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
}));
