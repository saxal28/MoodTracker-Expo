import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import {
    StartScreen,
    CheckIn
} from "./sections";
import HomeMenu from "./sections/HomeMenu";
// import Login from "./Login";
// import LogDailyValues from "./LogDailyValues";
// import Home from "./Home";
// import Weight from "./Weight";
// import Emotions from "./Emotions";
// import Trends from "./Trends";
// import Strength from "./Strength";

const scenes = Actions.create(
    <Scene key="app">
        <Scene key="startScreen" component={StartScreen} hideNavBar />
        <Scene
            key="checkIn"
            component={CheckIn}
            hideNavBar={true}
            title="alan is cool"
            navigationBarStyle={{backgroundColor:'transparent'}}
            titleStyle={{color:'orange'}}
        />

        <Scene key="homeMenu" component={HomeMenu} hideNavBar />

    </Scene>
);

export default scenes;

