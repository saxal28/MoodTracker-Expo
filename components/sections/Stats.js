import React from "react";
import {Text, View} from "react-native";
import {Title} from "../common/Title";
import {Firebase} from "../../services/Firebase"

export default class Stats extends React.Component {

	state = { weight: [] }

	componentWillMount() {
		Firebase.getWeight()
	}

	render() {

		console.log(Firebase.getWeight())

		return (
			<View>

				{
					this.state.weight.map( x => <Text>1</Text>)
				}

			</View>
		)
	}
}