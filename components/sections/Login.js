import { Actions } from 'react-native-router-flux';
import {Text, View} from "react-native";
import React, {Component} from 'react';
import {Container} from "../common/Container";
import {StyledButton} from "../common/StyledButton";
import {Title} from "../common/Title";
import {Subtitle} from "../common/Subtitle";
import {observer} from "mobx-react";
import FormLabel from "react-native-elements/src/form/FormLabel";
import FormInput from "react-native-elements/src/form/FormInput";
import {Firebase} from "../../services/Firebase";
import UserStore from "../../stores/UserStore";


@observer
export default class Login extends Component {

    onChangeUsername(e) {
        UserStore.setStateProp('username', e);
    }

    onChangePassword(e) {
        UserStore.setStateProp('password', e)
    }
    
    
    loginUser() {
        const {username, password} = UserStore.store;
        if(username && password) {
            Firebase.loginUser(username, password);
        }
    }

    render() {

        const {viewStyle} = styles;
        const onChangeUsername = this.onChangeUsername.bind(this);
        const onChangePassword = this.onChangePassword.bind(this);
        const loginUser = this.loginUser.bind(this);

        return (

            <Container>

                <Title>Login</Title>
                <Subtitle>Or Register!</Subtitle>

                <View style={viewStyle}>

                    <FormLabel>Email</FormLabel>
                    <FormInput
                        onChangeText={onChangeUsername}/>

                    <FormLabel>Password</FormLabel>
                    <FormInput
                        secureTextEntry
                        onChangeText={onChangePassword}/>

                </View>

                <StyledButton title="Login" onPress={loginUser} />

            </Container>

        )
    }
}

const styles = {
    viewStyle: {
        marginTop: 30,
        marginBottom: 30
    }
}