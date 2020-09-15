import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
          {
            title: 'Pessoas!',
            headerStyle: {
              backgroundColor: '#6ca2f7',
              borderBottomWidth: 3.5,
              borderBottomColor: 'rgba(0, 0, 0, 0.2)'
            },
            headerTitleStyle: {
              fontSize: 30,
              color: '#fff',
            },
            headerTitleAlign: 'center',
          }
        }
      >
        <Stack.Screen
          name="Main"
          component={PeoplePage}
        />
        <Stack.Screen 
          name="PeopleDetail"
          component={PeopleDetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;