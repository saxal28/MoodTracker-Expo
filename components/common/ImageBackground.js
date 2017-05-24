import React from 'react';
import { View, Image } from 'react-native';
import {Container} from "./Container";

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
	padding: 20,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: "center"
}

export { ImageBackground };
