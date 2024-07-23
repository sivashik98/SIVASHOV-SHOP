import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { UIText, UIView } from 'components/UIKit';
import { ReviewCard } from 'modules/products/components/ReviewCard';

import { CarouselReviewsProps } from 'modules/products/components/CarouselReviews/types';

export const CarouselReviews: FC<CarouselReviewsProps> = ({ data, itemStyles }) => {
  const { theme } = useStyles();

  return (
    <>
      <UIView marginV-6 paddingH-20>
        <UIText h1 color={theme.colors.typography}>
          Reviews
        </UIText>
      </UIView>
      <FlatList
        data={data}
        renderItem={({ item }) => <ReviewCard review={item} styles={itemStyles} />}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};
