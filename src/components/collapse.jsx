import { useState } from "react";

export function Collapse(props) {
	const [isToggled, setToggle] = useState(false);
	const [isHidden, setHidden] = useState("hidden");
	const [isRotated, setRotate] = useState("fa-solid fa-chevron-up");
	const [valueArray, setValueArray] = useState([]);

	function handleToggle() {
		setToggle(!isToggled);
		setHidden(isHidden === "hidden" ? "show" : "hidden");
		setRotate(
			isRotated === "fa-solid fa-chevron-up"
				? "fa-solid fa-chevron-up rotated"
				: "fa-solid fa-chevron-up"
		);
		setValueArray(props.value);
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
