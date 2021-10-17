import { Chip, Stack } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import SecurityIcon from "@mui/icons-material/Security";
import * as React from "react";

export default function InitiativeTimeFilter() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };

  return (
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Chip
          icon={<CodeIcon />}
          label="Code"
          // variant="outlined"
          onClick={handleClick}s
          color="primary"
        />
        <Chip
          icon={<DescriptionIcon />}
          label="Documentation"
          // variant="outlined"
          onClick={handleClick}
          color="primary"
        />
        <Chip
          icon={<SecurityIcon />}
          label="Security"
          // variant="outlined"
          onClick={handleClick}
          color="primary"
        />
      </Stack>
  );
}
