import React, { useState, useCallback, FC } from 'react';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { Spacings } from 'react-native-ui-lib';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIView } from 'components/UIKit';
import { FetchToOpacity } from 'components/FetchToOpacity';
import { CategoryCard } from 'modules/products/components/CategoryCard';
import { CategoriesListSkeleton } from 'modules/products/components/skeletons/CategoriesListSkeleton';
import { ErrorOverlay } from 'components/ErrorOverlay';

import { useGetCategoriesQuery } from 'src/api/api';
import { CategoriesListProps } from 'modules/products/containers/CategoriesList/types';

export const CategoriesList: FC<CategoriesListProps> = ({}) => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const { data, isLoading, isFetching, isError, error, refetch } = useGetCategoriesQuery({});
  const { top } = useSafeAreaInsets();
  const { styles } = useStyles(stylesheet);

  const refresh = useCallback(async () => {
    setIsRefreshing(true);
    refetch({});
    setIsRefreshing(false);
  }, [refetch]);

  if (isLoading) return <CategoriesListSkeleton />;

  if (isError) return <ErrorOverlay error={JSON.stringify(error)} />;

  return (
    <FetchToOpacity isFetching={isFetching}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerStyle}
        contentContainerStyle={[styles.contentContainerStyle, { paddingTop: top }]}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refresh} />}
      >
        {data.map((category: string) => (
          <UIView key={category} marginT-20>
            <CategoryCard category={category} />
          </UIView>
        ))}
      </ScrollView>
    </FetchToOpacity>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    backgroundColor: theme.colors.primary,
  },
  contentContainerStyle: {
    padding: Spacings.page,
    backgroundColor: theme.colors.primary,
  },
}));
