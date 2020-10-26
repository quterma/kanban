import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./features/kanban/Header/Header";
import MainDragDropContext from "./features/kanban/Main/MainDragDropContext";
import Footer from "./features/kanban/Footer/Footer";
import TaskEditor from "./features/kanban/Main/TaskEditor/TaskEditor";

// styling
const GlobalStyle = createGlobalStyle`
  body {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		margin: 0;
		padding: 0;
		font-size: 18px;
	}
	*,
    ::before,
    ::after {
		box-sizing: border-box;
		}
	* {
		&::-webkit-scrollbar {
			height: 9px;
			width: 9px;
			}
		&::-webkit-scrollbar-track {
			border-radius: 6px;
			background-color: rgb(14, 43, 38, 0.4);
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 6px;
			background-color: rgba(255, 254, 214, 0.6);
		}
	}
	input {
		outline: thin;
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
				<Switch>
					<Route path="/editor/:taskId?" render={() => <TaskEditor />} />
					<Route path="/" render={() => <MainDragDropContext />} />
				</Switch>
				<Footer />
			</Wrapper>
		</>
	);
};

export default withRouter(App);
