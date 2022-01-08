import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

export default function TopBar({
  connectWallet,
  connectError,
  isWalletConnected,
}) {
  const [isAlertOpen, setIsAlertOpen] = React.useState(undefined);

  React.useEffect(() => {
    setIsAlertOpen(true);
  }, [connectError]);

  let connectBtn;

  if (isWalletConnected) {
    connectBtn = (
      <Button color="success" style={{ float: "right" }} variant="outlined">
        WALLET CONNECTED
      </Button>
    );
  } else {
    connectBtn = (
      <Button
        color="error"
        style={{ float: "right" }}
        variant="outlined"
        onClick={connectWallet}
      >
        CONNECT WALLET
      </Button>
    );
  }

  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsAlertOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#153155" }}>
        <Toolbar>
          <Typography
            align="left"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            DEVO
          </Typography>

          <Box sx={{ flexGrow: 1, height: "100%", marginLeft: "100px" }}>
            <Link to="/projects">
              <Button color="inherit">Projects</Button>
            </Link>
            |
            <Link to="/governance">
              <Button color="inherit">Governance</Button>
            </Link>
            |
            <Link to="/timeline">
              <Button color="inherit">Timeline</Button>
            </Link>
            |
            <Link to="/about">
              <Button color="inherit">About</Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1 }}>{connectBtn}</Box>
        </Toolbar>
      </AppBar>
      <Snackbar
        open={isAlertOpen && connectError !== undefined}
        autoHideDuration={6000}
        onClose={handleErrorClose}
      >
        <Alert severity="error" variant="filled" onClose={handleErrorClose}>
          Failed to connect wallet - {connectError}
        </Alert>
      </Snackbar>
    </Box>
  );
}
