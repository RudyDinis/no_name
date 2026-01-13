import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Svg, { Path, Circle, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function Background() {
	return (
		<View style={styles.container}>
			<Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
				{/* Fond complet */}
				<Rect x="0" y="0" width={width} height={height} fill="#2b2e37" />

				{/* Dégradé en haut */}
				<Defs>
					<LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
						<Stop offset="0" stopColor="#1a1c23" />
						<Stop offset="1" stopColor="#2b2e37" />
					</LinearGradient>
				</Defs>

				{/* Couche du haut */}
				<Path
					d={`
						M0 ${height * 0.25} 
						C ${width * 0.2} ${height * 0.15}, ${width * 0.8} ${height * 0.35}, ${width} ${height * 0.25} 
						L ${width} 0 L 0 0 Z
					`}
					fill="url(#grad)"
				/>

				<Path
					d={`
						M0 ${height * 0.55}
						C ${width * 0.1} ${height * 0.65}, ${width * 0.4} ${height * 0.5}, ${width * 0.7} ${height * 0.6}
						C ${width * 0.85} ${height * 0.7}, ${width} ${height * 0.5}, ${width} ${height}
						L 0 ${height} Z
					`}
					fill="#3a3d4a"
					opacity={0.7}
				/>

				<Path
					d={`
						M0 ${height * 0.8}
						C ${width * 0.25} ${height * 0.9}, ${width * 0.55} ${height * 0.75}, ${width} ${height * 0.95}
						L ${width} ${height} L 0 ${height} Z
					`}
					fill="#2e313a"
				/>


				{/* Étoiles */}
				{Array.from({ length: 30 }).map((_, i) => (
					<Circle
						key={i}
						cx={Math.random() * width}
						cy={Math.random() * height + 90}
						r={Math.random() * 2 + 1}
						fill="#fff"
						opacity={Math.random() * 0.8 + 0.2}
					/>
				))}
			</Svg>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2e313a"
	},
});
