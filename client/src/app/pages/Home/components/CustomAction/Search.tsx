import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import OutlinedInput, {
  outlinedInputClasses,
} from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import styled from "styled-components";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [isShow, setIsShow] = useState(false);
  return (
    <Wrapper>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-search"
          className={`custom__box-search ${isShow ? "active"  : ""}`}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onClick={()=>{setIsShow(true)}}
          placeholder="Tìm kiếm"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          aria-describedby="outlined-search-helper-text"
          inputProps={{
            "aria-label": "search",
          }}
        />
      </FormControl>
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  .custom__box-search {
    width: 240px;
    height: 32px;
    border-radius: 20px;
    background-color: #e8eaef;
    color: #72808e;
    &.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline} {
      border: 1px solid #0091ff;
      color: #72808e;
    }
    & .${outlinedInputClasses.notchedOutline} {
      border: 1px solid transparent;
    }
    &:hover .${outlinedInputClasses.notchedOutline} {
      border: 1px solid #0068ff;
    }
  }
  .active{
    background-color: white;
    border: 1px solid #0091ff;
  }
`;
