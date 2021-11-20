import { Container, Typography } from "@mui/material";

import * as React from "react";

export default function About() {
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4" component="h2">
        Whitepaper
      </Typography>

      <Typography variant="h5" component="h2" textAlign="left">
        Introduction
      </Typography>

      <Typography variant="subtitle1" textAlign="left" paragraph="true">
        In a world where passionate software developers are working together
        towards a common goal, not always they are earning at a fair level. Devo
        provides a set of decentralized tools that would bring fairness and
        transparency to software projects. Decentralized development combines
        smart contracts technology with version control to distribute project
        earnings based on the contribution of each individual. Decentralized
        governance allows the project to evolve in a healthy manner, controlled
        by the community.
      </Typography>

      <Typography variant="h5" component="h2" textAlign="left">
        Governance
      </Typography>

      <Typography variant="subtitle1" textAlign="left" paragraph="true">
        TODO
      </Typography>

      <Typography variant="h5" component="h2" textAlign="left">
        Development
      </Typography>

      <Typography variant="subtitle1" textAlign="left" paragraph="true">
        TODO
      </Typography>
    </Container>
  );
}
