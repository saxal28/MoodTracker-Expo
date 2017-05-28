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
import {Card, ListItem} from "react-native-elements";


@observer
export default class Stats extends React.Component {

	componentWillMount() {
		Firebase.getAllData()
	}

	render() {

		console.log(UserStore.store.weight)

		return (
			<Container>

				<Card
					title='CARD WITH DIVIDER'>

					{
						UserStore.store.weight.map(stat => {
							return (
								<ListItem
									title={`${stat.date} - ${stat.weight}`}
									key={stat.uid}/>
							)
						})
					}

				</Card>

				<StyledButton
					title="home"
					onPre={() => goHome}
				/>

			</Container>
		)
	}
}