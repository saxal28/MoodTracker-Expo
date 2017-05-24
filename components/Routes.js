import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import Home from "./sections/Home";
import Login from "./sections/Login";
import CheckIn from "./sections/CheckIn";
import StartScreen from "./sections/StartScreen";
import Stats from "./sections/Stats";

const scenes = Actions.create(

    <Scene key="app" hideNavBar>

        <Scene key="startScreen" component={StartScreen} />
        <Scene key="login" component={Login} />
        <Scene key="checkIn" component={CheckIn} />
        <Scene key="home" component={Home} />
        <Scene key="stats" component={Stats} />

    </Scene>

);

export default scenes;

