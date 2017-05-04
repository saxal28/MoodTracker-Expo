import React from 'react';
import { View, Picker } from 'react-native';

const Picker = ({children, style}) => {
    return (
        <View style={[pickerStyle, style]}>
            <Picker
                selectedValue={this.state.language}
                onValueChange={(lang) => this.setState({language: lang})}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    )
};

const pickerStyle = {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
}

export { Picker }