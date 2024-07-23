import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { UIStack, UIView } from 'components/UIKit';

import { ProductSkeletonProps } from 'modules/products/components/skeletons/ProductSkeleton/types';
import { isIOS, SCREEN_WIDTH } from 'src/constants';

export const ProductSkeleton: FC<ProductSkeletonProps> = ({}) => {
  const { top } = useSafeAreaInsets();
  const { styles, theme } = useStyles(stylesheet);

  return (
    <UIStack gap={30} flex padding-page backgroundColor={theme.colors.primary} style={styles.container}>
      <UIStack gap={20} center>
        <UIView br20 width={SCREEN_WIDTH - 40} height={SCREEN_WIDTH - 40} backgroundColor={theme.colors.secondary} />
        <UIView br20 width={80} height={20} backgroundColor={theme.colors.secondary} />
      </UIStack>

      <UIStack gap={30}>
        <UIView br20 width={SCREEN_WIDTH / 2} height={40} backgroundColor={theme.colors.secondary} />
        <UIView br20 width={SCREEN_WIDTH / 1.5} height={20} backgroundColor={theme.colors.secondary} />
        <UIView br20 width={SCREEN_WIDTH / 3} height={20} backgroundColor={theme.colors.secondary} />
        <UIView br20 width={SCREEN_WIDTH / 1.5} height={40} backgroundColor={theme.colors.secondary} />
      </UIStack>
    </UIStack>
  );
};

const stylesheet = createStyleSheet((theme, rt) => ({
  container: {
    paddingTop: rt.insets.top,
  },
}));
