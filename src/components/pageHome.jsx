import { useEffect, useState } from "react";
import { ContainerImage } from "./view_image";
import { Loader } from "./loader";
import { Location } from "./pageHome_creatingLocation";


export function HomePage() {
	const [dataLoc, setDataLoc] = useState([]);

	useEffect(() => {
		fetch("./db.json")
			.then((response) => response.json())
			.then((data) => {
				setDataLoc(data);
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
					<Location
							title={loc.title}
							id={loc.id}
							image={loc.cover}
							key={loc.id}
						/>
				))}
			</div>
		</div>
	);
}
