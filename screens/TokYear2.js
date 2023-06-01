import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getLessonContent } from '../shared/LessonContent';

const TokYear2 = () => {
    const [selectedOption, setSelectedOption] = useState('option8');
    const [content, setContent] = useState('');
  
    const handleOptionChange = (itemValue) => {
        setSelectedOption(itemValue);
        const content = getLessonContent(itemValue);
        setContent(content);
    };
  
    useEffect(() => {
        handleOptionChange('option8'); // Set the default option to 'option8'
    }, []);
  
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedOption}
                onValueChange={handleOptionChange}
                style={styles.picker}
                itemStyle={styles.pickerItem}
            >
                <Picker.Item label="Unit 8: Review" value="option8" />
                <Picker.Item label="Unit 9: AOK the Arts" value="option9" />
                <Picker.Item label="Unit 10: AOK Mathematics" value="option10" />
                <Picker.Item label="Unit 11: AOK Human Sciences" value="option11" />
                <Picker.Item label="Unit 12: AOK Natural Sciences" value="option12" />
                <Picker.Item label="Unit 13: AOK History" value="option13" />
                <Picker.Item label="Unit 14: The Essay" value="option14" />
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

export default TokYear2;