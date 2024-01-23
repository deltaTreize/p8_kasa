import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stars } from "./star";
import { Collapse } from "./collapse";
import { PreviewLocation } from "./location_Preview";
import { Loader } from "./loader";

export function Location() {
	const [Loc, setloc] = useState([]);
	const { targetId } = useParams();

	useEffect(() => {
		fetch("../db.json")
			.then((response) => response.json())
			.then((data) => {
				setloc(data);
			});
	}, []);
	
	function idFinding(loc) {
		return loc.id === targetId;
	}

	const target = Loc.find(idFinding);

	if (Loc.length === 0) {
		return <Loader />;
	}
	return (
		<div className="container_Location">
			<PreviewLocation images={target.pictures} />
			<div className="locationAll">
				<div className="Location">
					<h2 className="name_Location">{target.title}</h2>
					<h4 className="localisation_Location">{target.location}</h4>
					<div className="tags_Location">
						<ul>
							{target.tags.map((tag) => (
								<li key={tag} className="tag_Location">
									{tag}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="info_Location">
					<div className="rating_Location">
						<Stars nb={target.rating} />
					</div>
					<div className="host_info_Location">
						<h3 className="hostName_Location">
							{target.host.name}
						</h3>
						<img src={target.host.picture} alt="profil"></img>
					</div>
				</div>
			</div>
			<div className="menus_Location">
				<Collapse title="Description" value={[target.description]} />
				<Collapse title="Équipement" value={target.equipments} />
			</div>
		</div>
	);
}
