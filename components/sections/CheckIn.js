import React from "react";
import { Container, Title, ImageBackground, StyledButton } from "../common";
import { Picker, View, StatusBar} from "react-native";
import {generateSmallRange} from "../../util/utilityFunctions";
import {Subtitle} from "../common/Subtitle";
import Icon from "react-native-elements/src/icons/Icon";
import { Actions } from 'react-native-router-flux';

const handleSubmit = () => Actions.home();

export default class CheckIn extends React.Component {

    // - TODO - kick state out into store

    state = {
        values: [],
        error: "",
        weight: 145.2,
        emotion: "happy",
        uid: null,
        edit: false,
        alreadyLogged: false,
        message: "Scroll to Log!",
        date: null,
        generatedPickerRange: 150,
        yesterdaysStats: {
            weight: null,
        }
    }

    generatePickerWeights() {
        const {generatedPickerRange, weight} = this.state;

        let min = generatedPickerRange - 10;
        let max = min + 10;
        var arr = generateSmallRange(min, max);

        return arr.map(num => {
            console.log(this.state.weight, arr)
            return (
                <Picker.Item label={num} value={Number(num)} key={num} color="white"/>
            )
        })
    }

    // TODO - save in store instead of state
    changeWeight(e) {
        this.setState({weight: e});
        console.log(e)
    }

    render() {

        const changeWeight = this.changeWeight.bind(this);

        const { weight } = this.state;
        const { pickerContainerStyle, pickerStyle } = styles;

        return (

                <Container style={{justifyContent: "center", backgroundColor: "royalblue"}}>

                    {/* // TODO - make a section component */}

                    <View>
                        <Title style={{color:'white'}}>Check In</Title>
                        <Subtitle style={{color:'white'}}>Log Today's Weight</Subtitle>
                        <Icon
                            type="material-community"
                            name="check"
                            color="lime"

                        />
                    </View>

                    <View style={{marginTop: 30, marginBottom: 30}}>
                        <Picker
                            style={pickerStyle}
                            onValueChange={changeWeight}
                            value={weight}
                            selectedValue={weight}>

                            {this.generatePickerWeights()}

                        </Picker>
                    </View>

                    <View>
                        <StyledButton
                            title="Save"
                            color="black"
                            backgroundColor="white"
                            onPress={handleSubmit}
                            fontWeight="bold"/>
                    </View>

                </Container>

        )
    }

}

const styles = {
    pickerContainerStyle: {
        bottom: '0px',
    },
    pickerStyle: {

    }
}