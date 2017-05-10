import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import {StartScreen} from "./sections";
import Home from "./sections/Home";
import Login from "./sections/Login";

const scenes = Actions.create(

    <Scene key="main">

        <Scene key="login" component={Login} />
        <Scene key="startScreen" component={StartScreen} />
        <Scene key="checkIn" component={CheckIn} />
        <Scene key="home" component={Home} />

    </Scene>

);

export default scenes;

