import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

// functional component
export default function App() {
	return (
		<View style={styles.container}>
			{/* Show Header and CarsList when starting app */}
			<Header />
			<CarsList />
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
