import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./common/Routes";
import TopBar from "./common/TopBar";
import { getEthers } from "./utils";

function App() {
  const [ethers, setEthers] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [connectError, setConnectError] = useState(undefined);

  let isWalletConnected =
    typeof ethers !== "undefined" && typeof signer !== "undefined";

  const connectWallet = async () => {
    setConnectError(undefined);
    try {
      const ethers = await getEthers();
      const signer = await ethers.getSigner();
      setEthers(ethers);
      setSigner(signer);
    } catch (error) {
      setConnectError(error);
    }
  };

  const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#3c3c3c',
      },
      secondary: {
        main: '#7e57c2',
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <TopBar
          connectWallet={connectWallet}
          connectError={connectError}
          isWalletConnected={isWalletConnected}
        />
        <Routes isWalletConnected={isWalletConnected} />
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
