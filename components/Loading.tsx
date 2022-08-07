import { View, Text } from 'react-native';
import React from 'react';

function Loading() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Loading...</Text>
		</View>
	);
}

export default Loading;
