import React, { useState } from "react";
import { PiSpeakerHighBold, PiSpeakerSlashBold } from "react-icons/pi";
import DrumsPad from "./DrumsPad";

const DrumMachine = () => {
	const [volume, setVolume] = useState(1);
	const [mute, setMute] = useState(false);
	const drumsInfo = [
		{
			keyCode: 81,
			keyTrigger: "Q",
			id: "Heater-1",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
		},
		{
			keyCode: 87,
			keyTrigger: "W",
			id: "Heater-2",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
		},
		{
			keyCode: 69,
			keyTrigger: "E",
			id: "Heater-3",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
		},
		{
			keyCode: 65,
			keyTrigger: "A",
			id: "Heater-4",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
		},
		{
			keyCode: 83,
			keyTrigger: "S",
			id: "Clap",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
		},
		{
			keyCode: 68,
			keyTrigger: "D",
			id: "Open-HH",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
		},
		{
			keyCode: 90,
			keyTrigger: "Z",
			id: "Kick-n'-Hat",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
		},
		{
			keyCode: 88,
			keyTrigger: "X",
			id: "Kick",
			url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
		},
		{
			keyCode: 67,
			keyTrigger: "C",
			id: "Closed-HH",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
		},
	];
	return (
		<div className="drum-machine-container">
			<header className="header">
				<h1>DRUM MACHINE</h1>
			</header>
			<div className="drum-machine">
				<div className="drum-pads">
					{drumsInfo.map((dI) => (
						<DrumsPad
							id={dI.id}
							keyCode={dI.keyCode}
							keyTrigger={dI.keyTrigger}
							url={dI.url}
							volume={volume}
						/>
					))}
				</div>
				<div className="volume">
					{mute || volume === 0 ? (
						<PiSpeakerSlashBold
							onClick={() => {
								setMute(false);
								setVolume(0.5);
							}}
						/>
					) : (
						<PiSpeakerHighBold
							onClick={() => {
								setMute(true);
								setVolume(0);
							}}
						/>
					)}
					<input
						type="range"
						min={0}
						max={1}
						step={0.02}
						id="volume"
						value={volume}
						style={{ "--litters-range": `${Math.round(100 * volume)}%` }}
						onChange={(event) => {
							setVolume(event.target.valueAsNumber);
						}}
						onTouchStart={() => {
							document.getElementById("volume").classList.add("active");
						}}
						onTouchEnd={() => {
							document.getElementById("volume").classList.remove("active");
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default DrumMachine;
