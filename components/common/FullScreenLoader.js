import React from 'react';
import { Container } from "./Container";
import { Image } from 'react-native'
import {Title} from "./Title";

const FullScreenLoader = () => {
    return (
        <Container style={{alignItems: 'center'}}>
            <Image
                style={{width: 200, height: 200}}
                source={{uri: 'http://i.imgur.com/dhXh4iF.gif'}}
            />

            <Title>Loading....</Title>

        </Container>
    )
}

export default FullScreenLoader;