import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
		fetch("./db.json") 
			.then((response) => response.json())
			.then((data) => setDataLoc(data));
	}, []);
	if (dataLoc.length < 0) {
		return <>chargement</>;
	}
	return (
		<div className="container_home">
			<ContainerImage 
			name={"preview home"}
			text= {"Chez vous, partout et ailleurs"}
			/>
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
	);
}
