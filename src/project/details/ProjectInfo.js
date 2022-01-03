import { Avatar, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getDevoProject } from "../../utils";

export default function ProjectInfo({ projectId }) {
  const [devoProject, setDevoProject] = useState([]);

  useEffect(() => {
    const init = async () => {
      const devoProject = await getDevoProject(projectId);
      setDevoProject(devoProject);
    };
    init();
  }, [projectId]);

  return (
    <Grid container direction="row" alignItems="center">
      <Grid item lg={1} ml='15px'>
        <Avatar
          alt={devoProject.name}
          src={devoProject.logoURI}
          sx={{ width: 75, height: 75 }}
          
        />
      </Grid>
      <Grid item lg={9}>
        <Typography variant="h3" color="white" align="left">
          {devoProject.name}
        </Typography>
      </Grid>
    </Grid>
    
  );
}
