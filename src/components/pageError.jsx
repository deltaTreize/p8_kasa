import { Link } from "react-router-dom";

export function ErrorPage() {
	return (
		<>
			<div className="container_error">
				<h1>404</h1>
				<h3>Oups! La page que vous demandez n'existe pas.</h3>
				<Link to={"/"}>Retourner sur la page d’accueil</Link>
			</div>
		</>
	);
}
