import React from 'react';
import { View, Text } from 'react-native'; 
import firebase from 'firebase';

import scenes from "./Routes";
import { Router } from 'react-native-router-flux';
import { Container } from "./common"

class App extends React.Component {

    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBjCs7K2w52bdwmUbat-4yGUtMEamSl_2I",
            authDomain: "moodtracker-d47d7.firebaseapp.com",
            databaseURL: "https://moodtracker-d47d7.firebaseio.com",
            storageBucket: "moodtracker-d47d7.appspot.com",
            messagingSenderId: "808622200328"
        };
        firebase.initializeApp(config);

        console.log("firebase initialized")
    }

    render(){
        return (
            <Container style={{paddingLeft: 0, paddingRight: 0}}>
                <Router scenes={scenes} />
            </Container>
        )
    }
}

export default App;