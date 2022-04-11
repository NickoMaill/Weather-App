import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button(props) {
	return (
		<View>
			<TouchableOpacity style={styles.button} onPress={props.onPress}>
				<Text style={styles.buttonText}>{props.children}</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	button: {
        alignItems:'center',
        borderStyle:'solid',
        borderColor:'#3d74ff',
        borderWidth:1,
        borderRadius:4,
        padding: 5,
        margin: 5,
        width: '70%',
        backgroundColor:'#3d74ff'
    },
    buttonText: {
        color: '#fff',
    }
});