import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Main />
                <Header />
                <Text style={styles.text}>GET STARTED DUMMY</Text>
            </NavigationContainer>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});