import React from "react";

const MinusIcon = (props) => {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM3 5.4V6.6H9V5.4H3Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default MinusIcon;
