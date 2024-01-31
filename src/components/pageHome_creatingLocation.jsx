import { Link } from "react-router-dom";

export function Location({title, image, id}) {
	return (
		<>
			<div
				id={id}
				className="location_home"
				style={{ backgroundImage: `url(${image})` }}
			>
				<h3>{title}</h3>
				<Link to={`/location/${id}`} key={id}></Link>
			</div>
		</>
	);
}
