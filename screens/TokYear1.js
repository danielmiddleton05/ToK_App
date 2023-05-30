import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'

const TokYear1 = () => {
    const [selectedOption, setSelectedOption] = useState('option1');
    const [content, setContent] = useState('');
  
    const handleOptionChange = (itemValue) => {
        setSelectedOption(itemValue); // Update the displayed content based on the selected option
        switch (itemValue) {
            case 'option1':
                setContent([
                    <Text key={1}>
                        Lesson 1: Intro to Class{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Get to Know You Game</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Teacher Introduction</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Go over Student Handbook Pages, Syllabus, and Rules/Expectations for class</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={syllabusLink}>
                            <Text style={styles.linkText}>Link to Syllabus</Text>
                        </TouchableOpacity>{'\n'}{'\n'}
                    </Text>,
                    <Text key={2}>
                        Lesson 2: What is Knowledge?{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonTwoPrez}>
                            <Text style={styles.linkText}>Link to What is TOK slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Activity: Define Knoweldge, Truth, and Belief</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonTwoTwoPrez}>
                            <Text style={styles.linkText}>Link to Defining Knowledge slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>How do you decide if something is true or not? In 1-2 paragraphs answer the above question, after reflecting on what has been discussed in class so far</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={3}>
                        Lesson 3: Reality and Perception{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonThreePrez}>
                            <Text style={styles.linkText}>Link to Lesson 3 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Have students, in pairs, create an allegory using images that they will present to the class</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={4}>
                        Lesson 4: Perspectives{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students give and explain their allegories</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Compare and contrast Cave and Elephant allegories in how these views approach knowledge. What claims is each allegory saying about knowledge? Break students into groups to discuss, then share their answers on the board</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonFourPrez}>
                            <Text style={styles.linkText}>Link to Lesson 4 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Based on our conversation on Plato Cave, Six Blind Men, Ted Talk by JB, and drawing of a world map activity, what can you conclude about a knowers perspective? “A knowers perspective is…” Answer in 3-4 sentences.</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={5}>
                        Lesson 5: What are Knowledge Questions?{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonFivePrez}>
                            <Text style={styles.linkText}>Link to Lesson 5 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonFiveVid}>
                            <Text style={styles.linkText}>Link to Lesson 5 video</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Do not need to watch the entire video</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Based on the video we watched and what was discussed in class, how and why are large groups of people easily coaxed to believe in conspiracy theories?</Text>{'\n'}
                    </Text>
                ]);
                break;
            case 'option2':
                setContent(
                    <Text>
                        Lesson 6: What are Knowledge Questions?{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Intro to Knowledge Questions using the Question Game Vid</Text>{' \n'}
                        <TouchableOpacity onPress={lessonSixPrez}>
                            <Text style={styles.linkText}>Link to Lesson 6 slides</Text>
                        </TouchableOpacity>{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>With a partner, or working individually, choose an RLS, identify the various perspectives, and then identify a possible Knowledge Question</Text> {'\n'}
                    </Text>
                );
                break;
            case 'option3':
                setContent([
                    <Text key={7}>
                        Lesson 7: Arts and an AOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Have students come up with a definition of art</Text> {'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonSevenPrez}>
                            <Text style={styles.linkText}>Link to Lesson 7 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>With a partner, choose one of the following KQs and identify the multiple perspectives within. </Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={8}>
                        Lesson 8: History as an AOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonEightPrez}>
                            <Text style={styles.linkText}>Link to Lesson 8 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Write a 1 paragraph reflection about your experience sharing your timeline with your parents </Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={9}>
                        Lesson 9: Human Sciences as an AOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonNinePrez}>
                            <Text style={styles.linkText}>Link to Lesson 9 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Step 1: Complete the simplified Myers-Briggs Personality Test. Step 2: Check the Common Careers for Personality Types, and click on the initials from the MBTI that aligns with what was given in Step 1. Step 3: Write a short reflection answering the following: What initials did you have? What were some of the possible careers that are recommended? Do you agree with this alignment and what problems do you foresee with this test?</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={10}>
                        Lesson 10: Mathematics as an AOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonTenPrez}>
                            <Text style={styles.linkText}>Link to Lesson 10 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Based on todays discussion/debate, do you believe mathematics was invented or discovered and why do you believe this, answer with 4-6 sentences?</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={11}>
                        Lesson 11: Natural Sciences as an AOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={natSciOpenAct}>
                            <Text style={styles.linkText}>Link to Opening Activity</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Opening Activity: Read through the doc and print 1 copy of page 3 for each student</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={lessonElevenPrez}>
                            <Text style={styles.linkText}>Link to Lesson 11 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Opening Activity: Read through the doc and print 1 copy of page 3 for each student</Text>{'\n'}
                    </Text>
                ]);
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
// All the needed links (will be moved later and imported in)
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

    const lessonSevenPrez = () => {
        Linking.openURL('https://docs.google.com/presentation/d/1LZlTofcLeIOrattNS7Z-rtR_Q3tn6AndJ8zxWl_JHoE/edit?usp=sharing');
    };

    const lessonEightPrez = () => {
        Linking.openURL('https://docs.google.com/presentation/d/1Ab_p5YbIU9HCj5_pXxuf2BvywQo9MsAgqrchwpzTMBk/edit?usp=sharing');
    };

    const lessonNinePrez = () => {
        Linking.openURL('https://docs.google.com/presentation/d/1A2g8Im8yz5yrFpa6M9TGLnTBuAc6L8T3ELyB6t9zEOg/edit?usp=sharing');
    };

    const lessonTenPrez = () => {
        Linking.openURL('https://docs.google.com/presentation/d/1HOh34hBLUF874aozl6P431jxXvls27UJjMuuw7o9TzE/edit?usp=sharing');
    };

    const natSciOpenAct = () => {
        Linking.openURL('https://docs.google.com/document/d/1TZFHZiD7TWyOWMIxInI5WygI2h_cDvIgF3Ai5iX-VVk/edit?usp=sharing');
    };
    
    const lessonElevenPrez = () => {
        Linking.openURL('https://docs.google.com/presentation/d/1-r21r29NY8oqt2n0A2jX_3BDCG9q5yhGO-EQ4T7je_c/edit?usp=sharing');
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
