import { useEffect, useState } from "react";
import { Collapse } from "./collapse";
import { ContainerImage } from "./containerImage";

export function About (){
  const [dataLoc, setDataLoc] = useState([]);


	useEffect(() => {
		fetch(`./aboutText.json`)
			.then((response) => response.json())
			.then((data) => setDataLoc(data));
	}, []);
	if (dataLoc.length < 0) {
		return <>chargement</>;
	}

  return <div className="container_about">
    <ContainerImage name={"preview about"}/>
  			{dataLoc.map((loc) => (
  <Collapse 
  title= {loc.title}
  value= {loc.text}
  key= {loc.title}
  />
        ))}
    </div>
}