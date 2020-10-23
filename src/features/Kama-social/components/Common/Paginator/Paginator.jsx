import React, { useState } from 'react'
import styles from "./Paginator.module.css";
import { Preloader } from './../Preloader/Preloader';

const PageNumber = ({ thisNumber, onClick, currentPage }) => {
	return (
		<span onClick={() => onClick(thisNumber)}	className={currentPage === thisNumber ? `${styles.span} ${styles.selectedPage}` : styles.span}>
			{thisNumber}
		</span>
	)
}


export const Paginator = props => {
	// totalUsersCount берется с сервера, pageSize - кол-во элементов на странице - пока захардкожено в initialState
	const totalPages = Math.ceil(props.totalUsersCount / props.pageSize);
	// hook for filteredPages
	const [firstShownPage, setFirstShownPage] = useState(1);
	const goRight = () => {
		const newState = firstShownPage + 10 > totalPages ? firstShownPage : firstShownPage + 10;
		setFirstShownPage(newState);
	}
	const goLeft = () => {
		const newState = firstShownPage - 10 < 1 ? 1 : firstShownPage - 10;
		setFirstShownPage(newState);
	}

	const shownPages = [...Array(firstShownPage + 9 <= totalPages ? 10 : totalPages - firstShownPage + 1)]
		.map((n, i) => <PageNumber key={i + firstShownPage} thisNumber={i + firstShownPage} onClick={props.onPageChanged} currentPage={props.currentPage} />);
	
	if (!totalPages) return <Preloader />

	return (
		<div className={styles.pageSelectorsContainer}>
			{firstShownPage !== 1 && <button className={styles.button} onClick={goLeft}>left</button>}
			{shownPages}
			{firstShownPage + 9 <= totalPages && <button className={styles.button} onClick={goRight}>right</button>}
		</div>
	)
}