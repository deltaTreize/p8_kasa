import { Link } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export function ErrorPage() {
	return (
		<>
			<Header />
			<div className="container_error">
				<h1>404</h1>
				<h3>Oups! La page que vous demandez n'existe pas.</h3>
				<Link to={"/homePage"}>Retourner sur la page d’accueil</Link>
			</div>
			<Footer />
		</>
	);
}
