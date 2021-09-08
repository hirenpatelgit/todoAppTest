import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
 * render all screen stack
 */
import { renderAllScreen } from './stackScreen';

import { SCREEN_DASHBOARD } from './screenName';

const Stack = createNativeStackNavigator();


/**
 * main root
 * @returns 
 */
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREEN_DASHBOARD}>
        {renderAllScreen()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
