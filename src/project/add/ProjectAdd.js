import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import SaveIcon from "@mui/icons-material/Save";
import { createDevoProject } from "../../utils";
import { useHistory } from "react-router-dom";

const CustomTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "white",
  },
  "& .MuiInput-root:hover:not(.Mui-disabled):before": {
    borderBottom: "2px solid white",
  },
  "& .MuiInput-input": {
    color: "white",
  },
});

export default function ProjectAdd() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createDevoProject(name, description, "/static/first_project.png");
      clearState();
      history.push("/projects");
    } catch (error) {
      console.log(error);
    }
  };

  const clearState = () => {
    setName("");
    setDescription("");
  };

  return (
    <Box m={2} pt={1}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, md: 2 }}
        >
          <Grid item xs={12}>
            <Typography variant="h4">Add New Project</Typography>
            <Divider color="#2E3B55" />
          </Grid>

          <Grid item xs={12}>
            <CustomTextField
              id="name"
              label="Name"
              variant="standard"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              id="description"
              label="Description"
              variant="standard"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              startIcon={<SaveIcon />}
              variant="contained"
              size="medium"
            >
              Save Project
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
