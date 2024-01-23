export function Location(props) {
	return (
		<>
			<div
				id={props.id}
				className="location_home"
				style={{ backgroundImage: `url(${props.image})` }}
			>
				<h3>{props.title}</h3>
			</div>
		</>
	);
}
