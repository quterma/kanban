import React from "react";

const Plus = ({ style = {}, fill = "#000", width = "100%", className = "", viewBox="0 0 14 14" }) => (
	<svg
		width={width}
		style={style}
		height={width}
		viewBox={viewBox}
		xmlns="http://www.w3.org/2000/svg"
		className={`svg-icon ${className || ""}`}
		xmlnsXlink="http://www.w3.org/1999/xlink"
	>
		<path fill={fill}	path d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z"/>
	</svg>
);

export default Plus;
