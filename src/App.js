import React from "react";
import "./App.css";
import { ThemeProvider, makeStyles } from "@material-ui/styles";

const themeInstance = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
};

function App() {
  return (
    <div>
      <ThemeProvider theme={themeInstance}>
        <div>
          <SideBarMenuRouters />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
