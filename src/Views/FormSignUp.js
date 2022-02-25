import { useForm } from 'react-hook-form'
import { LogContext } from '../App';
import "../Styles/FormSignUp.css"

export default function FormSignUp() {

    const logState = useContext(LogContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const setAuth = () => {
        if (logState.isLogged === true) {
            console.info("already logged");
        } else {
            userState.setIsLogged(true)
        }
    }

    // const onSubmit = () => {
    //     userState.setIsLogged(false)
    // };

    // if (userState.isLogged !== false) {
    //     return (
    //         <button className="button" onClick={onSubmit}>Se déconnecter</button>
    //     )
    // }

    return (
        <div>

            <h1>S'inscrire</h1>

            <section className='form-section'>

                <form onSubmit={handleSubmit(setAuth)}>

                    <h3>Formulaire d'inscription</h3>
                    <p>remplissez attentivement ce formulaire pour pouvoir bénéficier de toutes nos fonctionnalisées</p>

                    <div className='name-div'>

                        <input placeholder='Nom*' {...register("lastName", { required: true })} />
                        {errors.lastName && <span>Vous devez entrer votre Nom</span>}

                        <input placeholder='Prénom*' {...register("name", { required: true })} />
                        {errors.name && <span>Vous devez renseigner votre prénom</span>}

                    </div>

                    <div className='gender-div'>

                        <select className='gender' {...register("category")}>
                            <option value="gender">--Genre--</option>
                            <option value="man">Homme</option>
                            <option value="woman">Femme</option>
                            <option value="other">Autre</option>
                        </select>

                    </div>

                    <div className='other-gender'>
                        <span>si autre, vous pouvez le préciser ici</span>
                        <input {...register("other")} />
                    </div>

                    <div className='birthDate-div'>

                        <span>Date de naissance</span>

                        <div className='birthDate-choice-div'>

                            <select value="day" {...register("day")}>
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

                            <select value="month" {...register("month")}>
                                <option value="month">Mois</option>
                                <option value="01">Janvier</option>
                                <option value="02">Février</option>
                                <option value="03">Mars</option>
                                <option value="04">Avril</option>
                                <option value="05">Mai</option>
                                <option value="06">Juin</option>
                                <option value="07">Juillet</option>
                                <option value="08">Août</option>
                                <option value="09">septembre</option>
                                <option value="10">Octobre</option>
                                <option value="11">Novembre</option>
                                <option value="12">Décembre</option>
                            </select>

                            <select value="year" {...register("year")}>
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


                    <div className='adress-div'>

                        <span>Adresse*</span>
                        <input placeholder='N°' {...register("numberAdress", { required: true })} />
                        <input placeholder='Rue, Avenue, Boulvard, etc...' {...register("street", { required: true })} />
                        <input placeholder='Arrondissement' {...register("district", { required: true })} />
                        <input placeholder='Ville' {...register("city", { required: true })} />

                    </div>


                    <div className='email-div'>

                        <span>Email*</span>

                        <div className="email">
                            <input type="text" placeholder="Email*" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && <span>Veuillez renter une adresse mail valide</span>}
                        </div>

                    </div>

                    <div className='password-div'>

                        <span>Mot de passe*</span>

                        <div className="password">
                            <div className='password-input'>

                                <input placeholder="Mot de passe*" {...register("password", { required: true, minLength: 6 })} />
                                {errors.password && <span>votre mot de passe doit comporter au moins une Majuscule un chiffre et un et caractère spécial</span>}
                            </div>
                            <div className='password-input'>

                                <input placeholder="Confirmez*" {...register("password", { required: true, minLength: 6 })} />
                                {errors.password && <span>vos mots de passe doivent être identiques</span>}
                            </div>

                        </div>


                    </div>

                    <div className='btn-div'>

                        <button className="btn" type="submit">S'inscrire</button>

                    </div>


                </form>

            </section>
        </div>
    )

}