import React from "react";
import { Container, Title, ImageBackground, StyledButton } from "../common";
import { Picker, View, } from "react-native";
import {generateSmallRange} from "../../util/utilityFunctions";

class CheckIn extends React.Component {

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

    componentWillMount() {
        console.log(this.state.weight)
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

    handleSubmit() {
        console.log("submitted")
    //
    }

    render() {

        const changeWeight = this.changeWeight.bind(this);
        const handleSubmit = this.handleSubmit.bind(this);

        const { weight } = this.state;
        const { pickerContainerStyle, pickerStyle } = styles;

        return (

                <Container style={{justifyContent: "center", backgroundColor: "#333"}}>
                    <Title style={{color:'white'}}>Check In</Title>

                    <View>
                        <Picker
                            style={pickerStyle}
                            onValueChange={changeWeight}
                            value={weight}
                            selectedValue={weight}>

                            {this.generatePickerWeights()}

                        </Picker>
                    </View>

                    <StyledButton
                        title="Save"
                        color="black"
                        backgroundColor="white"
                        onClick={handleSubmit}
                        fontWeight="bold"/>

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

export { CheckIn }