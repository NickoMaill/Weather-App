import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ReactNativeModal from "react-native-modal";
import Input from "../components/Input";
import Title from "../components/Title";
import DatePicker from "../components/DatePicker";
import { birthDay, birthMonth, birthYear } from "../utils/dateVariables";
import { currentSelectedDate, formatMonth } from "../utils/dateDefault";

export default function Register() {
	const [day, setDay] = useState("01");
	const [month, setMonth] = useState("Janvier");
	const [year, setYear] = useState("2022");
	const [isVisible, setIsVisible] = useState(false);

	return (
		<SafeAreaView>
			<View style={{ display: "flex", alignItems: "center" }}>
				<View>
					<Title>Bienvenue</Title>
				</View>
				<View style={{ display: "flex", alignItems: "center" }}>
					<Input placeholder="exemple@monemail.com" type="emailAddress">
						Email
					</Input>
					<Input placeholder="Dupont" type="familyName">
						Nom
					</Input>
					<Input placeholder="Alex" type="familyName">
						Prénom
					</Input>
					<Text>Date de naissance</Text>
					<TouchableOpacity onPress={() => setIsVisible(true)}>
						<Text>{`${day} / ${month} / ${year}`}</Text>
					</TouchableOpacity>
					<ReactNativeModal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "space-between",
								backgroundColor: "#fff",
								marginVertical: 330,
							}}
						>
							<DatePicker
								data={birthDay}
								selectedValue={day}
								onValueChange={(value, _i) => {
									setDay(value);
								}}
							>
								Jour
							</DatePicker>
							<DatePicker
								data={birthMonth}
								selectedValue={month}
								onValueChange={(value, _i) => {
									setMonth(value);
								}}
							>
								Mois
							</DatePicker>
							<DatePicker
								data={birthYear}
								selectedValue={year}
								onValueChange={(value, _i) => {
									setYear(value);
								}}
							>
								Année
							</DatePicker>
						</View>
					</ReactNativeModal>
					<Input placeholder="ex : 1 rue de l'adresse">Adresse</Input>
					<Input placeholder="ex : 75000">Arrondissement</Input>
					<Input placeholder="ex : Paris">Ville</Input>
					<Input secure={true} placeholder="*****">
						Mot de passe
					</Input>
					<View style={{ width: "60%" }}>
						<Text style={{}}>
							votre mot de passe dois contenir au moins 1 minuscule et 1 majuscule un chiffre et un
							caractère spécial : @, &, é, $
						</Text>
					</View>
					<Input secure={true} placeholder="*****">
						Confirmez votre mot de passe
					</Input>
				</View>
			</View>
		</SafeAreaView>
	);
}
