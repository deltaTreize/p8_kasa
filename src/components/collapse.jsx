import { useState } from "react";

export function Collapse(props) {
	const [isToggled, settoggle] = useState(false);
	const [isHidden, sethidden] = useState("hidden");
	const [isRotated, setrotate] = useState("fa-solid fa-chevron-up");
	const [valueArray, setvalueArray] = useState([]);

	function handleToggle() {
		settoggle(!isToggled);
		sethidden(isHidden === "hidden" ? "show" : "hidden");
		setrotate(
			isRotated === "fa-solid fa-chevron-up"
				? "fa-solid fa-chevron-up rotated"
				: "fa-solid fa-chevron-up"
		);
		setvalueArray(props.value);
	}
	

	if (valueArray.lenght <= 1) {
		return (
			<div className="collapse">
				<div className="collapse_title">
					{props.title}
					<i className={isRotated} onClick={handleToggle}></i>
				</div>
				<div className={isHidden}>
					<ul>
						<li key={Math.random() * 1000}>{props.value}</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return (
			<div className="collapse">
				<div className="collapse_title">
					{props.title}
					<i className={isRotated} onClick={handleToggle}></i>
				</div>
				<div className={isHidden}>
					<ul>
						{valueArray.map((value) => (
							<li key={Math.random() * 1000}>{value}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
