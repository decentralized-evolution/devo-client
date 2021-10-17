import { Container } from "@mui/material";

import InitiativeTypeFilter from "./InitiativeTypeFilter";
import * as React from "react";

export default function Initiative() {
  return (
    <Container sx={{mt: 2}}>
      <InitiativeTypeFilter />
    </Container>
  );
}
