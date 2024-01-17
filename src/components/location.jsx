import { useParams } from "react-router-dom";

export async function Location() {
	const { targetId } = useParams();

  const response = fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json");
  const targetAll = response.json();
  const target = targetAll.find((id) => targetId)

	return (
		<div className="container_Location">
			<div className="preview_Location">
				<button type="button" className="rigntArrow_Location">
					<i
						class="fa-solid fa-chevron-right fa-2xl"
						style={{color: '#ffffff'}}
					></i>
				</button>
				<button type="button" className="leftArrow_Location">
					<i
						class="fa-solid fa-chevron-left fa-2xl"
						style={{color:'#ffffff'}}
					></i>
				</button>
			</div>
			<div className="info_Location">
				<div>
					<h2 className="name_Location">{target.title}</h2>
					<h4 className="localisation_Location">{target.location}</h4>
				</div>
        <div>
          <h3 className="hostName_Location">{target.host.name}</h3>
          <span className="hostPicture_Location">{target.host.picture}</span>
        </div>
        <div className="classement_Location">
          <ul>
            {target.tags.map((tag => (
              <li key={tag.value} className="tags_Location">{tag.value}</li>
            )))}
          </ul>
          <div className="rating_Location">
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
          </div>
        </div>
        <div className="menus_Location">
          {/* <Descrition/>
          <Equipement/> */}
        </div>
			</div>
		</div>
	);
}
