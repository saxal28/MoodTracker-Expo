import React from 'react';
import { View, Text } from 'react-native'; 
import { Container} from "./common";
import { Button } from 'react-native-elements';

class App extends React.Component {
    render(){
        return (
            <Container>
                <Text>This is the App File</Text>
                <Button title="this is button" raised backgroundColor="red"/>
            </Container>
        )
    }
}

export default App;