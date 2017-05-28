import React from "react";
import {Text, View} from "react-native";
import {Title} from "../common/Title";
import {Firebase} from "../../services/Firebase"
import {StyledButton} from "../common/StyledButton";
import {Actions} from 'react-native-router-flux'
const goHome = () => Actions.home();
import _ from "lodash";
import UserStore from "../../stores/UserStore";
import {Container} from "../common/Container";
import {observer} from 'mobx-react';


@observer
export default class Stats extends React.Component {

	componentWillMount() {
		Firebase.getAllData()
	}

	render() {

		console.log(UserStore.store.weight)

		return (
			<Container>

				{
					UserStore.store.weight.map(stat => {
						return (
							<Text key={stat.uid}>{stat.date} - {stat.weight}</Text>
						)
					})
				}

				<StyledButton
					title="home"
					onPre={() => goHome}
				/>

			</Container>
		)
	}
}