import { UnistylesRuntime } from 'react-native-unistyles';
import { useColorScheme } from 'react-native';

export default () => {
  const colorScheme = useColorScheme();
  return UnistylesRuntime.hasAdaptiveThemes ? colorScheme : UnistylesRuntime.themeName;
};
