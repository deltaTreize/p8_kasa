import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContainerImage } from "./view_image";
import { Loader } from "./loader";
import { Location } from "./pageHome_creatingLocation";


export function HomePage() {
	const [dataLoc, setdataLoc] = useState([]);

	useEffect(() => {
		fetch("./db.json")
			.then((response) => response.json())
			.then((data) => {
				setdataLoc(data);
			});
	}, []);

	if (dataLoc.length === 0) {
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
