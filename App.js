import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TokYear1 from './screens/TokYear1';
import TokYear2 from './screens/TokYear2';

const Stack = createStackNavigator();

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                        name="TOK Year 1" 
                        component={TokYear1} 
                        options={{ headerTintColor: '#FF7E67' }}
                    />
                    <Stack.Screen 
                        name="TOK Year 2" 
                        component={TokYear2}
                        options={{ headerTintColor: '#FF7E67' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;