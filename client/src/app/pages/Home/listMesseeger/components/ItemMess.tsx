import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar/Avatar";

interface listMess {
    url: string;
    name: string;
}

const ItemMess = (props:listMess) => {
	const [isShowNotiMess, setShowNotiMess] = useState(false);
	return (
		<Wrapper>
			<div
				className="d-flex box__mess"
				onMouseEnter={() => {
					setShowNotiMess(true);
				}}
				onMouseLeave={() => {
					setShowNotiMess(false);
				}}
			>
				<div className="box__avatar">
					<Avatar
						sx={{ width: 48, height: 48 }}
						alt="Avatar"
						src={props.url}
					/>
				</div>
				<div className="box__mess-content">
					<div className="d-flex justify-content-between">
						<span className="mess__title">{props.name}</span>
						{isShowNotiMess ? (
							""
						) : (
							<span className="mess__days">26/08</span>
						)}
					</div>
					<div className="mess__content d-flex justify-content-between">
						<div>
							<span>Bạn:</span>&nbsp;<span>Trần Lưu Thế Anh</span>
						</div>
						{isShowNotiMess ? (
							""
						) : (
							<div className="box__icon-noti">1</div>
						)}
					</div>
				</div>
				{isShowNotiMess ? (
					<div className="d-flex flex-column justify-content-center">
						<MoreHorizIcon
							sx={{
								color: "#abb4bc", 
								"&:hover": { color: "#0068ff"},
							}}
						/>
					</div>
				) : (
					""
				)}
			</div>
		</Wrapper>
	);
};

export default ItemMess;

const Wrapper = styled.div`
	.box__mess {
		padding: 0 8px 0 16px;
		height: 72px;
		cursor: pointer;
		.box__mess-content {
			flex-basis: 85%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.mess__title {
				font-size: 16px;
				font-weight: 400;
				color: #001a33;
			}
			.mess__days {
				font-size: 12px;
				font-weight: 400;
				color: #72808e;
			}
			.mess__content {
				font-size: 14px;
				font-weight: 400;
				color: #72808e;
				.box__icon-noti {
					width: 16px;
					height: 16px;
					font-size: 9px;
					background-color: #abb4bc;
					color: #fff;
					border-radius: 8px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
		.box__avatar {
			display: flex;
			align-self: center;
			margin-right: 10px;
		}
		&:hover {
			background-color: #eeeff2;
		}
	}
`;
