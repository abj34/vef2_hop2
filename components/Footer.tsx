import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
const Footer = () => {

    const { user } = useContext(AuthContext);
    return (
        <footer>
            {localStorage.getItem("username")? (
        <p>Logged in as {localStorage.getItem("username")}</p>):[]}
        <p>  Arnór Bragi Jóhannsson - Benedikt Þorsteinsson - Mikael Andri Ingason<br />Hópverkefni 2 - Vefforritun 2 - 2023</p> 
        </footer>
    );
};

export default Footer;