import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import { CrewStackParamList } from '../CrewList/CrewHome';
import { RouteProp } from '@react-navigation/native';
import Error from '../../components/Error';
import CrewMemberDetails from '../../components/Crew/CrewMemberDetails';
import RequestPermissionsAndroid from '../../components/Permissions/RequestPermissionsAndroid';
import RequestPermissionsIOS from '../../components/Permissions/RequestPermissionsIOS';

type DetailsScreenRouteProp = RouteProp<CrewStackParamList, 'CrewMember'>;

/**
 * Screen for the details of a crew member.
 * It checks permissions and shows the details of the crew member.
 * @param route.params - params is the person got from route when navigated from CrewList.
 */
function CrewMember({ route: { params } }: { route: DetailsScreenRouteProp}) {
	if (Platform.OS === 'android') {
		return (
			<RequestPermissionsAndroid>
				<CrewMemberDetails person={params} />
			</RequestPermissionsAndroid>
		);
	}
	if (Platform.OS === 'ios') {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<RequestPermissionsIOS>
					<CrewMemberDetails person={params} />
				</RequestPermissionsIOS>
			</SafeAreaView>
		);
	}
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	return <Error error="Platform not supported" goBackCallback={() => {}} />;
}

export default CrewMember;
