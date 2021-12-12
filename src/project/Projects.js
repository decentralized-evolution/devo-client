import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getDevoProjects } from "../utils";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [devoProjects, setDevoProjects] = useState([]);

  useEffect(() => {
    const init = async () => {
      const devoProjects = await getDevoProjects();
      setDevoProjects(devoProjects);
    };
    init();
  }, []);

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {devoProjects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
            <ProjectCard
              name={project.name}
              logoUrl={project.logoURI}
              description={project.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
