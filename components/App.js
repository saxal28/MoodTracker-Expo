import React from 'react';
import { View, Text } from 'react-native'; 

import { Button } from 'react-native-elements';
import { Container, ImageBackground, Title, Subtitle, Logo } from "./common";

class App extends React.Component {

    onClick() {
        console.log('hi')
    }

    render(){
        return (
            <ImageBackground imageLink={require("../assets/images/graphWallpaper.png")} >
                <Container>

                    <View style={{marginBottom: 20}}>
                        <Title style={{color:'white'}}>Tracker</Title>
                        <Subtitle style={{color:'white'}}>What do you want to do?</Subtitle>
                    </View>

                    <Button 
                        title="Check-In" 
                        buttonStyle={{padding:15}}
                        raised backgroundColor="#20a941" 
                        style={styles.buttonStyle}
                        fontWeight="bold"
                        onPress={this.onClick.bind(this)}/>

                    <Button 
                        title="View Stats" raised backgroundColor="#e59524" 
                        buttonStyle={{padding:15}}
                        style={styles.buttonStyle}
                        fontWeight="bold"
                        onPress={this.onClick.bind(this)}/>

                    <Button 
                        title="Dashboard" raised 
                        buttonStyle={{padding:15}}
                        backgroundColor="white" 
                        color="black"
                        fontWeight="bold"
                        style={styles.buttonStyle}
                        onPress={this.onClick.bind(this)}/>

                </Container>
            </ImageBackground>
        )
    }
}

const styles = {
    buttonStyle: {
        maxWidth:400, 
        marginTop: 0, 
        paddingTop: 10,
        shadowColor:"#333",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0
        }
    }
}



export default App;