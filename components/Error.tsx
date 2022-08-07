import { View, Text, Button } from 'react-native';
import React from 'react';

type ErrorProps = {
  error: string;
  goBackCallback: () => void;
};

/**
 *
 * Small component to display an error message.
 * It is styled to be displayed in the center of the component it is placed in.
 * @param error The error message to display.
 * @param goBackCallback The callback to call when the user wants to go back.
 *	It can be used for navigation back, or to retry.
 */
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
