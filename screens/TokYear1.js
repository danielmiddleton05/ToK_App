import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getLessonContent } from '../shared/LessonContent';

const TokYear1 = () => {
    const [selectedOption, setSelectedOption] = useState('option1');
    const [content, setContent] = useState('');
  
    const handleOptionChange = (itemValue) => {
        setSelectedOption(itemValue);
        const content = getLessonContent(itemValue);
        setContent(content);
    };

    useEffect(() => {
        handleOptionChange('option1'); // Set the default option to 'option1'
    }, []);
  
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedOption}
                onValueChange={handleOptionChange}
                style={styles.picker}
                itemStyle={styles.pickerItem}
            >
                <Picker.Item label="Unit 1: Intro to TOK" value="option1" />
                <Picker.Item label="Unit 2: Knowledge Questions" value="option2" />
                <Picker.Item label="Unit 3: AOK Intro" value="option3" />
                <Picker.Item label="Unit 4: Technology" value="option4" />
                <Picker.Item label="Unit 5: Practice Exhibit" value="option5" />
                <Picker.Item label="Unit 6: Politics" value="option6" />
                <Picker.Item label="Unit 7: Exhibition" value="option7" />
            </Picker>
            <Text style={styles.infoText}>Lessons are 70 minutes</Text>
    
            <ScrollView
                contentContainerStyle={styles.scrollContentContainer}
                showsVerticalScrollIndicator={true}
            >
                <View style={styles.contentContainer}>
                    <Text selectable style={styles.contentText}>{content}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
    },
    scrollContentContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingHorizontal: '10%',
    },
    infoText: {
        paddingBottom: 10,
    },
    picker: {
        width: '80%',
        marginBottom: 10,
    },
    pickerItem: {
        color: '#07689F', // Set the color of the picker item text
    },
    contentContainer: {
        backgroundColor: '#E8E8E8',
        padding: 20,
        borderRadius: 10,
    },
    contentText: {
        fontSize: 25,
        color: '#FF7E67',
    },
    bodyText: {
        fontSize: 14,
        color: 'black',
    },
    bulletPoint: {
        paddingLeft: 0,
        color: 'black',
    },
    linkText: {
        color: '#07689F',
    }
});

export default TokYear1;