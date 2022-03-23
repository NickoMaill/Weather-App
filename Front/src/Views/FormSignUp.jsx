import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { LogContext } from "../App";
import "../Sass/FormSignUp.scss";

export default function FormSignUp() {
	const logState = useContext(LogContext);
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [gender, setGender] = useState("unknown");
	const [birthDay, setBirthDay] = useState(null);
	const [birthMonth, setBirthMonth] = useState("");
	const [birthYear, setBirthYear] = useState(null);
	const [streetNumber, setStreetNumber] = useState(null);
	const [street, setStreet] = useState("");
	const [district, setDistrict] = useState("");
	const [city, setCity] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [RePassword, setRePassword] = useState("");
	const [matchPassword, setMatchPassword] = useState(Boolean)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const userRegister = () => {

		// if (password !== RePassword && password.length !== 0 && RePassword.length !== 0) {
		// 	setMatchPassword(true)
		// 	return
		// }

		const formData = new FormData();

		formData.append("name", name);
		formData.append("surname", surname);
		formData.append("gender", gender);
		formData.append("birthDate", {
			day: birthDay,
			month: birthMonth,
			year: birthYear,
		});
		formData.append("userAddress", {
			number: streetNumber,
			street: street,
			district: district,
			city: city,
		});
		formData.append("email", email);
		formData.append("password", password);
		console.log(formData);

		fetch('http://localhost:8000/new-user/', {
			method: "POST",
			body: formData,
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			})

	};

	return (
		<div>
			<h1>S'inscrire</h1>
			<section className="form-section">
				<form onSubmit={handleSubmit(userRegister)}>
					<h3>Formulaire d'inscription</h3>
					<p>remplissez attentivement ce formulaire pour pouvoir bénéficier de toutes nos fonctionnalisées</p>

					<div className="name-div">
						<input
							type="text"
							placeholder="Nom*"
							{...register("lastName", { required: true, onChange: (e) => { setSurname(e.target.value) } })}
						/>
						{errors.lastName && <span>Vous devez entrer votre Nom</span>}

						<input
							type="text"
							placeholder="Prénom*"
							{...register("name", { required: true, onChange: (e) => { setName(e.target.value) } })}
						/>
						{errors.name && <span>Vous devez renseigner votre prénom</span>}
					</div>

					<div className="gender-div">
						<select className="gender" {...register("category", { onChange: (e) => { setGender(e.target.value) } })}>
							<option value="gender">--Genre--</option>
							<option value="male">Homme</option>
							<option value="female">Femme</option>
							<option value="other">Autre</option>
						</select>
					</div>

					<div className="other-gender">
						<span>si autre, vous pouvez le préciser ici</span>
						<input type="text" {...register("other", { required: true, onChange: (e) => { setGender(e.target.value) } })} />
					</div>

					<div className="birthDate-div">
						<span>Date de naissance</span>

						<div className="birthDate-choice-div">
							<select {...register("day", { required: true, onChange: (e) => { setBirthDay(parseInt(e.target.value)) } })}>
								<option value="day">jour</option>
								<option value="01">01</option>
								<option value="02">02</option>
								<option value="03">03</option>
								<option value="04">04</option>
								<option value="05">05</option>
								<option value="06">06</option>
								<option value="07">07</option>
								<option value="08">08</option>
								<option value="09">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
							</select>

							<select {...register("month", { required: true, onChange: (e) => { setBirthMonth(e.target.value) } })}>
								<option value="month">Mois</option>
								<option value="January">Janvier</option>
								<option value="February">Février</option>
								<option value="March">Mars</option>
								<option value="April">Avril</option>
								<option value="May">Mai</option>
								<option value="June">Juin</option>
								<option value="July">Juillet</option>
								<option value="August">Août</option>
								<option value="September">septembre</option>
								<option value="October">Octobre</option>
								<option value="November">Novembre</option>
								<option value="December">Décembre</option>
							</select>

							<select {...register("year", { required: true, onChange: (e) => { setBirthYear(parseInt(e.target.value)) } })}>
								<option value="year">Année</option>
								<option value="1940">1940</option>
								<option value="1941">1941</option>
								<option value="1942">1942</option>
								<option value="1943">1943</option>
								<option value="1944">1944</option>
								<option value="1945">1945</option>
								<option value="1946">1946</option>
								<option value="1947">1947</option>
								<option value="1948">1948</option>
								<option value="1949">1949</option>
								<option value="1950">1950</option>
								<option value="1951">1951</option>
								<option value="1952">1952</option>
								<option value="1953">1953</option>
								<option value="1954">1954</option>
								<option value="1955">1955</option>
								<option value="1956">1956</option>
								<option value="1957">1957</option>
								<option value="1958">1958</option>
								<option value="1959">1959</option>
								<option value="1960">1960</option>
								<option value="1961">1961</option>
								<option value="1962">1962</option>
								<option value="1963">1963</option>
								<option value="1964">1964</option>
								<option value="1965">1965</option>
								<option value="1966">1966</option>
								<option value="1967">1967</option>
								<option value="1968">1968</option>
								<option value="1969">1969</option>
								<option value="1970">1970</option>
								<option value="1971">1971</option>
								<option value="1972">1972</option>
								<option value="1973">1973</option>
								<option value="1974">1974</option>
								<option value="1975">1975</option>
								<option value="1976">1976</option>
								<option value="1977">1977</option>
								<option value="1978">1978</option>
								<option value="1979">1979</option>
								<option value="1980">1980</option>
								<option value="1981">1981</option>
								<option value="1982">1982</option>
								<option value="1983">1983</option>
								<option value="1984">1984</option>
								<option value="1985">1985</option>
								<option value="1986">1986</option>
								<option value="1987">1987</option>
								<option value="1988">1988</option>
								<option value="1989">1989</option>
								<option value="1990">1990</option>
								<option value="1991">1991</option>
								<option value="1992">1992</option>
								<option value="1993">1993</option>
								<option value="1994">1994</option>
								<option value="1995">1995</option>
								<option value="1996">1996</option>
								<option value="1997">1997</option>
								<option value="1998">1998</option>
								<option value="1999">1999</option>
								<option value="2000">2000</option>
								<option value="2001">2001</option>
								<option value="2002">2002</option>
								<option value="2003">2003</option>
								<option value="2004">2004</option>
								<option value="2005">2005</option>
								<option value="2006">2006</option>
								<option value="2007">2007</option>
								<option value="2008">2008</option>
								<option value="2009">2009</option>
								<option value="2010">2010</option>
								<option value="2011">2011</option>
								<option value="2012">2012</option>
								<option value="2013">2013</option>
								<option value="2014">2014</option>
								<option value="2015">2015</option>
								<option value="2016">2016</option>
								<option value="2017">2017</option>
								<option value="2018">2018</option>
								<option value="2019">2019</option>
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
							</select>
						</div>
					</div>

					<div className="adress-div">
						<span>Adresse*</span>
						<input type="text" placeholder="N°" {...register("numberAdress", { required: true, onChange: (e) => { setStreetNumber(parseInt(e.target.value)) } })} />
						<input
							type="text"
							placeholder="Rue, Avenue, Boulvard, etc..."
							{...register("street", { required: true, onChange: (e) => { setStreet(e.target.value) } })}
						/>

						<input
							type="text"
							placeholder="Arrondissement"
							{...register("district", { required: true, onChange: (e) => { setDistrict(e.target.value) } })}
						/>

						<input
							type="text"
							placeholder="Ville"
							{...register("city", { required: true, onChange: (e) => { setCity(e.target.value) } })}
						/>
					</div>

					<div className="email-div">
						<span>Email*</span>

						<div className="email">
							<input
								type="text"
								placeholder="Email*"
								{...register("email", { required: true, pattern: /^\S+@\S+$/i, onChange: (e) => { setEmail(e.target.value) } })}
							/>
							{errors.email && <span>Veuillez renter une adresse mail valide</span>}
						</div>
					</div>

					<div className="password-div">
						<span>Mot de passe*</span>

						<div className="password">
							<div className="password-input">
								<input
									placeholder="Mot de passe*"
									type="text"
									{...register("password", { required: true, onChange: (e) => { setPassword(e.target.value) } })}
								/>
								{errors.password && (
									<span>
										votre mot de passe doit comporter au moins une Majuscule un chiffre et un et
										caractère spécial
									</span>
								)}
							</div>
							<div className="password-input">
								<input
									placeholder="Confirmez*"
									type="text"
									{...register("Repassword", { required: true, onChange: (e) => { setRePassword(e.target.value) } })}
								/>
								{matchPassword && <span>vos mots de passe doivent être identiques</span>}
							</div>
						</div>
					</div>

					<div className="btn-div">
						<button className="btn" onClick={() => userRegister()} type="submit">
							S'inscrire
						</button>
					</div>
				</form>
			</section>
		</div>
	);
}
