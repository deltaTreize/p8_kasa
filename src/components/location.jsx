import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stars } from "./star";
import { Collapse } from "./collapse";
import { PreviewLocation } from "./previewLocation";

export function Location() {
	const [Loc, setLoc] = useState([]);
	const { targetId } = useParams();

	useEffect(() => {
		fetch("../db.json")
			.then((response) => response.json())
			.then((data) => setLoc(data));
	}, []);
	if (Loc.length <= 0) {
		return <>chargement</>;
	}

	function idFinding(loc) {
		return loc.id === targetId;
	}

	const target = Loc.find(idFinding);

	return (
		<div className="container_Location">
      <PreviewLocation images={target.pictures} />
			<div className="info_Location">
					<h2 className="name_Location">{target.title}</h2>
					<h4 className="localisation_Location">{target.location}</h4>
			</div>
			<div className="tags_Location">
				<ul>
					{target.tags.map((tag) => (
						<li key={tag} className="tag_Location">
							{tag}
						</li>
					))}
				</ul>
			</div>
			<div className="info_Location">
				<div className="rating_Location">
			<Stars nb={target.rating}/>
				</div>
				<div className="host_info_Location">
					<h3 className="hostName_Location">{target.host.name}</h3>
					<img src={target.host.picture} alt="profil"></img>
				</div>
			</div>

			<div className="menus_Location">
            <Collapse title="Description" value={[target.description]}/>
            <Collapse title="Équipement" value={target.equipments} />
			</div>
		</div>
	);
}
