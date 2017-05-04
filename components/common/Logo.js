import React from 'react';
import { View, Text, Image } from 'react-native';

const Logo = ({style}) => {
    return (
        <View style={styles.viewStyle}>
            <Image 
                source={require('../../assets/images/logo2.png')}
                style={styles.imageStyle}
            />
        </View>
    )
}

const styles = {
    imageStyle: {
        height: 200,
        width: 200
    },
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export { Logo };