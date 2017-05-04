import React from "react";
import { Container, Title, ImageBackground, StyledButton } from "../common";
import { Picker } from "react-native";

class CheckIn extends React.Component {

    state = {
        values: [],
        error: "",
        weight: 150,
        emotion: "happy",
        uid: null,
        edit: false,
        alreadyLogged: false,
        message: "Scroll to Log!",
        date: null,
        generatedPickerRange: null,
        yesterdaysStats: {
            weight: null,
        }
    }


    onEmotionChange(e) { this.setState({emotion: e}); }
    onWeightChange(e) { this.setState({weight: e}); }

    render() {
        return (

                <Container style={{justifyContent: "center", backgroundColor: "#333"}}>
                    <Title style={{color:'white'}}>Check In</Title>

                    <Picker
                        style={{ height: 100, marginTop: 10, marginBottom: 10, paddingTop: 0, minWidth: 150}}
                        onValueChange={this.onEmotionChange.bind(this)}
                        selectedValue={this.state.emotion}
                    >
                        <Picker.Item label="Happy" value="happy" color="white"/>
                        <Picker.Item label="Sad" value="sad" color="white"/>
                        <Picker.Item label="Anxious" value="anxious" color="white" />
                        <Picker.Item label="Confident" value="confident" color="white" />
                        <Picker.Item label="Depressed" value="depressed" color="white" />
                    </Picker>

                    <StyledButton title="Save" color="black" backgroundColor="white" fontWeight="bold"/>

                </Container>

        )
    }

}

export { CheckIn }