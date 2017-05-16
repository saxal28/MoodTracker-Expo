import React from 'react';
import { View } from 'react-native';

const Container = ({children, style, backgroundColor}) => {

    containerStyle = {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: backgroundColor || "white"
    }

    return (
        <View style={[containerStyle, style]}>
            {children}
        </View>
    )
};

export { Container }