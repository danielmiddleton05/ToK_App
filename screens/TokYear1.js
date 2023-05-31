import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as LessonLinks from '../shared/LessonLinks';

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
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.syllabusLink}>
                            <Text style={styles.linkText}>Link to Syllabus</Text>
                        </TouchableOpacity>{'\n'}{'\n'}
                    </Text>,
                    <Text key={2}>
                        Lesson 2: What is Knowledge?{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonTwoPrez}>
                            <Text style={styles.linkText}>Link to What is TOK slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Activity: Define Knowledge, Truth, and Belief</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonTwoTwoPrez}>
                            <Text style={styles.linkText}>Link to Defining Knowledge slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>How do you decide if something is true or not? In 1-2 paragraphs answer the above question, after reflecting on what has been discussed in class so far</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={3}>
                        Lesson 3: Reality and Perception{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonThreePrez}>
                            <Text style={styles.linkText}>Link to Lesson 3 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Have students, in pairs, create an allegory using images that they will present to the class</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={4}>
                        Lesson 4: Perspectives{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students give and explain their allegories</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Compare and contrast Cave and Elephant allegories in how these views approach knowledge. What claims is each allegory saying about knowledge? Break students into groups to discuss, then share their answers on the board</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonFourPrez}>
                            <Text style={styles.linkText}>Link to Lesson 4 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Based on our conversation on Plato Cave, Six Blind Men, Ted Talk by JB, and drawing of a world map activity, what can you conclude about a knowers perspective? “A knowers perspective is…” Answer in 3-4 sentences</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={5}>
                        Lesson 5: What are Knowledge Questions?{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonFivePrez}>
                            <Text style={styles.linkText}>Link to Lesson 5 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonFiveVid}>
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
                        <TouchableOpacity onPress={LessonLinks.lessonSixPrez}>
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
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonSevenPrez}>
                            <Text style={styles.linkText}>Link to Lesson 7 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>With a partner, choose one of the following KQs and identify the multiple perspectives within</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={8}>
                        Lesson 8: History as an AOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonEightPrez}>
                            <Text style={styles.linkText}>Link to Lesson 8 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Write a 1 paragraph reflection about your experience sharing your timeline with your parents</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={9}>
                        Lesson 9: Human Sciences as an AOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonNinePrez}>
                            <Text style={styles.linkText}>Link to Lesson 9 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Step 1: Complete the simplified Myers-Briggs Personality Test. Step 2: Check the Common Careers for Personality Types, and click on the initials from the MBTI that aligns with what was given in Step 1. Step 3: Write a short reflection answering the following: What initials did you have? What were some of the possible careers that are recommended? Do you agree with this alignment and what problems do you foresee with this test?</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={10}>
                        Lesson 10: Mathematics as an AOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonTenPrez}>
                            <Text style={styles.linkText}>Link to Lesson 10 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Based on todays discussion/debate, do you believe mathematics was invented or discovered and why do you believe this, answer with 4-6 sentences?</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={11}>
                        Lesson 11: Natural Sciences as an AOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.natSciOpenAct}>
                            <Text style={styles.linkText}>Link to Opening Activity</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Opening Activity: Read through the doc and print 1 copy of page 3 for each student</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonElevenPrez}>
                            <Text style={styles.linkText}>Link to Lesson 11 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Opening Activity: Read through the doc and print 1 copy of page 3 for each student</Text>{'\n'}
                    </Text>
                ]);
                break;
            case 'option4':
                setContent([
                    <Text key={12}>
                        Lesson 12: Media Influences on Society{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Review AOK Intro with questions: What area of knowledge would give you the best answer to figure out</Text> {'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonTwelvePrez}>
                            <Text style={styles.linkText}>Link to Lesson 12 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Choose one of the KQs and identify two perspectives within the KQ. How would each one of those perspectives attempt to answer the KQ</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={13}>
                        Lesson 13: Tech and Misinformation{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonThirteenPrez}>
                            <Text style={styles.linkText}>Link to Lesson 13 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students will be given a list of popular conspiracy theories: Covid is manmade for population control, lizard people are in power, holocaust denial, the Illuminati, flat earthers, the moon landing is fake</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>In small groups, create a short presentation that covers the following information: Explain what the conspiracy believes, discuss its origins, how did this conspiracy spread, and what leads people to believe in this conspiracy?</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={14}>
                        Return and Continue After Practice Exhibit{' \n'}{'\n'}
                    </Text>,
                    <Text key={15}>
                        Lesson 14: Data, Information, and Knowledge{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonFourteenPrez}>
                            <Text style={styles.linkText}>Link to Lesson 14 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Using the table in the slides, choose 2 AOKS, and complete it to indicate what you think would constitute data, information, and knowledge in the AOKs shown below. What effect do the cognitive tools, such as memory, reason, imagination, language, sense perception, faith, emotion, and intuition, have on the collection of data, the process of information, and the construction of knowledge?</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={16}>
                        Lesson 15: Arts and an AOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonFifteenPrez}>
                            <Text style={styles.linkText}>Link to Lesson 15 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>What effect do you think that bias and big data have, or will have, on our society as a whole? List a real-world example to support your claim</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={17}>
                        Lesson 16: Arts and an AOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students will work in groups to analyze a recent RLS: 2021 Jan. 06 Capitol riots, Ukraine-Russia War, Redditors vs Wall Street, Anti-mask/covid protests, cryptocurrency scams, anti-CRT, or the rise of Christian nationalism in US</Text> {'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Need to create a group presentation with the following aspects: Description of RLS and KQ chosen, What role did the media AND social media play in fueling this event?, Identify the multiple perspectives of the RLS, and What implications does the RLS have for society and its use of tech?</Text>{'\n'}{'\n'}
                    </Text>
                ]);
                break;
            case 'option5':
                setContent([
                    <Text key={18}>
                        Lesson 17: Intro to TOK Exhibition{' \n'}
                    </Text>,
                    <Text key={19}>
                        Lesson 18: Research and Workdays{' \n'}
                    </Text>,
                    <Text key={20}>
                        Lesson 19: Submission of Practice Exhibit{' \n'}
                    </Text>
                ]);
                break;
            case 'option6':
                setContent([
                    <Text key={21}>
                        Lesson 20: Intro to Politics in TOK{' \n'}
                    </Text>,
                    <Text key={22}>
                        Lesson 21: Politics in Everything?{' \n'}
                    </Text>,
                    <Text key={23}>
                        Lesson 22: Political Leaders and Systems{' \n'}
                    </Text>,
                    <Text key={24}>
                        Lesson 23: Political Spectrums{' \n'}
                    </Text>,
                    <Text key={25}>
                        Lesson 24: Politics within the AOKs{' \n'}
                    </Text>
                ]);
                break;
            case 'option7':
                setContent([
                    <Text key={26}>
                        Lesson 25: Intro and Review{' \n'}
                    </Text>,
                    <Text key={27}>
                        Lesson 26: Prompt and Outline{' \n'}
                    </Text>,
                    <Text key={28}>
                        Lesson 27: Outline Review and Rough Draft{' \n'}
                    </Text>,
                    <Text key={29}>
                        Lesson 28: Rough Draft Submission{' \n'}
                    </Text>,
                    <Text key={30}>
                        Lesson 29: Final Draft Revision{' \n'}
                    </Text>,
                    <Text key={31}>
                        Lesson 30: Final Draft Submission{' \n'}
                    </Text>,
                    <Text key={32}>
                        Lesson 31: Perform TOK Exhibition{' \n'}
                    </Text>
                ]);
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
                <Picker.Item label="Unit 1: Intro to TOK" value="option1" />
                <Picker.Item label="Unit 2: Knowledge Questions" value="option2" />
                <Picker.Item label="Unit 3: AOK Intro" value="option3" />
                <Picker.Item label="Unit 4: Technology" value="option4" />
                <Picker.Item label="Unit 5: Practice Exhibit" value="option5" />
                <Picker.Item label="Unit 6: Politics" value="option6" />
                <Picker.Item label="Unit 7: Exhibit" value="option7" />
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