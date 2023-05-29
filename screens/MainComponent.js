import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainComponent = () => {
  return (
    <View style={styles.container}>
        <View style={styles.section}>
            <Text style={styles.sectionText}>First Section</Text>
            <Text>What is this app?</Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.sectionText}>Second Section</Text>
            <Text>What is it for?</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        marginBottom: 20,
    },
    sectionText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MainComponent;
