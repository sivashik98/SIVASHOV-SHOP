import React, { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Colors, Spacings } from 'react-native-ui-lib';

import { UIStack, UIText, UIView } from 'components/UIKit';

import { ReviewCardProps } from 'modules/products/components/ReviewCard/types';
import { SCREEN_WIDTH } from 'src/constants';

export const ReviewCard: FC<ReviewCardProps> = ({ review, styles: outsideStyles }) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <UIStack gap={10} row padding-reviewCard br16 style={[styles.item, outsideStyles]}>
      <UIView center width={80} height={80} br100 backgroundColor={Colors.grey30}>
        <UIText h1 color={theme.colors.typography}>
          {review.reviewerName[0]}
        </UIText>
      </UIView>
      <UIStack gap={4} flex>
        <UIView row spread>
          <UIStack gap={2}>
            <UIText h2 numberOfLines={1} color={theme.colors.typography}>
              {review.reviewerName}
            </UIText>
            <UIText bodyM4 numberOfLines={1} color={theme.colors.typography}>
              {review.reviewerEmail}
            </UIText>
          </UIStack>
          <UIText bodyM3 color={theme.colors.typographySecondary}>
            {review.rating}.0
          </UIText>
        </UIView>
        <UIText bodyM3 numberOfLines={4} color={theme.colors.typographySecondary}>
          {review.comment}
        </UIText>
      </UIStack>
    </UIStack>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  item: {
    margin: 6,
    marginHorizontal: Spacings.s5,
    width: SCREEN_WIDTH - 40,
    elevation: 3,
    shadowRadius: 4,
    shadowOpacity: 0.2,
    shadowColor: theme.colors.shadow,
    shadowOffset: { height: 0, width: 0 },
    backgroundColor: theme.colors.primary,
  },
}));
