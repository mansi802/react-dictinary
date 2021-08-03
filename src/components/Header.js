import { createTheme, TextField, ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components/macro";
import categories from "../data/category";

const Header = ({ lang, setLang, word, setWord, LightTheme }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightTheme ? "#000" : "#fff",
      },
      type: LightTheme ? "light" : "dark",
    },
  });

  return (
    <Container theme={LightTheme}>
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            value={word}
            label="Search a Word"
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            label="Language"
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
              setWord("");
            }}
            className="select"
          >
            {categories.map((curr) => (
              <MenuItem key={curr.label} value={curr.label}>
                {curr.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 35vh;
  width: 100%;

  @media (max-width: 900px) {
    justify-content: space-evenly;
    height: 25vh;
    .title {
      font-size: 11vw;
    }
  }

  .title {
    font-size: 7vw;
    text-transform: uppercase;
  }

  .inputs {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .search {
      width: 43%;
    }

    .select {
      width: 43%;
    }
  }
`;
