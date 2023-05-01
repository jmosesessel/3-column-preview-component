import React from "react";

export default function Button(props) {
	const colorSetting = props.settings.className;
	console.log("colorSetting", colorSetting);
	return (
		<div className="button-wrap">
			{/* <a className="button-wrap__button" href="#" target="_blank" rel="noopener noreferrer">Learn More</a> */}
			<button className={"button-wrap__btn button-wrap__btn--" + colorSetting}>
				Learn More
			</button>
		</div>
	);
}
