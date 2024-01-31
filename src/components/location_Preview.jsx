import { useEffect, useState } from "react";
let i = 0;

export function PreviewLocation({images}) {
	const [background, setBackground] = useState([]);
	useEffect(() => {
		setBackground(images[0]);
		i = 0;
	}, []);

	function HandleChangeArrow(arg) {
		i = i + arg;
		if (i >= images.length) {
			i = 0;
		}
		if (i < 0) {
			i = images.length - 1;
		}
		setBackground(images[i]);
	}

	if (images.length === 1) {
		return (
			<div
				className="preview_Location"
				style={{ backgroundImage: `url(${background})` }}
			>
				<p className="picture_counter">
					{i + 1} / {images.length}
				</p>
			</div>
		);
	}

	return (
		<div
			className="preview_Location"
			style={{ backgroundImage: `url(${background})` }}
		>
			<button
				type="button"
				className="leftArrow_Location"
				onClick={() => HandleChangeArrow(-1)}
			>
				<i
					className="fa-solid fa-chevron-left fa-2xl"
					style={{ color: "#ffffff" }}
				></i>
			</button>
			<button
				type="button"
				className="rigntArrow_Location"
				onClick={() => HandleChangeArrow(1)}
			>
				<i
					className="fa-solid fa-chevron-right fa-2xl"
					style={{ color: "#ffffff" }}
				></i>
			</button>
			<p className="picture_counter">
				{i + 1} / {images.length}
			</p>
		</div>
	);
}
