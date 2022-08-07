import { View, Text } from 'react-native';
import React from 'react';

/**
 * Small component to display a loading screen while loading.
 * It is styled to be displayed in the center of the component it is placed in.
 */
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
