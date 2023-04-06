import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import "./index.css";
import Routes from "./Routes";
import "fontsource-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";

import VoiceNavigation from "./VoiceNavigation";

export const AccountContext = createContext();
const App = () => {
  return (
    <>
      <CssBaseline />
      <AccountContext.Provider>
        <Header />
        <Routes />
        <VoiceNavigation />
        {/* <Footer /> */}
      </AccountContext.Provider>
    </>
  );
};

export default App;
