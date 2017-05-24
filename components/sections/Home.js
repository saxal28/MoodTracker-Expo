import React, { Component } from 'react';
import {Title, Container} from "../common";
import {View} from "react-native";
import {Firebase} from "../../services/Firebase";
import {StyledButton} from "../common/StyledButton";
import { Actions } from "react-native-router-flux";

const logoutUser = () => Firebase.logoutUser;
const toMenu = () => Actions.startScreen();
const toStats = () => Actions.stats();

class Home extends Component {

    render() {

        return (
            <Container>
                <Title>Home Page</Title>
                <StyledButton title="Logout" onPress={logoutUser}/>
                <StyledButton title="Menu" onPress={toMenu} backgroundColor="firebrick"/>
                <StyledButton title="Stats" onPress={toStats}/>
            </Container>
        )
    }
}

export default Home;