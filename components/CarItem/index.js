import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

//function component
const CarItem = (props) => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require('../../assets/images/ModelS.jpeg')}
				style={styles.image}
			/>

			<View style={styles.titles}>
				<Text style={styles.title}>Model S</Text>
				<Text style={styles.subtitle}>Starting at $147,990</Text>
			</View>

			<StyledButton
				type="primary"
				content={'Custom Order'}
				onPress={() => {
					console.warn('Custom Order was pressed');
				}}
			/>

			<StyledButton
				type="secondary"
				content={'Existing Inventory'}
				onPress={() => {
					console.warn('Existing inventory was pressed');
				}}
			/>
		</View>
	);
};

// export component
export default CarItem;
