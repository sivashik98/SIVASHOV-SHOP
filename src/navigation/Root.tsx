import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';


// ROOT
import { TabNavigation } from './Tabs';

const RootStack = createNativeStackNavigator();

const NavigationFlow = () => (
  <RootStack.Navigator initialRouteName='App' screenOptions={{ headerShown: false }}>
    <RootStack.Screen name={'App'} component={TabNavigation} />
  </RootStack.Navigator>
);

export const RootNavigation = () => {
  const navigationContainerRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`
  useReactNavigationDevTools(navigationContainerRef);

  return (
    <NavigationContainer ref={navigationContainerRef}>
      <NavigationFlow />
    </NavigationContainer>
  );
};
