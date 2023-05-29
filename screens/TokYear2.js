import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'

const TokYear2 = () => {
    const [selectedOption, setSelectedOption] = useState('option1');
    const [content, setContent] = useState('');
  
    const handleOptionChange = (itemValue) => {
        setSelectedOption(itemValue);
        // Update the displayed content based on the selected option
        switch (itemValue) {
            case 'option1':
                setContent('Content for\nOption 1');
                break;
            case 'option2':
                setContent('Content for Option 2');
                break;
            case 'option3':
                setContent('Content for Option 3');
                break;
            case 'option4':
                setContent('Content for Option 4');
                break;
            case 'option5':
                setContent('Content for Option 5');
                break;
            case 'option6':
                setContent('Content for Option 6');
                break;
            case 'option7':
                setContent('Content for Option 7');
                break;
            default:
                setContent('');
                break;
        } 
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
                <Picker.Item label="Unit 8: Review" value="option1" />
                <Picker.Item label="Unit 9: AOK the Arts" value="option2" />
                <Picker.Item label="Unit 10: AOK Mathematics" value="option3" />
                <Picker.Item label="Unit 11: AOK Human Sciences" value="option4" />
                <Picker.Item label="Unit 12: AOK Natural Sciences" value="option5" />
                <Picker.Item label="Unit 14: AOK History" value="option6" />
                <Picker.Item label="Unit 15: The Essay" value="option7" />
            </Picker>
    
            <View style={styles.contentContainer}>
                <Text style={styles.contentText}>{content}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
    },
    picker: {
        width: '80%',
        marginBottom: 20,
    },
    pickerItem: {
        color: '#07689F', // Set the color of the picker item text
    },
    contentContainer: {
        backgroundColor: '#ffe5e1',
        padding: 10,
        borderRadius: 5,
        width: '80%',
    },
    contentText: {
        fontSize: 18,
    },
    boldText: {
        fontWeight: 'bold',
    },
});

export default TokYear2;
