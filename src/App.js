import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./features/kanban/Header/Header";
import MainDragDropContext from "./features/kanban/Main/MainDragDropContext";
import Footer from "./features/kanban/Footer/Footer";

// styling
const GlobalStyle = createGlobalStyle`
  body {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
	}
	* {
		box-sizing: border-box;
	}
`;

const Wrapper = styled.div`
	font-family: 1.2rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<Header />
				<MainDragDropContext />
				<Footer />
			</Wrapper>
		</>
	);
};

export default App;
