import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CategoriesList } from 'modules/products/containers/CategoriesList';

export const CategoriesScreen = () => {
  const { top } = useSafeAreaInsets();
  const { styles } = useStyles(stylesheet);

  return (
    <>
      <BlurView style={[styles.blurView, { height: top }]} />
      <CategoriesList />
    </>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowColor: theme.colors.shadow,
    shadowOffset: { height: 1, width: 0 },
  },
}));
