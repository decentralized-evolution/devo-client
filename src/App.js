import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./common/Routes";
import TopBar from "./common/TopBar";
import { getDevoProject, getEthers } from "./utils";

function App() {
  const [ethers, setEthers] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [devoProject, setDevoProject] = useState(undefined);
  const [connectError, setConnectError] = useState(undefined);

  let isWalletConnected =
    typeof ethers !== "undefined" && typeof signer !== "undefined";

  const connectWallet = async () => {
    setConnectError(undefined);
    try {
      const ethers = await getEthers();
      const signer = await ethers.getSigner();
      const devoProject = await getDevoProject();
      setEthers(ethers);
      setSigner(signer);
      setDevoProject(devoProject);
    } catch (error) {
      setConnectError(error);
    }
  };

  return (
    <div className="App">
      <Router>
        <TopBar
          connectWallet={connectWallet}
          connectError={connectError}
          isWalletConnected={isWalletConnected}
        />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
