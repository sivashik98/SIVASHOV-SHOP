import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { BlurView } from 'expo-blur';

import { BasketList } from 'modules/products/containers/BasketList';

export const BasketScreen = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <>
      <BlurView style={styles.blurView} />
      <BasketList />
    </>
  );
};

const stylesheet = createStyleSheet((theme, rt) => ({
  blurView: {
    height: rt.insets.top,
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
