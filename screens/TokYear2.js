import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as LessonLinks from '../shared/LessonLinks';

const TokYear2 = () => {
    const [selectedOption, setSelectedOption] = useState('option8');
    const [content, setContent] = useState('');
  
    const handleOptionChange = (itemValue) => {
        setSelectedOption(itemValue); // Update the displayed content based on the selected option
        switch (itemValue) {
            case 'option8':
                setContent('Content for\nOption 8');
                break;
            case 'option9':
                setContent('Content for Option 9');
                break;
            case 'option10':
                setContent('Content for Option 10');
                break;
            case 'option11':
                setContent('Content for Option 11');
                break;
            case 'option12':
                setContent('Content for Option 12');
                break;
            case 'option13':
                setContent('Content for Option 13');
                break;
            case 'option14':
                setContent('Content for Option 14');
                break;
            default:
                setContent('');
                break;
        } 
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