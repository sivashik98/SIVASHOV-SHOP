import React from 'react';
import { BlurView } from 'expo-blur';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { FavoritesList } from 'modules/products/containers/FavoritesList';

export const FavoritesScreen = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <>
      <BlurView style={styles.blurView} />
      <FavoritesList />
    </>
  );
};

const stylesheet = createStyleSheet((theme, rt) => ({
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: rt.insets.top,
    shadowColor: theme.colors.shadow,
    shadowOffset: { height: 1, width: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
}));
