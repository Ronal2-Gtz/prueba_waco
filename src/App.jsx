import "./styles/styles.scss";
import { connect } from "react-redux";
import { fetchData } from "./store/actions";
import CharacterList from "./components/CharacterList";
import Instructions from "./components/Instructions";

import Search from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";

function App(props) {
  const { characters, fetchData } = props;
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <Instructions />
      <form>
        <FormControl>
          <InputLabel htmlFor="search-character">Search</InputLabel>
          <OutlinedInput
            id="search-character"
            label="Search"
            variant="standard"
            onChange={handleInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="search" edge="end">
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>

      <CharacterList
        characters={characters}
        search={search.toLocaleLowerCase()}
      />
      <small>
        Esta prueba fue inspirada en{" "}
        <a href="https://codesandbox.io/s/fancy-wind-dw5s53">codesandbox</a>
      </small>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.first.characters
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
