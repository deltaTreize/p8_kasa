import { useEffect, useState } from "react";
import { Collapse } from "./collapse";
import { ContainerImage } from "./view_image";
import aboutText from "../aboutPage_Text.json";

export function About (){
  const [dataLoc, setDataLoc] = useState([]);
  
	useEffect(() => {
    setDataLoc(aboutText)
	}, [dataLoc]);

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