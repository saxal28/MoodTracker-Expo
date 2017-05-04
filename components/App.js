import React from 'react';
import { View, Text } from 'react-native'; 
import firebase from 'firebase';

import scenes from "./Routes";
import { Router } from 'react-native-router-flux';
import { Container } from "./common"

class App extends React.Component {

    render(){
        return (
            <Container style={{paddingLeft: 0, paddingRight: 0}}>
                <Router scenes={scenes} />
            </Container>
        )
    }
}

export default App;