import { Text, View, SafeAreaView, StyleSheet } from "react-native";

export default function Favorites() {
	return (
		<SafeAreaView style={styles.mainContainer}>
			<View>
				<Text>Favoris</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
    position: "absolute",
		top: 0,
	},
});
