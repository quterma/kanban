import React, { useRef, useEffect } from "react";
// import PropTypes from "prop-types";

// Hook that call onHandleOutsideClicks outside of the passed ref
function useOutsideDetector(ref, onHandleOutsideClicks) {
	useEffect(() => {
		//use onHandleOutsideClicks if clicked on outside of element
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				onHandleOutsideClicks();
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, onHandleOutsideClicks]);
}

//Component that alerts if you click outside of it
function OutsideDetector(props) {
	const wrapperRef = useRef(null);
	useOutsideDetector(wrapperRef, props.onHandleOutsideClicks);
	return <div ref={wrapperRef}>{props.children}</div>;
}

// OutsideDetector.propTypes = {
// 	children: PropTypes.element.isRequired,
// };

export default OutsideDetector;
