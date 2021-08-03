import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Header from "./components/Header";
import Defination from "./components/Defination";

function App() {
  const [lang, setLang] = useState("en");
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [LightTheme, setLightTheme] = useState(false);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
      );
      setMeanings(data.data);
      // console.log(meanings);
    } catch (err) {
      console.log(err);
    }
  };

  const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  useEffect(() => {
    dictionaryApi();
  }, [lang, word]);

  return (
    <div
      className="app"
      style={{
        height: "100vh",
        backgroundColor: LightTheme ? "#fff" : "#282c34",
        color: LightTheme ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          <PurpleSwitch
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
        </div>
        <Header
          lang={lang}
          setLang={setLang}
          word={word}
          setWord={setWord}
          LightTheme={LightTheme}
        />
        {meanings && (
          <Defination
            word={word}
            meanings={meanings}
            lang={lang}
            LightTheme={LightTheme}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
