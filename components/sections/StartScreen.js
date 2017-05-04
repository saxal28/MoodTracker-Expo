import React from 'react';
import { View, Text } from 'react-native'; 

import { Container, ImageBackground, Title, Subtitle, Logo, StyledButton } from "../common";

class StartScreen extends React.Component {

    onClick() {
        console.log('hi')
    }

    render(){
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
                        onPress={this.onClick.bind(this)}/>

                    <StyledButton 
                        title="View Stats" raised backgroundColor="#e59524" 
                        buttonStyle={{padding:15}}
                        fontWeight="bold"
                        onPress={this.onClick.bind(this)}/>

                    <StyledButton 
                        title="Dashboard" rimportaised 
                        buttonStyle={{padding:15}}
                        backgroundColor="white" 
                        color="black"
                        fontWeight="bold"
                        onPress={this.onClick.bind(this)}/>

                </Container>
            </ImageBackground>
        )
    }
}


export {StartScreen}