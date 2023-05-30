import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'

const TokYear1 = () => {
    const [selectedOption, setSelectedOption] = useState('option1');
    const [content, setContent] = useState('');
  
    const handleOptionChange = (itemValue) => {
        setSelectedOption(itemValue);
        // Update the displayed content based on the selected option
        switch (itemValue) {
            case 'option1':
                setContent([
                    <Text key={1}>
                        Lesson 1: Intro to Class{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Get to Know You Game</Text>
                        {'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Teacher Introduction</Text>
                        {'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Go over Student Handbook Pages, Syllabus, and Rules/Expectations for class</Text>
                        {'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={syllabusLink}>
                            <Text style={styles.linkText}>Link to Syllabus</Text>
                        </TouchableOpacity>
                        {'\n'}
                    </Text>,
                    <Text key={2}>
                        Lesson 2: What is Knowledge?{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonTwoPrez}>
                            <Text style={styles.linkText}>Link to What is TOK slides</Text>
                        </TouchableOpacity>
                        {'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Activity: Define Knoweldge, Truth, and Belief</Text>
                        {'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonTwoTwoPrez}>
                            <Text style={styles.linkText}>Link to Defining Knowledge slides</Text>
                        </TouchableOpacity>
                        {'\n'}
                    </Text>,
                    <Text key={3}>
                        Lesson 3: Reality and Perception{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonThreePrez}>
                            <Text style={styles.linkText}>Link to Lesson 3 slides</Text>
                        </TouchableOpacity>
                        {'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Have students, in pairs, create an allegory using images that they will present to the class</Text>
                        {'\n'}
                    </Text>,
                    <Text key={4}>
                        Lesson 4: Perspectives{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students give and explain their allegories</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Compare and contrast Cave and Elephant allegories in how these views approach knowledge. What claims is each allegory saying about knowledge? Break students into groups to discuss, then share their answers on the board</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonFourPrez}>
                            <Text style={styles.linkText}>Link to Lesson 4 slides</Text>
                        </TouchableOpacity>{'\n'}
                    </Text>,
                    <Text key={5}>
                        Lesson 5: What are Knowledge Questions?{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonFivePrez}>
                            <Text style={styles.linkText}>Link to Lesson 5 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonFiveVid}>
                            <Text style={styles.linkText}>Link to Lesson 5 video</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Do not need to watch the entire video</Text>
                    </Text>
                ]);
                break;
            case 'option2':
                setContent(
                    <Text>
                        Lesson 6: What are Knowledge Questions?{' \n'}
                        <TouchableOpacity onPress={lessonSixPrez}>
                            <Text style={styles.linkText}>Link to Lesson 6 slides</Text>
                        </TouchableOpacity>
                        {'\n'}
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

    const syllabusLink = () => {
        Linking.openURL('https://docs.google.com/document/d/1dypKJxT0O7KP7kQ4DCh26_KIvMR7WBS8I1laxU3AOQw/edit?usp=sharing');
    };

    const lessonTwoPrez = () => {
        Linking.openURL('https://docs.google.com/presentation/d/1YDEpoAI-tvI-vHwuf4-JrWd9HxZ5xHkLchIxxiEPbJU/edit?usp=sharing');
    };

    const lessonTwoTwoPrez = () => {
        Linking.openURL('https://docs.google.com/presentation/d/1jNzuqM5mL2lxtgAyiKdUUqxk6CYoik4mvCLLl_85G0I/edit?usp=sharing');
    };

    const lessonThreePrez = () => {
        Linking.openURL('https://docs.google.com/presentation/d/1MdMFjZfQGNwbYUPSdyLKndprrDo5ZSGs-K2PD6OA-bc/edit?usp=sharing');
    };

    const lessonFourPrez = () => {
        Linking.openURL('https://docs.google.com/presentation/d/1ylTdcAjUpbEs53z-vyCSHFtyagm4m48AkL5RizZoows/edit?usp=sharing');
    };

    const lessonFivePrez = () => {
        Linking.openURL('https://docs.google.com/presentation/d/1PwctW9t1FQ6MwgF06B3haQYquI-TYOsySwll69Hn55M/edit?usp=sharing');
    };

    const lessonFiveVid = () => {
        Linking.openURL('https://youtu.be/q_ktE0qDT6Y');
    };

    const lessonSixPrez = () => {
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
    
            <ScrollView
                contentContainerStyle={styles.scrollContentContainer}
                showsVerticalScrollIndicator={true}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>{content}</Text>
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
    picker: {
        width: '80%',
        marginBottom: 10,
    },
    pickerItem: {
        color: '#07689F', // Set the color of the picker item text
    },
    contentContainer: {
        backgroundColor: '#ffe5e1',
        padding: 20,
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
        marginLeft: 0,
        color: 'black',
    },
    boldText: {
        fontWeight: 'bold',
    },
    linkText: {
        color: '#07689F',
    }
});

export default TokYear1;
