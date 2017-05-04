import React, { Container } from 'react';
import { View, Image } from 'react-native';

const ImageBackground = ({imageLink, children}) => {
    return (
        <Image 
            source={ imageLink }
            style={ backgroundImage }
        >
            {children}
        </Image>
    )
}

const backgroundImage = {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
}

export { ImageBackground };
