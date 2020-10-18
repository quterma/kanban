import React from "react";
import styled from "styled-components";
import Header from "./features/kanban/Header/Header";
import MainDragDropContext from "./features/kanban/Main/MainDragDropContext";
import Footer from "./features/kanban/Footer/Footer";

// styling
const Wrapper = styled.div`
	font-size: 1.2rem;
`;

const App = () => {
	return (
		<Wrapper>
			<Header />
			<MainDragDropContext />
			<Footer />
		</Wrapper>
	);
};

export default App;
