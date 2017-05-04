import React from "react";
import { View, Text} from 'react-native';

const Title = ({ children, style }) => {
    const { textStyle } = styles;
    return (
        <View style={{backgroundColor: 'transparent'}}>
            <Text style={[textStyle, style]}>
                {children}
            </Text>
        </View>
    )
}

const styles = {
    textStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign:'center'
    }
}

export { Title };