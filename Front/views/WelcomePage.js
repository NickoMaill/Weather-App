import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { useNavigate } from "react-router-native";

export default function WelcomePage() {
    const navigate = useNavigate()
	return (
		<SafeAreaView>
			<TouchableOpacity onPress={() => navigate("/register")}>
				<Text>S'inscrire</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigate("/login")}>
				<Text>Se connecter</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
