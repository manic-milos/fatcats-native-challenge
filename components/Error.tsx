import { View, Text, Button } from 'react-native';
import React from 'react';

function Error({
	error,
	goBackCallback,
}: {
  error: string;
  goBackCallback: () => void;
}) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text style={{ color: 'red' }}>{error}</Text>
			<Button title="Try again" onPress={goBackCallback} />
		</View>
	);
}

export default Error;
