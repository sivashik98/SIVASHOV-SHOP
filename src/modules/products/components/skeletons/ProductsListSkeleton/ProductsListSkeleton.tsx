import React, { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIStack, UIView } from 'components/UIKit';
import { ProductCardLoader } from 'modules/products/components/ProductCard';

import { uiScreenPaddings } from 'components/UIKit/styles';
import { ProductsListSkeletonProps } from 'modules/products/components/skeletons/ProductsListSkeleton/types';
import { SCREEN_WIDTH } from 'src/constants';

export const ProductsListSkeleton: FC<ProductsListSkeletonProps> = ({ withHeader, color }) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <>
      {withHeader ? <UIView height={200} width={SCREEN_WIDTH} style={styles.header} /> : null}

      <UIStack gap={30} flex style={uiScreenPaddings} backgroundColor={color || theme.colors.primary}>
        <UIStack gap={15} row>
          <ProductCardLoader />
          <ProductCardLoader />
        </UIStack>
        <UIStack gap={15} row>
          <ProductCardLoader />
          <ProductCardLoader />
        </UIStack>
        <UIStack gap={15} row>
          <ProductCardLoader />
          <ProductCardLoader />
        </UIStack>
        <UIStack gap={15} row>
          <ProductCardLoader />
          <ProductCardLoader />
        </UIStack>
      </UIStack>
    </>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  header: {
    elevation: 3,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: theme.colors.shadow,
    shadowOffset: { height: 0, width: 0 },
    backgroundColor: theme.colors.secondary,
    zIndex: 1,
  },
}));
