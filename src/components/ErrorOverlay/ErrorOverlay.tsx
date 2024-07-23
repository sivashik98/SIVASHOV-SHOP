import { FC } from 'react';
import { useStyles } from 'react-native-unistyles';

import { UIText, UIView } from 'components/UIKit';

import { ErrorOverlayProps } from 'components/ErrorOverlay/types';

export const ErrorOverlay: FC<ErrorOverlayProps> = ({ error }) => {
  const { theme } = useStyles();

  return (
    <UIView absF center backgroundColor={theme.colors.primary}>
      <UIText h2 center color={theme.colors.typography}>
        {error}
      </UIText>
    </UIView>
  );
};
