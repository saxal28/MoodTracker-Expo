import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'

import { Container, ImageBackground, Title, Subtitle, Logo, StyledButton } from "../common";
import {AppDatabase} from "../../services/Firebase";

const toCheckIn = () => Actions.loginPage();

export default class StartScreen extends React.Component {

    componentWillMount(){

        AppDatabase.initializeFirebase()
        AppDatabase.createUser();
    }

    handlePress() {
        console.log('hi')
    }

    render(){
        const handlePress = this.handlePress.bind(this)

        return (
            <ImageBackground imageLink={require("../../assets/images/graphWallpaper.png")} >

                <Container>

                    <View style={{marginBottom: 20}}>
                        <Title style={{color:'white'}}>Tracker</Title>
                        <Subtitle style={{color:'white'}}>What do you want to do?</Subtitle>
                    </View>

                    <StyledButton 
                        title="Check-In" 
                        buttonStyle={{padding:15}}
                        raised backgroundColor="#20a941" 
                        fontWeight="bold"
                        onPress={toCheckIn}/>

                    <StyledButton 
                        title="View Stats" raised backgroundColor="#e59524" 
                        buttonStyle={{padding:15}}
                        fontWeight="bold"
                        onPress={handlePress}/>

                    <StyledButton 
                        title="Dashboard" rimportaised 
                        buttonStyle={{padding:15}}
                        backgroundColor="white" 
                        color="black"
                        fontWeight="bold"
                        onPress={handlePress}/>

                </Container>

            </ImageBackground>
        )
    }
}
