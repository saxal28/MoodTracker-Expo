import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import {
    StartScreen
} from "./sections";
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
            {/* <Scene key="login" component={Login} hideNavBar title="login" />

            <Scene key="logDailyValues" component={LogDailyValues} hideNavBar />
            <Scene key="home"   component={Home} hideNavBar/>
            <Scene key="weight" component={Weight} hideNavBar/>
            <Scene key="emotions" component={Emotions} hideNavBar/>
            <Scene key="trends" component={Trends} hideNavBar/>
            <Scene key="strength" component={Strength} hideNavBar /> */}
    </Scene>
);

export default scenes;

