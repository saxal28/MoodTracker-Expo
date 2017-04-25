import React from 'react';
import { View } from 'react-native';

const Container = ({children}) => {
    return (
        <View style={{marginTop: 50}}>
            {children}
        </View>
    )
};

export { Container }