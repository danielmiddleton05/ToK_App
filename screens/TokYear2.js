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
                setContent([
                    <Text key={33}>
                        Lesson 32: Intro to Class and Procedures{' \n'}
                    </Text>,
                    <Text key={34}>
                        Lesson 33: Reviewing TOK Year 1{' \n'}
                    </Text>
                ]);
                break;
            case 'option9':
                setContent([
                    <Text key={35}>
                        Lesson 34: {' \n'}
                    </Text>,
                    <Text key={36}>
                        Lesson 35: {' \n'}
                    </Text>,
                    <Text key={37}>
                        Lesson 36: {' \n'}
                    </Text>
                ]);
                break;
            case 'option10':
                setContent([
                    <Text key={38}>
                        Lesson 37: {' \n'}
                    </Text>,
                    <Text key={39}>
                        Lesson 38: {' \n'}
                    </Text>,
                    <Text key={40}>
                        Lesson 39: {' \n'}
                    </Text>
                ]);
                break;
            case 'option11':
                setContent([
                    <Text key={41}>
                        Lesson 40: {' \n'}
                    </Text>,
                    <Text key={42}>
                        Lesson 41: {' \n'}
                    </Text>,
                    <Text key={43}>
                        Lesson 42: {' \n'}
                    </Text>
                ]);
                break;
            case 'option12':
                setContent([
                    <Text key={44}>
                        Lesson 43: {' \n'}
                    </Text>,
                    <Text key={45}>
                        Lesson 44: {' \n'}
                    </Text>,
                    <Text key={46}>
                        Lesson 45: Practice Essay{' \n'}
                    </Text>
                ]);
                break;
            case 'option13':
                setContent([
                    <Text key={47}>
                        Lesson 46: {' \n'}
                    </Text>,
                    <Text key={48}>
                        Lesson 47: {' \n'}
                    </Text>,
                    <Text key={49}>
                        Lesson 48: {' \n'}
                    </Text>
                ]);
                break;
            case 'option14':
                setContent([
                    <Text key={50}>
                        Lesson 49: {' \n'}
                    </Text>,
                    <Text key={51}>
                        Lesson 50: {' \n'}
                    </Text>,
                    <Text key={52}>
                        Lesson 51: {' \n'}
                    </Text>,
                    <Text key={53}>
                        Lesson 52: {' \n'}
                    </Text>,
                    <Text key={54}>
                        Lesson 53: {' \n'}
                    </Text>
                ]);
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