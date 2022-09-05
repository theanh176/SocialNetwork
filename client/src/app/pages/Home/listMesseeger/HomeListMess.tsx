import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import Box from "@mui/material/Box/Box";
import Search from "../components/CustomAction/Search";
import ItemMess from "./components/ItemMess";
import ImageAvatar from "../../../../_assets/images/avatar.jpg";
const TABLISTMESS = {
	ALL: 0,
	UNREAD: 1,
};
const ListMess = [
	{ id: 1, url: ImageAvatar, name: "Thế Anh" },
	{ id: 2, url: ImageAvatar, name: "Anh Thế" },
	{ id: 3, url: ImageAvatar, name: "Trung Nguyễn" },
	{ id: 4, url: ImageAvatar, name: "Thành Nam" },
	{ id: 5, url: ImageAvatar, name: "Phương Trịnh" },
];
const HomeListMess = () => {
	const [isTab, setIsTab] = useState(0);
	const [isListMess, setIsListMess] = useState(ListMess);
	useEffect(() => {
		setIsListMess([
			...ListMess,
			...ListMess,
			...ListMess,
			...ListMess,
			...ListMess,
			...ListMess,
		]);
	}, []);
	const menu = (
		<Menu
			items={[
				{
					label: <a href="https://www.antgroup.com">1st menu item</a>,
					key: "0",
				},
				{
					label: <a href="https://www.aliyun.com">2nd menu item</a>,
					key: "1",
				},
				{
					type: "divider",
				},
				{
					label: "3rd menu item",
					key: "3",
				},
			]}
		/>
	);

	return (
		<Wrapper>
			<Box className="d-flex justify-content-between align-items-center px-2">
				<Search />
				<div className="d-flex justify-content-between">
					<div>
						<PersonAddAltIcon />
					</div>
					<div className="ms-3">
						<GroupAddIcon />
					</div>
				</div>
			</Box>
			<div className="group__tab-list-mess d-flex justify-content-between">
				<div>
					<div className="box__tab d-flex justify-content-between">
						<div
							onClick={() => {
								setIsTab(TABLISTMESS.ALL);
							}}
						>
							<div
								className={`tab__name ${
									TABLISTMESS.ALL === isTab ? "active" : ""
								}`}
							>
								Tất cả
							</div>
						</div>
						<div
							onClick={() => {
								setIsTab(TABLISTMESS.UNREAD);
							}}
						>
							<div
								className={`tab__name ${
									TABLISTMESS.UNREAD === isTab ? "active" : ""
								}`}
							>
								Chưa đọc
							</div>
						</div>
					</div>
					<div
						className={`line__active ${
							TABLISTMESS.UNREAD === isTab
								? "line__active-active"
								: ""
						}`}
					></div>
				</div>
				<div className="group__more d-flex justify-content-between">
					<Dropdown
						overlay={menu}
						trigger={["click"]}
						className="box__click-header"
					>
						<div
							style={{ color: "#1890ff", cursor: "pointer" }}
							className="d-flex align-items-baseline"
						>
							<Space>
								Click me
								<DownOutlined />
							</Space>
						</div>
					</Dropdown>
					<div className="ms-3">
						<Dropdown overlay={menu} trigger={["click"]}>
							<Space>
								<MoreHorizIcon
									sx={{
										cursor: "pointer",
										color: "#a1a1a1",
										"&:hover": {
											background: "#eeeff2",
											borderRadius: "50%",
										},
									}}
								/>
							</Space>
						</Dropdown>
					</div>
				</div>
			</div>
			<div className="box__listmess">
				{isListMess && isListMess.length > 0
					? isListMess.map((item, idx) => {
							return (
								<ItemMess
									key={idx}
									name={item.name}
									url={item.url}
								/>
							);
					  })
					: ""}
			</div>
		</Wrapper>
	);
};

export default HomeListMess;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.ant-tabs-tab {
		font-weight: 600;
		padding: 5px;
		align-self: flex-end;
		margin: 0 10px;
	}
	.group__tab-list-mess {
		border-bottom: 1px solid #e3e3e3;
		padding: 0 16px;
		.box__tab {
			.tab__name {
				font-size: 14px;
				font-weight: 600;
				cursor: pointer;
				margin: 1px 10px;
				:hover {
					color: #40a9ff;
				}
			}
			.active {
				color: #1890ff;
			}
		}
		.line__active {
			background-color: #1890ff;
			height: 2px;
			width: 60px;
			transform: translate(0px, 0px);
			transition: transform 0.3s;
		}
		.line__active-active {
			transform: translate(67px, 0px);
		}
		.group__more {
			.box__click-header {
				border-radius: 10px;
				padding: 0 10px;
				margin-bottom: 1px;
				&:hover {
					background-color: #eeeff2;
				}
			}
		}
	}
	.box__listmess {
		overflow: auto;
		max-height: 100%;
		/* width */
		::-webkit-scrollbar {
			width: 8px;
		}

		/* Track */
		::-webkit-scrollbar-track {
			background: #f1f1f1;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background: #a9a9a9;
			border-radius: 10px;
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
			background: #888;
		}
	}
`;
