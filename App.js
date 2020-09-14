import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PeoplePage from './src/pages/PeoplePage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={PeoplePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;