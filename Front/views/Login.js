import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigate } from "react-router-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";

export default function Login() {
	const navigate = useNavigate();

	return (
		<>
			<SafeAreaView>
				<View style={styles.titleContainer}>
					<TouchableOpacity onPress={() => navigate("/")}>
						<Image source={require("../assets/left-arrow.png")} />
					</TouchableOpacity>
					<Title>Connexion</Title>
					<View><Text>           </Text></View>
				</View>
				<View style={styles.inputContainer}>
					<Input placeholder="email" type="emailAddress">
						Email
					</Input>
					<Input secure={true} placeholder="*****" type="password">
						Mot de passe
					</Input>
					<Button>Se connecter</Button>
				</View>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		display: "flex",
		alignItems: "center",
		margin: 20,
		margin: 25,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	titleText: {
		fontSize: 20,
	},

	inputContainer: {
		display: "flex",
		alignItems: "center",
		marginVertical:266
	},
});
