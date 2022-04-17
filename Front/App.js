import { useState } from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import Navbar from "./components/Navbar";
import { Context } from "./Context/WeatherAppContext";
import Favorites from "./views/Favorites";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import Register from "./views/Register";
import WelcomePage from "./views/WelcomePage";


export default function App() {
	const [isLogged, setIsLogged] = useState(false);
	const value = {
		isLogged,
	};
	return (
		<Context.Provider value={value}>
			<NativeRouter>
				<Routes>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/homepage" element={<Homepage />} />
					<Route exact path="/favorites" element={<Favorites />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/" element={<WelcomePage />} />
					<Route exact path="/register" element={<Register />} />
				</Routes>
				{!isLogged && <Navbar />}
			</NativeRouter>
		</Context.Provider>
	);
}
