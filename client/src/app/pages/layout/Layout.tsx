import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import HomeBoxChat from "../Home/boxChats/HomeBoxChat";
import HomeHeader from "../Home/components/HomeHeader";
import InfoConversation from "../Home/conversation/InfoConversation";
import HomeListMess from "../Home/listMesseeger/HomeListMess";

const Layout = () => {
	return (
		<Wrapper>
			<HomeHeader></HomeHeader>
			<Grid container sx={{ marginLeft: "64px", height: "100vh" }}>
				<Grid item className="box__left" sx={{ height: "100%" }}>
					<HomeListMess></HomeListMess>
				</Grid>
				<Grid item xs>
					<HomeBoxChat></HomeBoxChat>
				</Grid>
				<Grid item className="box__right">
					<InfoConversation></InfoConversation>
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default Layout;

const Wrapper = styled.div`
	display: flex;
	.box__left,
	.box__right {
		width: 344px;
	}
	@media only screen and (max-width: 1200px) {
		.box__right {
			display: none;
		}
	}
	@media only screen and (max-width: 800px) {
		.box__left {
			display: none;
		}
	}
`;
