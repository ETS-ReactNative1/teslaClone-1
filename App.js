import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem';

// functional component
export default function App() {
	return (
		<View style={styles.container}>
			<CarItem
				name={'Model 3'}
				tagline={'Order Online for'}
				taglineCTA={'Touchless Delivery'}
				image={require('./assets/images/Model3.jpeg')}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

//styles to be used by our view
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
