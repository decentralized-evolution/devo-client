import { Box, Container, Tab } from "@mui/material";
import ProjectInfo from "./ProjectInfo";
import { useParams } from "react-router-dom";
import ProjectPullRequests from "./ProjectPullRequests";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";

export default function ProjectDetails() {
  let { projectId } = useParams();

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ mt: 2 }}>
      <ProjectInfo projectId={projectId} />

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "#153155" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              textColor="white"
              indicatorColor="primary"
              inkBarStyle={{ background: "white" }}
            >
              <Tab label="Pull Requests" value="1" />
              <Tab label="About" value="3" />
              <Tab label="Members" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1" sx={{ paddingLeft: 0 }}>
            <ProjectPullRequests projectId={projectId} />
          </TabPanel>

          <TabPanel value="2">Members</TabPanel>

          <TabPanel value="3">About</TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}
