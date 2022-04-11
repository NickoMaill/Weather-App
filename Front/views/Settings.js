import { SafeAreaView, Text, View, StyleSheet } from "react-native";

export default function Settings() {
	return (
		<>
			<SafeAreaView style={styles.mainContainer}>
				<View>
                    <Text>Paramètres</Text>
                </View>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
    position: "absolute",
		top: 0,
	},
});