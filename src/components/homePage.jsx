import { useEffect, useState } from "react";
import { ContainerImage } from "./containerImage";

function Location(props) {
	return (
		<>
			<div id={props.id} className="location_home" style={{backgroundImage:`url(${props.image})`}}>
				<h3>{props.title}</h3>
			</div>
		</>
	);
}

export function HomePage() {
	const [dataLoc, setDataLoc] = useState([]);
	useEffect(() => {
		fetch("./db.json") //import pas fetch
			.then((response) => response.json())
			.then((data) => setDataLoc(data));
	}, []);
	if (dataLoc.length < 0) {
		return <>chargement</>;
	}
	return (
		<div className="container_home">
			<ContainerImage />
			{dataLoc.map((loc) => (
				<Location
					title={loc.title}
					id={loc.id}
					image={loc.pictures[0]}
					key={loc.id}
				/>
			))}
		</div>
	);
}
