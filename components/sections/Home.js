import React, { Component } from 'react';
import {Title, Container} from "../common";
import {View} from "react-native";
import {Firebase} from "../../services/Firebase";
import {StyledButton} from "../common/StyledButton";

class Home extends Component {

    componentWillMount(){
        console.log(Firebase.getWeight());
    }

    logoutUser() {
        Firebase.logoutUser();
    }

    render() {

        const logoutUser = this.logoutUser.bind(this);

        return (
            <Container>
                <Title>Home Page</Title>
                <StyledButton title="Logout" onPress={logoutUser}/>
            </Container>
        )
    }
}

export default Home;