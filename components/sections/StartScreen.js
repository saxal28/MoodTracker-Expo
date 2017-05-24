import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux'

import { Container, ImageBackground, Title, Subtitle, Logo, StyledButton } from "../common";
import {Firebase} from "../../services/Firebase";

const toCheckIn = () => Actions.login();
const toHome = () => Actions.home();
const toStats = () => Actions.stats();

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

        return (

            <ImageBackground imageLink={require("../../assets/images/wallpaper-colors.jpg")}>

                    <StatusBar barStyle="light-content"/>


                    <Logo />


                    <StyledButton 
                        title="Check-In" 
                        buttonStyle={{padding:15}}
                        raised backgroundColor="white"
                        fontWeight="bold"
                        color="black"
                        borderRadius={40}
                        onPress={toCheckIn}/>

                    <StyledButton 
                        title="View Stats" raised backgroundColor="white"
                        buttonStyle={{padding:15}}
                        fontWeight="bold"
                        color="black"
                        borderRadius={40}
                        onPress={toStats}/>

                    <StyledButton 
                        title="Dashboard" rimportaised 
                        buttonStyle={{padding:15}}
                        backgroundColor="white" 
                        color="black"
                        fontWeight="bold"
                        borderRadius={40}
                        onPress={toHome}/>

            </ImageBackground>

        )
    }
}

export default StartScreen
