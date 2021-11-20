import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography
            align="left"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            DEVO
          </Typography>

          <Box sx={{ flexGrow: 1, height: "100%", marginLeft:"100px" }}>
            <Link to="/initiatives">
              <Button color="inherit" className="router-item" sx={{ height: "100%" }}>
                Initiatives
              </Button>
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

          <Box sx={{ flexGrow: 1 }}>
            <Button
              color="error"
              style={{ float: "right" }}
              variant="outlined"
            >
              CONNECT WALLET
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
