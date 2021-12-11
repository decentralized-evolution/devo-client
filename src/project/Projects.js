import {
  Container,
  Grid
} from "@mui/material";
import ProjectCard from "./ProjectCard";


export default function Projects() {
  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            name="First Project"
            logoUrl="/static/first_project.png"
            description="Phasellus rutrum a diam eget ultricies. Praesent sit amet justo et mauris gravida consectetur volutpat et diam."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            name="Second Project"
            logoUrl="/static/second_project.png"
            description="Curabitur purus mi, ultrices aliquet sagittis non, bibendum quis quam. Mauris faucibus lorem ac lacus semper, vitae semper risus tincidunt."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            name="Second Project"
            logoUrl="/static/second_project.png"
            description="Curabitur purus mi, ultrices aliquet sagittis non, bibendum quis quam. Mauris faucibus lorem ac lacus semper, vitae semper risus tincidunt."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            name="Second Project"
            logoUrl="/static/second_project.png"
            description="Curabitur purus mi, ultrices aliquet sagittis non, bibendum quis quam. Mauris faucibus lorem ac lacus semper, vitae semper risus tincidunt."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            name="Second Project"
            logoUrl="/static/second_project.png"
            description="Curabitur purus mi, ultrices aliquet sagittis non, bibendum quis quam. Mauris faucibus lorem ac lacus semper, vitae semper risus tincidunt."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard
            name="Second Project"
            logoUrl="/static/second_project.png"
            description="Curabitur purus mi, ultrices aliquet sagittis non, bibendum quis quam. Mauris faucibus lorem ac lacus semper, vitae semper risus tincidunt."
          />
        </Grid>
      </Grid>
    </Container>
  );
}
