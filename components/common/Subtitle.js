import React from 'react';
import { View, Text } from 'react-native';

const Subtitle = ({children, style}) => {
    const { subtitleStyle } = styles;
    return (
        <View style={{backgroundColor:"transparent"}}>
            <Text style={[subtitleStyle, style]}>
                {children}
            </Text>
        </View>
    )
}

const styles = {
    subtitleStyle: {
        fontSize: 18,
        color: 'gray',
        textAlign:'center'
    }
}

export { Subtitle };