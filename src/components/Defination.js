import React from "react";
import styled from "styled-components/macro";

const Defination = ({ word, lang, meanings, LightTheme }) => {
  return (
    <Container>
      {meanings[0] && word && lang === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          controls
        >
          Your Browser doesn't support audio element
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: LightTheme ? "#3b5360" : "white",
                  color: LightTheme ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </Container>
  );
};

export default Defination;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: thin;
  height: 55vh;
  border: 10px solid rgb(105, 105, 105);
  border-radius: 10px;
  padding: 10px 20px;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  @media (max-width: 900px) {
    overflow: scroll;
    overflow-x: hidden;
    height: 60vh;
  }

  .subtitle {
    font-size: 5vw;
  }

  hr {
    background-color: black;
    width: 100%;
  }

  .singleMean {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px 0;
  }
`;
