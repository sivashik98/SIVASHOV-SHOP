import React, { useState, FC, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Spacings } from 'react-native-ui-lib';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import LottieView from 'lottie-react-native';
import compact from 'lodash/compact';
import map from 'lodash/map';
import find from 'lodash/find';
import { useNavigation } from '@react-navigation/native';

import { UIText, UIView } from 'components/UIKit';
import { ProductCard } from 'modules/products/components/ProductCard';
import { ProductsListSkeleton } from 'modules/products/components/skeletons/ProductsListSkeleton';
import { ErrorOverlay } from 'components/ErrorOverlay';

import { useAppSelector } from 'hooks/redux';
import { useGetAllProductsQuery } from 'src/api/api';
import { FavoritesListProps } from 'modules/products/containers/FavoritesList/types';
import { Product } from 'src/api/types';
import { SCREEN_WIDTH } from 'src/constants';

const ListEmptyComponent = () => {
  const { styles, theme } = useStyles(stylesheet);
  const { navigate } = useNavigation();

  return (
    <UIView flex center>
      <UIText h2 color={theme.colors.typographySecondary}>
        Add your{' '}
        <UIText onPress={() => navigate('Categories')} h2 color={theme.colors.accent}>
          First Favorite
        </UIText>{' '}
        product!
      </UIText>
      <LottieView loop autoPlay source={require('lottie/empty-favorites.json')} style={styles.listEmptyComponentLottie} />
    </UIView>
  );
};

const renderItem = ({ item }) => <ProductCard key={item.id} item={item} />;

const keyExtractor = (item: Product) => item?.id;

export const FavoritesList: FC<FavoritesListProps> = ({}) => {
  const { styles, theme } = useStyles(stylesheet);
  const { data, isLoading, isError, error }: { data: Product[] } = useGetAllProductsQuery({});
  const { isLoading: isFavoritesLoading, favorites } = useAppSelector((state) => state.favoritesReducer);
  const [items, setItems] = useState<Product[] | []>([]);

  useEffect(() => {
    if (!isFavoritesLoading && !isLoading) setItems(compact(map(favorites, (id) => find(data, { id }))));
  }, [favorites, isFavoritesLoading, data, isLoading]);

  if (isError) return <ErrorOverlay error={JSON.stringify(error)} />;

  return (
    <UIView flex backgroundColor={theme.colors.primary}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        ListEmptyComponent={isLoading ? <ProductsListSkeleton /> : <ListEmptyComponent />}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
        showsVerticalScrollIndicator={false}
      />
      {items.length ? <LottieView autoPlay loop speed={0.5} source={require('lottie/favorites-background.json')} style={styles.heart} /> : null}
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme, rt) => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: rt.insets.top,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    columnGap: 12,
    marginVertical: 30,
    paddingHorizontal: Spacings.s5,
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
