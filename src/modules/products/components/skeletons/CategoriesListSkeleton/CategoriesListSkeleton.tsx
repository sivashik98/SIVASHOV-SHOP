import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { UIStack } from 'components/UIKit';
import { CategoryCardLoader } from 'modules/products/components/CategoryCard';

import { CategoriesListSkeletonProps } from 'modules/products/components/skeletons/CategoriesListSkeleton/types';

export const CategoriesListSkeleton: FC<CategoriesListSkeletonProps> = () => {
  const { top } = useSafeAreaInsets();
  const { theme } = useStyles();

  return (
    <UIStack gap={20} flex padding-page backgroundColor={theme.colors.primary} style={{ paddingTop: top + 20 }}>
      <CategoryCardLoader />
      <CategoryCardLoader />
      <CategoryCardLoader />
      <CategoryCardLoader />
      <CategoryCardLoader />
    </UIStack>
  );
};
