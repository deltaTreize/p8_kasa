import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContainerImage } from "./view_image";
import { Loader } from "./loader";


function Location(props) {
	return (
		<>
			<div
				id={props.id}
				className="location_home"
				style={{ backgroundImage: `url(${props.image})` }}
			>
				<h3>{props.title}</h3>
			</div>
		</>
	);
}

export function HomePage() {
	const [dataLoc, setDataLoc] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("./db.json")
			.then((response) => response.json())
			.then((data) => {
				setDataLoc(data);
				setLoading(false);
			});
	}, []);
	if (loading === true) {
		return <Loader />;
	}
	return (
		<div className="container_home">
			<ContainerImage
				name={"preview home"}
				text={"Chez vous, partout et ailleurs"}
			/>
			<div className="container_location">
				{dataLoc.map((loc) => (
					<Link to={`/location/${loc.id}`} key={loc.id}>
						<Location
							title={loc.title}
							id={loc.id}
							image={loc.cover}
							key={loc.id}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
