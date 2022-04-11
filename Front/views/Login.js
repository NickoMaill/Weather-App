import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";

export default function Login() {
	return (
		<>
			<SafeAreaView>
				<View style={styles.titleContainer}>
					<Title>Connexion</Title>
				</View>
				<View style={styles.inputContainer}>
					<Input placeholder="email" type="emailAddress">Email</Input>
					<Input secure={true} placeholder="*****" type="password">Mot de passe</Input>
					<Button>Se connecter</Button>
				</View>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({

	titleContainer:{
		display:'flex',
		alignItems:'center',
		margin: 20,
	},

	titleText: {
		fontSize:20,
	},

	inputContainer: {
		display:"flex",
		alignItems:"center",

	}
});
