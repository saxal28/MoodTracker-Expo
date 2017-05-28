import React from "react";
import { Container, Title, ImageBackground, StyledButton } from "../common";
import { Picker, View, StatusBar} from "react-native";
import {formatDisplayDate, generateSmallRange} from "../../util/utilityFunctions";
import {Subtitle} from "../common/Subtitle";
import Icon from "react-native-elements/src/icons/Icon";
import { Actions } from 'react-native-router-flux';
import DatePicker from "react-native-datepicker";
import UserStore from "../../stores/UserStore";

import {observer} from 'mobx-react';

const setWeight = e => UserStore.setDailyWeight("weight", e);
const setDate = e => UserStore.setDailyWeight("date", e);

@observer
export default class CheckIn extends React.Component {

    componentWillMount() {
        UserStore.checkStore()
    }

    generatePickerWeights() {

        const {generatedPickerRange} = UserStore.store.dailyWeight;

        let min = generatedPickerRange - 10;
        let max = min + 20;
        var arr = generateSmallRange(min, max);

        return arr.map(num => {
            return (
                <Picker.Item label={num} value={Number(num)} key={num} color="white"/>
            )
        })
    }

    formatDisplayDate() {
        const {date} = UserStore.store.dailyWeight
	    console.log('date', date)

        return formatDisplayDate(date);
    }

    saveStats() {
        UserStore.setDailyWeight("alreadyLogged", true);
        UserStore.saveDailyStats();
    }

    render() {

        const { weight, date, alreadyLogged } = UserStore.store.dailyWeight;

        const formatDisplayDate = this.formatDisplayDate.bind(this);
        const saveStats         = this.saveStats.bind(this);
        const { pickerContainerStyle, pickerStyle, viewStyle, checkmarkStyle } = styles;

        return (

                <Container style={{justifyContent: "center", backgroundColor: "royalblue"}}>

                    {/* // TODO - make a section component */}

                    <StatusBar barStyle="light-content"/>

                    <View>

                        <Title style={{color:'white'}}>Check In</Title>

                        <Subtitle style={{color:'white'}}>
                            {formatDisplayDate()}
                            <DatePicker
                                style={{height: 40, width: 40, marginLeft: 10}}
                                date={date}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="2016-05-01"
                                maxDate="2018-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{dateInput: {display: 'none'}}}
                                onDateChange={setDate}
                            />
                        </Subtitle>

                    </View>

                    <View style={viewStyle}>

                        { alreadyLogged ?

                            <Icon
                                type="material-community"
                                name="check"
                                color="lime"
                                size={60}
                            /> :

                            <Icon
                                type="material-community"
                                name="check"
                                color="lime"
                                size={60}
                            />

                        }


                    </View>

                    <View style={viewStyle}>

                        <Picker
                        style={pickerStyle}
                        onValueChange={setWeight}
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
                            onPress={saveStats}
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
    viewStyle: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    pickerStyle: {
        flex: 1,
    },
    checkmarkStyle: {
        fontSize: 25,
        fontWeight: "bold"
    }
}