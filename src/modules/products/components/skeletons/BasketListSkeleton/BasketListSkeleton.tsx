import React, { FC } from 'react';
import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { Spacings } from 'react-native-ui-lib';

import { UIStack } from 'components/UIKit';

import { BasketCardLoader } from 'modules/products/components/BasketCard';

import { BasketListSkeletonProps } from 'modules/products/components/skeletons/BasketListSkeleton/types';

export const BasketListSkeleton: FC<BasketListSkeletonProps> = () => {
  const { theme, styles } = useStyles(stylesheet);

  return (
    <UIStack gap={20} backgroundColor={theme.colors.primary} padding-page style={styles.container}>
      <BasketCardLoader />
      <BasketCardLoader />
      <BasketCardLoader />
      <BasketCardLoader />
      <BasketCardLoader />
      <BasketCardLoader />
      <BasketCardLoader />
    </UIStack>
  );
};

const stylesheet = createStyleSheet((_, rt) => ({
  container: {
    paddingTop: rt.insets.top + Spacings.page,
  },
}));
