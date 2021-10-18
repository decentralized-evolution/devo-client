import { Container } from "@mui/material";

import InitiativeTypeFilter from "./InitiativeTypeFilter";
import InitiativeTopicList from "./InitiativeTopicList";
import * as React from "react";

export default function Initiative() {
  return (
    <Container sx={{ mt: 2 }}>
      <InitiativeTypeFilter />
      <InitiativeTopicList />
    </Container>
  );
}
