import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./common/Routes";
import TopBar from "./common/TopBar";
import { getWeb3 } from "./utils";

function App() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [connectError, setConnectError] = useState(undefined);

  let isWalletConnected =
    typeof web3 !== "undefined" && typeof accounts !== "undefined";

  const connectWallet = async () => {
    setConnectError(undefined);
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      setWeb3(web3);
      setAccounts(accounts);
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
