import React from 'react';
import { View } from 'react-native';

const Container = ({children, style}) => {
    return (
        <View style={[containerStyle, style]}>
            {children}
        </View>
    )
};

const containerStyle = {
    display: 'flex',
    flex: 1, 
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
}

export { Container }