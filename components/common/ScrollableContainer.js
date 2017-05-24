import React from 'react';
import {ScrollView} from 'react-native';

const ScrollableContainer = ({children, style, backgroundColor}) => {

	containerStyle = {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: backgroundColor || "white"
	}

	return (
		<ScrollView style={[containerStyle, style]}>
			{children}
		</ScrollView>
	)
};

export { ScrollableContainer }