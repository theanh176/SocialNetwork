import React, { useState } from "react";
import styled from "styled-components";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Avatar from "@mui/material/Avatar/Avatar";
import ImageAvatar from "../../../../_assets/images/avatar.jpg";
import { Button, IconButton } from "@mui/material";

const TABNAV = {
  AVATAR: 0,
  MESS: 1,
  LISTFRIEND: 2,
  SETTING: 3,
};

const HomeHeader = () => {
  const [isTabNav, setIsTabNav] = useState(0);
  return (
    <Wrapper>
      <div className="nav__top">
        <IconButton
          onClick={() => {
            setIsTabNav(TABNAV.AVATAR);
          }}
        >
          <Avatar
            sx={{ width: 48, height: 48 }}
            alt="Avatar"
            src={ImageAvatar}
          />
        </IconButton>
        <div className="box__nav">
          <Button
            className={`tab__nav ${TABNAV.MESS === isTabNav ? "active" : ""}`}
            onClick={() => {
              setIsTabNav(TABNAV.MESS);
            }}
          >
            <MessageOutlinedIcon sx={{ color: "white", fontSize: 32 }} />
          </Button>
          <Button
            className={`tab__nav ${
              TABNAV.LISTFRIEND === isTabNav ? "active" : ""
            }`}
            onClick={() => {
              setIsTabNav(TABNAV.LISTFRIEND);
            }}
          >
            <PermContactCalendarOutlinedIcon
              sx={{ color: "white", fontSize: 32 }}
            />
          </Button>
        </div>
      </div>
      <div className="nav__bottom">
        <Button
          className={`tab__nav ${TABNAV.SETTING === isTabNav ? "active" : ""}`}
          onClick={() => {
            setIsTabNav(TABNAV.SETTING);
          }}
        >
          <SettingsOutlinedIcon sx={{ color: "white", fontSize: 32 }} />
        </Button>
      </div>
    </Wrapper>
  );
};

export default HomeHeader;

const Wrapper = styled.div`
  background: #0091ff;
  width: fit-content;
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  .box__nav {
    display: grid;
    justify-items: center;
  }
  .tab__nav {
    height: 64px;
    :hover {
      background-color: #3ea5f3;
    }
  }
  .active {
    background: #006bbc;
  }
`;
