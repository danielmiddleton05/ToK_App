import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TokYear1 from './screens/TokYear1';
import TokYear2 from './screens/TokYear2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="TOK Year 1" component={TokYear1} />
            <Stack.Screen name="TOK Year 2" component={TokYear2} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
