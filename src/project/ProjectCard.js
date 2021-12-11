import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProjectCard({ name, logoUrl, description }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 345,
        backgroundColor: "#153155",
      }}
      variant="outlined"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={logoUrl}
          alt="first_project"
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
