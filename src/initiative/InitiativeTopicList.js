import { Avatar, Chip, Divider, Grid, Stack, Typography } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";

import DescriptionIcon from "@mui/icons-material/Description";
import { Box } from "@mui/system";
import * as React from "react";

export default function InitiativeTopicList() {
  return (
    <Box
      sx={{
        width: "100%",
        mt: "50px",
      }}
    >
      <Grid container spacing={1} sx={{ margin: "10px" }}>
        <Grid>
          <Avatar
            sx={{
              background: "inherit",
              border: "0.1px solid gray",
            }}
          >
            <CodeIcon variant="outlined" />
          </Avatar>
        </Grid>

        <Grid
          item
          xs={11}
          md={8}
          style={{ display: "flex", alignItems: "left" }}
        >
          <Typography variant="h6" component="span">
            Refactor governance contracts such that it doesn't contain unused
            code
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" component="span"></Typography>
          <Typography variant="h6" component="span">
            <Stack direction="row" spacing={2}>
              <Chip label="PENDING" color="warning" variant="outlined" />
              <Chip label="VOTE" color="info" variant="outlined" />
            </Stack>
          </Typography>
        </Grid>
      </Grid>

      <Divider color="#2E3B55" variant="middle" sx={{ height: "2px" }} />

      <Grid container spacing={1} sx={{ margin: "10px" }}>
        <Grid>
          <Avatar
            sx={{
              background: "inherit",
              border: "0.1px solid gray",
            }}
          >
            <SecurityIcon variant="outlined" />
          </Avatar>
        </Grid>

        <Grid
          item
          xs={11}
          md={8}
          style={{ display: "flex", alignItems: "left" }}
        >
          <Typography variant="h6" component="span">
            Check contracts for vulnerabilities
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" component="span">
            <Stack direction="row" spacing={2}>
              <Chip label="EXECUTED" color="success" variant="outlined" />
            </Stack>
          </Typography>
        </Grid>
      </Grid>

      <Divider color="#2E3B55" variant="middle" sx={{ height: "2px" }} />

      <Grid container spacing={1} sx={{ margin: "10px" }}>
        <Grid>
          <Avatar
            sx={{
              background: "inherit",
              border: "0.1px solid gray",
            }}
          >
            <DescriptionIcon variant="outlined" />
          </Avatar>
        </Grid>

        <Grid
          item
          xs={11}
          md={8}
          style={{ display: "flex", alignItems: "left" }}
        >
          <Typography variant="h6" component="span">
            Create documentation for contract arhitecture
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="h6" component="span">
            <Stack direction="row" spacing={2}>
              <Chip label="CANCELLED" color="error" variant="outlined" />
            </Stack>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
