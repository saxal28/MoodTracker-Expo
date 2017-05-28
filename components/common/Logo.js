import React from 'react';
import { View, Text, Image } from 'react-native';

const Logo = ({style}) => {
    return (
        <View style={styles.viewStyle}>
            <Image 
                source={require('../../assets/images/tracker-logo.png')}
                style={styles.imageStyle}
            />
        </View>
    )
}

const styles = {
    imageStyle: {
        height: 100,
        alignSelf: 'center'
    },
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
}

export { Logo };