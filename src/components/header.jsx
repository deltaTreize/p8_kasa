import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function Header() {
	return (
		<Router basename="/">
				<div className="header">
					<img src="../../asset/kasa-logo.png" alt="logo de kasa" />
					<nav className="navbar">
						<li>
							<Link to={"/"}>ACCUEIL</Link>
						</li>
						<li>
							<Link to={"/"}>A PROPOS</Link>
						</li>
					</nav>
					<hr />
			<Routes>
					<Route path="/" />
			</Routes>
				</div>
		</Router>
	);
}
