import { View, Text, Button } from 'react-native';
import React from 'react';

type ErrorProps = {
  error: string;
  goBackCallback: () => void;
};

function Error({ error, goBackCallback }: ErrorProps) {
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
