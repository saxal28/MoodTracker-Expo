import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux'

import { Container, ImageBackground, Title, Subtitle, Logo, StyledButton } from "../common";
import {Firebase} from "../../services/Firebase";

const toCheckIn = () => Actions.login();

class StartScreen extends React.Component {

    state = { loading: true }

    componentWillMount(){

        // get all the data from the database
        // render FullScreenSpinner until loaded and into store;
        Firebase.initializeFirebase();

    }

    componentDidMount() {
        console.log(Firebase.getCurrentUser());
    }

    toCheckIn() {
        if (Firebase.getCurrentUser()) {
            return Actions.checkIn();
        }

        return Actions.login();
    }

    handlePress() {
        console.log('hi')
    }

    render(){
        const handlePress = this.handlePress.bind(this);
        const toCheckIn = this.toCheckIn.bind(this);

        return (

                <Container style={{backgroundColor: 'royalblue'}}>

                    <StatusBar barStyle="light-content"/>

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

        )
    }
}

export default StartScreen
