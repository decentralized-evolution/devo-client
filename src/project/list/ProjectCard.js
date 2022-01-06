import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Link as RouterLink } from "react-router-dom";

export default function ProjectCard({
  id,
  name,
  logoUrl,
  description,
  isAddCard,
}) {
  let cardContent;

  if (isAddCard) {
    cardContent = (
      <CardActionArea component={RouterLink} to={"/projects/#"}>
        <CardContent sx={{height: 352}}>
        <AddCircleIcon
          sx={{fontSize: 100, marginTop:10}}
          variant="outlined"
        />
          <Typography variant="h4" component="div" color="white">
            Add Project
          </Typography>
          <Typography variant="body2" color="white">
            &nbsp;
          </Typography>
        </CardContent>
      </CardActionArea>
    );
  } else {
    cardContent = (
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
    );
  }

  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 345,
        backgroundColor: "#153155",
        ...(isAddCard && {
          backgroundColor: "rgba(21, 49, 85, 0)",
          borderStyle: "dashed",
          borderColor: "white",
          borderWidth: 1,
        }),
      }}
      variant="outlined"
    >
      {cardContent}
    </Card>
  );
}
