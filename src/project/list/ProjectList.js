import { CircularProgress, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getDevoProjects } from "../../utils";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const [devoProjects, setDevoProjects] = useState([]);

  useEffect(() => {
    const init = async () => {
      const devoProjects = await getDevoProjects();
      setDevoProjects(devoProjects);
    };
    init();
  }, []);

  let content;

  if (devoProjects.length === 0) {
    content = (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "50vh" }}
      >
        <Grid item xs={3}>
          <CircularProgress color="primary" size="100px" thickness={1} />
        </Grid>
      </Grid>
    );
  } else {
    content = devoProjects.map((project, i) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
        <ProjectCard
          id={project.id}
          name={project.name}
          logoUrl={project.logoURI}
          description={project.description}
        />
      </Grid>
    ));
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {content}
      </Grid>
    </Container>
  );
}
