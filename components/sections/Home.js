import React, { Component } from 'react';
import {Title, Container} from "../common";
import {View} from "react-native";
import {Firebase} from "../../services/Firebase";
import {StyledButton} from "../common/StyledButton";
import { Actions } from "react-native-router-flux";

class Home extends Component {

    logoutUser() { Firebase.logoutUser() }
    goToMenu() { Actions.startScreen() }

    render() {

        const logoutUser = this.logoutUser.bind(this);
        const goToMenu = this.goToMenu.bind(this);

        return (
            <Container>
                <Title>Home Page</Title>
                <StyledButton title="Logout" onPress={logoutUser}/>
                <StyledButton title="Menu" onPress={goToMenu} backgroundColor="firebrick"/>
                <StyledButton title="Stats" onPress={logoutUser}/>
            </Container>
        )
    }
}

export default Home;