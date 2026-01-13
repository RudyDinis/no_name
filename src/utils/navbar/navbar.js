import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import Background from './background';
import Item from "./item";

const items = [
	{ name: 'Market', icon: 'store', color: '#fa868f', link: 'null' },
	{ name: 'Profile', icon: 'user', color: '#f1a181', link: 'null' },
	{ name: 'Settings', icon: 'cog', color: '#f2c494', link: 'null' },
	{ name: 'Chat', icon: 'comment', color: '#679892', link: 'null' },
	{ name: 'Taskwall', icon: 'coins', color: '#abc8dc', link: 'null' },
	{ name: 'Heart', icon: 'heart', color: '#add2cd', link: 'null' },
	{ name: 'Ebook', icon: 'book', color: '#a4867c', link: 'null' },
];

export default function Navbar({SetNavBarBool}) {
    return (
        <View style={styles.container}>
            <Background />
            <TouchableOpacity style={styles.back} onPress={() => SetNavBarBool(false)}>
                <FontAwesome5 name="angle-left" size={25} color="#dfc1a9" solid />
            </TouchableOpacity>
            <View style={styles.content}>
                <View style={styles.grid}>
                    {items.map((item, index) => (
                        <Item
                            key={index}
                            name={item.name}
                            icon={item.icon}
                            color={item.color}
                            link={item.link}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    back: {
        position: "absolute",
        margin: 25,
        zIndex: 10
    },
    content: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 180,
        justifyContent: "space-between",
    }
});