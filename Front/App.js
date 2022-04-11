import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Navbar from "./components/Navbar";
import { Context } from "./Context/WeatherAppContext";
import Favorites from "./views/Favorites";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import Register from "./views/Register";
import Settings from "./views/Settings";

export default function App() {
	const [isLogged, setIsLogged] = useState(false)
	const value = {
		isLogged,
	}
	return (
		<Context.Provider value={value}>
			<NativeRouter>
				<Routes>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/homepage" element={<Homepage />} />
					<Route exact path="/favorites" element={<Favorites />} />
					<Route exact path="/" element={<Register />} />
					<Route exact path="/settings" element={<Settings />} />
				</Routes>
				{isLogged && <Navbar />}
			</NativeRouter>
		</Context.Provider>
	);
}

const styles = StyleSheet.create({});
