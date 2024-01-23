export function Stars(props) {
	const redStars = Array(5).fill(
		<i className="fa-solid fa-star" style={{ color: "#FF6060" }}></i>
	);
	const greyStars = Array(5).fill(
		<i className="fa-solid fa-star" style={{ color: "#E3E3E3" }}></i>
	);

	return (
		<>
			{redStars.slice(5 - props.nb).map((redStars, index) => {
				return (
					<span key={index}>
						{redStars}
					</span>
				);
			})}
			{greyStars.slice(props.nb).map((greyStars, index) => {
				return (
					<span key={index}>
						{greyStars}
					</span>
				);
			})}
		</>
	);
}
