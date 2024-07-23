import React, { useState, FC, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Spacings } from 'react-native-ui-lib';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import LottieView from 'lottie-react-native';
import compact from 'lodash/compact';
import map from 'lodash/map';
import find from 'lodash/find';
import { useNavigation } from '@react-navigation/native';

import { UIButton, UIText, UIView } from 'components/UIKit';
import { FetchToOpacity } from 'components/FetchToOpacity';
import { BasketCard } from 'modules/products/components/BasketCard';
import { BasketListSkeleton } from 'modules/products/components/skeletons/BasketListSkeleton';
import { ErrorOverlay } from 'components/ErrorOverlay';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useGetAllProductsQuery } from 'src/api/api';
import { Product } from 'src/api/types';
import { SCREEN_WIDTH } from 'src/constants';
import { BasketListProps } from 'modules/products/containers/BasketList/types';
import { removeAllFromBasket } from 'src/store/slices/basketSlice';

const ListEmptyComponent = () => {
  const { navigate } = useNavigation();
  const { styles, theme } = useStyles(stylesheet);
  return (
    <UIView flex center>
      <UIText h2 color={theme.colors.typographySecondary}>
        Add your{' '}
        <UIText onPress={() => navigate('Categories')} h2 color={theme.colors.accent}>
          First Product!
        </UIText>
      </UIText>
      <LottieView loop autoPlay source={require('lottie/empty-basket.json')} style={styles.listEmptyComponentLottie} />
    </UIView>
  );
};

const renderItem = ({ item }) => (
  <UIView key={item.id} marginB-20>
    <BasketCard item={item} />
  </UIView>
);

const keyExtractor = (item: Product) => item?.id;

export const BasketList: FC<BasketListProps> = ({}) => {
  const { styles } = useStyles(stylesheet);
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, error }: { data: Product[] } = useGetAllProductsQuery({});
  const { isLoading: isBasketLoading, basket } = useAppSelector((state) => state.basketReducer);
  const [items, setItems] = useState<Product[] | []>([]);
  const totalPrice = items.reduce((acc: number, el: Product) => (acc += el.price), 0).toFixed(2);

  useEffect(() => {
    if (!isBasketLoading && !isLoading) setItems(compact(map(basket, (id) => find(data, { id }))));
  }, [basket, isBasketLoading, data, isLoading]);

  const handlePressPay = () => {
    navigate('PaymentCongrats');
    dispatch(removeAllFromBasket());
  };

  if (isLoading) return <BasketListSkeleton />;

  if (isError) return <ErrorOverlay error={JSON.stringify(error)} />;

  return (
    <FetchToOpacity isFetching={isBasketLoading}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={isLoading ? null : <ListEmptyComponent />}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      />
      {items.length > 0 ? (
        <UIView absB absH padding-page>
          <UIButton title={`Pay $${totalPrice}`} loading={isBasketLoading} onPress={handlePressPay} />
        </UIView>
      ) : null}
    </FetchToOpacity>
  );
};

const stylesheet = createStyleSheet((theme, rt) => ({
  container: {
    paddingTop: rt.insets.top,
    backgroundColor: theme.colors.primary,
  },
  contentContainerStyle: {
    flexGrow: 1,
    padding: Spacings.page,
  },
  listEmptyComponentLottie: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
  },
  heart: {
    position: 'absolute',
    top: 100,
    bottom: 100,
    left: 100,
    right: 100,
    zIndex: -1,
    opacity: 0.1,
  },
}));
