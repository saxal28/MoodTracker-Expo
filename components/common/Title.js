import React from "react";
import { View, Text} from 'react-native';

const Title = ({ children, style }) => {

    const textStyle =  {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign:'center'
    }

    return (
        <View style={{backgroundColor: 'transparent'}}>
            <Text style={[textStyle, style]}>
                {children}
            </Text>
        </View>
    )
}

export { Title };