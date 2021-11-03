import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

//function component
const CarItem = (props) => {
	// define props of cars to render
	const { name, tagline, taglineCTA, image } = props.car;
	return (
		<View style={styles.carContainer}>
			{/* Define source of imagebackground and style it */}
			<ImageBackground source={image} style={styles.image} />
			{/* Define content of titles and style them */}
			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>
					{tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
				</Text>
			</View>
			{/* Define two buttons, types of buttons(refer to StyledButton file), content of buttons, message to display on console when pressed */}
			<View style={styles.buttonContainer}>
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
		</View>
	);
};

// export component
export default CarItem;
