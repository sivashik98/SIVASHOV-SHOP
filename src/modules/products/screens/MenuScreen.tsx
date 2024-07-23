import React, { useState } from 'react';
import { BlurView } from 'expo-blur';
import LottieView from 'lottie-react-native';
import { UIStack, UIText, UIView } from 'components/UIKit';
import { RadioButton, RadioGroup, Switch } from 'react-native-ui-lib';
import { UnistylesRuntime } from 'react-native-unistyles';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { SCREEN_WIDTH } from 'src/constants';

export const MenuScreen = () => {
  const { styles, theme } = useStyles(stylesheet);
  const [shouldUseSystemTheme, setShouldUseSystemTheme] = useState<boolean>(UnistylesRuntime.hasAdaptiveThemes);
  const [currentTheme, setCurrentTheme] = useState<string | boolean>(false);

  const onChangeSystemTheme = () => {
    if (shouldUseSystemTheme) setCurrentTheme('light');
    else setCurrentTheme(false);
    setShouldUseSystemTheme((prevState) => !prevState);
    UnistylesRuntime.setAdaptiveThemes(!shouldUseSystemTheme);
  };

  const onChangeManualTheme = (theme) => {
    setShouldUseSystemTheme(false);
    UnistylesRuntime.setAdaptiveThemes(false);
    setCurrentTheme(theme);
    UnistylesRuntime.setTheme(theme);
  };

  return (
    <>
      <BlurView style={styles.blurView} />
      <UIView flex padding-page backgroundColor={theme.colors.primary} style={styles.container}>
        <UIStack gap={30}>
          <UIView row br16 spread centerV padding-card backgroundColor={theme.colors.primary} style={styles.card}>
            <UIText bodyM2 color={theme.colors.typography}>
              Use system theme
            </UIText>
            <Switch
              value={shouldUseSystemTheme}
              onValueChange={onChangeSystemTheme}
              offColor={theme.colors.secondary}
              onColor={theme.colors.accent}
            />
          </UIView>
          <UIView row br16 spread centerV padding-card backgroundColor={theme.colors.primary} style={styles.card}>
            <UIText bodyM2 color={theme.colors.typography}>
              Choose your theme
            </UIText>

            <RadioGroup gap={15} initialValue={currentTheme} onValueChange={onChangeManualTheme}>
              <RadioButton value={'dark'} color={theme.colors.accent} label={'dark'} labelStyle={styles.label} />
              <RadioButton value={'light'} color={theme.colors.accent} label={'light'} labelStyle={styles.label} />
            </RadioGroup>
          </UIView>
        </UIStack>

        <UIView absF center style={{ zIndex: -1 }}>
          <LottieView autoPlay loop source={require('lottie/avatar.json')} style={styles.lottie} />
        </UIView>
      </UIView>
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
  container: {
    paddingTop: rt.insets.top + 20,
  },
  card: {
    elevation: 3,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: theme.colors.shadow,
    shadowOffset: { height: 0, width: 0 },
  },
  label: {
    color: theme.colors.typography,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'HelveticaNeueCyr-Medium',
  },
  lottie: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
  },
}));
