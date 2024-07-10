import React from "react";

const CalendarCheckIcon = (props) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M5.75 0.75V2.25H10.25V0.75H11.75V2.25H14.75C14.9489 2.25 15.1397 2.32902 15.2803 2.46967C15.421 2.61032 15.5 2.80109 15.5 3V15C15.5 15.1989 15.421 15.3897 15.2803 15.5303C15.1397 15.671 14.9489 15.75 14.75 15.75H1.25C1.05109 15.75 0.860322 15.671 0.71967 15.5303C0.579018 15.3897 0.5 15.1989 0.5 15V3C0.5 2.80109 0.579018 2.61032 0.71967 2.46967C0.860322 2.32902 1.05109 2.25 1.25 2.25H4.25V0.75H5.75ZM14 7.5H2V14.25H14V7.5ZM10.277 8.352L11.3375 9.4125L7.625 13.125L4.973 10.473L6.035 9.4125L7.62575 11.004L10.2778 8.352H10.277ZM4.25 3.75H2V6H14V3.75H11.75V4.5H10.25V3.75H5.75V4.5H4.25V3.75Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default CalendarCheckIcon;
