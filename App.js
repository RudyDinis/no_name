import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { FontAwesome5 } from '@expo/vector-icons';

import Navbar from './src/utils/navbar/navbar';
import Background from './src/utils/style/background';

export default function App() {
	const [NavbarBool, SetNavBarBool] = useState(false);

	useEffect(() => {
		NavigationBar.setVisibilityAsync("hidden");
	}, []);

	return (
		<View style={styles.container}>
			{NavbarBool ? (
				<Navbar SetNavBarBool={SetNavBarBool}/>
			) : (
				<View style={{flex:1, position: "relative"}}>
					<Background/>
					<TouchableOpacity style={styles.menu} onPress={() => SetNavBarBool(!NavbarBool)}>
						<FontAwesome5 name="bars" size={25} color="#dfc1a9" solid />
					</TouchableOpacity>
				</View>
			)}
			<StatusBar hidden />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
	},
	menu: {
		position: "absolute",
		margin: 25
	}
});
