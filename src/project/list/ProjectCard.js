import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

export default function ProjectCard({ id, name, logoUrl, description }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 345,
        backgroundColor: "#153155",
      }}
      variant="outlined"
    >
      <CardActionArea component={RouterLink} to={"/projects/".concat(id)}>
        <CardMedia
          component="img"
          height="300"
          image={logoUrl}
          alt="project logo"
        />

        <CardContent>
          <Typography variant="h5" component="div" color="white">
            {name}
          </Typography>
          <Typography variant="body2" color="white">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
