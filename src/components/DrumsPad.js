import React, { useLayoutEffect } from "react";
import useSound from "use-sound";

const DrumsPad = (props) => {
	const [playSound] = useSound(props.url, { volume: props.volume });
	const handleClick = () => {
		playSound();
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === props.keyCode || e.which === props.keyCode) {
			playSound();
		}
	};
	useLayoutEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	});
	return (
		<div id={props.id} className="drum-pad" onClick={handleClick}>
			{props.keyTrigger}
		</div>
	);
};

export default DrumsPad;
