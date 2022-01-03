import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";

export default function ProjectPullRequests() {
  return (
    <Timeline position="right" sx={{ paddingLeft: 0 }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", paddingLeft: 0, flexGrow: 0.8 }}
          align="right"
          variant="body2"
          color="gray"
        >
          14:05 Today
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "30px", px: 2, flexGrow: 8 }}>
          Integrate GitHub API
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", paddingLeft: 0, flexGrow: 0.8 }}
          align="right"
          variant="body2"
          color="gray"
        >
          09:52 Today
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "30px", px: 2, flexGrow: 8 }}>
          Fix typo on project description
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", paddingLeft: 0, flexGrow: 0.8 }}
          align="right"
          variant="body2"
          color="gray"
        >
          03 Jan. 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "30px", px: 2, flexGrow: 8 }}>
          Add improvements on fetching project details
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", paddingLeft: 0, flexGrow: 0.8 }}
          align="right"
          variant="body2"
          color="gray"
        >
          21 Dec. 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "30px", px: 2, flexGrow: 8 }}>
          Implement view for projects
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", paddingLeft: 0, flexGrow: 0.8 }}
          align="right"
          variant="body2"
          color="gray"
        >
          01 Dec. 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "30px", px: 2, flexGrow: 8 }}>
          Initial pull request
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
