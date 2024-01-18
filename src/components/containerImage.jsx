export function ContainerImage(props) {
	return (
		<div className={props.name}>
			<div className="black-background">
				<p>{props.text}</p>
			</div>
		</div>
	);
}
