import { NavLink } from "react-router-dom";

export function Header() {
	return (
				<div className="header">
					<img src="../../asset/kasa-logo.png" alt="logo de kasa" />
					<nav className="navbar">
							<NavLink to={"/"}>ACCUEIL</NavLink>
							<NavLink to={"/about"}>A PROPOS</NavLink>
					</nav>
				</div>
	);
}
