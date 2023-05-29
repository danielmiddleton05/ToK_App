import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker'

const TokYear1 = () => {
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
                setContent(
                    <Text>
                        Lesson 6: What are Knowledge Questions?{' \n'}
                        <TouchableOpacity onPress={handleLinkPress}>
                            <Text style={styles.linkText}>Link to Lesson 6 slides</Text>
                        </TouchableOpacity>
                        {'\n'}
                        Content for{' \n'}
                        <TouchableOpacity onPress={handleLinkPress1}>
                            <Text style={styles.linkText}>Option 2</Text>
                        </TouchableOpacity>
                    </Text>
                );
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

    const handleLinkPress = () => {
        Linking.openURL('https://docs.google.com/presentation/d/1lWGmA4NcYPtBWyag1HAQ7y-AilkbAx9F9LezjpnEgiw/edit?usp=sharing');
    };

    const handleLinkPress1 = () => {
        Linking.openURL('https://google.com');
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
                <Picker.Item label="Unit 7: Exhibit" value="option7" />
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

export default TokYear1;
