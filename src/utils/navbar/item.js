import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Item({ name, icon, color, link }) {
	return (
		<View style={styles.container}>
			<View style={[styles.item, { backgroundColor: color }]}>
				<FontAwesome5 name={icon} size={20} color="#fff" solid />
			</View>
			<Text style={styles.text}>{name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 55,
		alignItems: "center",
		marginVertical: 8
	},
	item: {
		width: 40,
		height: 40,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: "#fff"
	}
});
