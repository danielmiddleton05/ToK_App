import React from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('TOK Year 1');
    };

    const handleSecondButtonPress = () => {
        navigation.navigate('TOK Year 2');
    };
    const handleEmailPress = () => {
        const email = 'daniel.middleton05@gmail.com';
        const url = `mailto:${email}`;
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.headerText}>TOK LESSONS</Text>
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
                <Text style={styles.textBox}>
                    Click on the button below to view the class. {' \n'}
                    <Text style={{ fontStyle: 'italic' }}>It is recommended that you have the Google Slides app downloaded to your device.</Text>
                </Text>
            </View>
            <TouchableOpacity onPress={handleEmailPress}>
                <Text style={styles.emailLink}>&#169; Daniel Middleton</Text>
            </TouchableOpacity>
            <Text style={styles.disclaimer}>Not officially affiliated with the IB</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#07689F',
        fontSize: 70,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#FF7E67',
        padding: 20,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#FF7E67',
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textBox: {
        margin: 30,
        textAlign: 'center',
    },
    emailLink: {
        color: '#07689F',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    disclaimer: {
        color: '#BEBEBE',
        marginBottom: 40,
        fontStyle: 'italic',
    }
});

export default HomeScreen;