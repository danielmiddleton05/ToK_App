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
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.exhibitIntroPrez}>
                            <Text style={styles.linkText}>Link to 'Exhibit Intro' slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students will open a Google Doc (on Schoology) to begin their Exhibit</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={19}>
                        Lesson 18: Research and Workdays{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students will use their Google Doc to begin their research and write out their exhibit</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students should have their objects chosen and a basic outline</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>By the end of this week, students should have their rough draft completed</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={20}>
                        Lesson 19: Submission of Practice Exhibit{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students will submit the final draft of their TOK Exhibit</Text>{'\n'}{'\n'}
                    </Text>
                ]);
                break;
            case 'option6':
                setContent([
                    <Text key={21}>
                        Lesson 20: Intro to Politics in TOK{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Help students understand their political viewpoints using the Political Compass Test</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.politicalCompassLink}>
                            <Text style={styles.linkText}>Link to 'Political Compass Test'</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Discussion: Are there any innate issues with this kind of “test?” How accurate do you find the results? I think it would be important to note how much their views may change as they age</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={22}>
                        Lesson 21: Politics in Everything?{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonTwentyOnePrez}>
                            <Text style={styles.linkText}>Link to Lesson 21 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Compare and contrast the qualities of various political leaders. Quality/trait claims should be backed up evidence {'('}news articles, etc{')'}, 5 quality claims per leader, try to be objective. Divide the students into groups {'('}or individually depending on class size{')'} and assign a leader</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>“All humankind needs to be governed; left to our devices, we will devolve into anarchy.” Address this claim by identifying the 2 perspectives</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={23}>
                        Lesson 22: Political Leaders and Systems{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Continue with Compare/Contrast political leaders, if needed</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>ACTIVITY: Identify “political systems” in place. Political systems exist in all aspects of our lives {'('}how we interact with each other…{')'}. Have students brainstorm in groups about the structures of political systems within their environments</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Example: “political system” of teachers. There is a hierarchy of power {'('}HODs, principals, HOS{')'}. Allocation of resources {'('}rooms, budget, supplies{')'}. Each has a role to play in the system {'('}job titles and classes to teach{')'}. Balance of cooperation and competition. The jargon is used specifically for the environment. How is leadership chosen? “Authoritarian dictatorship” vs democracy?</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students present their identified structures</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={24}>
                        Lesson 23: Political Spectrums{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.lessonTwentyThreePrez}>
                            <Text style={styles.linkText}>Link to Lesson 23 slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>To what extent are our political views shaped by society, family, education, or social class? This will be the writing assignment if not covered in class</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={25}>
                        Lesson 24: Politics within the AOKs{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>{'('}Class Example{')'} AOK: History - Case-Study/RLS: The creation of Ukraine. KQ: On what criteria should we judge whether a war is justifiable? Perspective 1: War is justifiable to reunite a historical unity. Perspective 2: Aggressive war is wrong according to universal and historical standards.</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>AOK: Natural Sciences - Case-Study/RLS: Governments circumventing established scientific regulations for emergency situations. Guided perspective: How would government officials argue for speeding up the approval process? Guided perspective: What future implications could this have that may be detrimental to the scientific method? Students work through the guided perspectives</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>AOK: Math - Case-Study/RLS: “Decolonizing” Math. KQ: How might knowledge reflect or perpetuate existing power structures? Identify two perspectives</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>AOK: The Arts - Case-Study/RLS: Chinese artist Ai Weiwei censored by “anti-terrorist laws”. Identify two perspectives</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>AOK: Human Sciences - Case-Study/RLS: The minimum wage and unemployment. KQ: What kinds of knowledge inform our political opinions?</Text>{'\n'}{'\n'}
                    </Text>
                ]);
                break;
            case 'option7':
                setContent([
                    <Text key={26}>
                        Lesson 25: Intro and Review{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Review Intro to TOK Exhibit</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.introToExhibitPrez}>
                            <Text style={styles.linkText}>Link to 'Intro to Exhibit' slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Work through the class example {'('}FOR PRACTICE EXHIBIT{')'}</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><TouchableOpacity onPress={LessonLinks.exhibitClassExample}>
                            <Text style={styles.linkText}>Link to 'Class Example' slides</Text>
                        </TouchableOpacity>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students begin working on exhibition</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={27}>
                        Lesson 26: Prompt and Outline{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students should have chosen a prompt and theme by this time</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students will begin to work on creating a basic outline, should be finished by next class</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={28}>
                        Lesson 27: Outline Review and Rough Draft{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Outline completed. Students will meet one-to-one with the instructor {'('}allowed to give general feedback only, nothing too specific{')'}</Text>{'\n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>By the next class, students should have a rough draft read for review {'('}again, only general feedback given to students{')'}</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={29}>
                        Lesson 28: Rough Draft Submission{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Rough draft completed and read through by the instructor</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={30}>
                        Lesson 29: Final Draft Revision{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students should begin working on their final drafts, check student formatting</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={31}>
                        Lesson 30: Final Draft Submission{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Final draft due</Text>{'\n'}{'\n'}
                    </Text>,
                    <Text key={32}>
                        Lesson 31: Perform TOK Exhibition{' \n'}
                        <Text style={styles.bulletPoint}>•</Text><Text style={styles.bodyText}>Students will perform the TOK Exhibit on the date and time chosen by admin</Text>{'\n'}{'\n'}
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