import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('TOK Year 1');
    };

    const handleSecondButtonPress = () => {
        navigation.navigate('TOK Year 2');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textBox}>Click on the button below to view the class. {' \n'}It is recommended that you have the Google Slides app downloaded to your device.</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={handlePress}
            >
                <Text style={styles.buttonText}>TOK Year 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={handleSecondButtonPress}
            >
                <Text style={styles.buttonText}>TOK Year 2</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBox: {
        margin: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#FF7E67',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FF7E67',
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default HomeScreen;