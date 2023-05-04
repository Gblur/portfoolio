import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Techstack from "../Techstack";
import useStore from "../../../../../store";

const data = {
  tiplu: ["Typescript", "React", "ASP.net"],
  gimmick: ["Typescript", "Wordpress", "Node.js"],
  marktplatz: ["React", "Javascript", "Content XXL"],
};

export default function OppositeContentTimeline() {
  const {isDarkMode} = useStore();

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          06/2022 - 11/2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Tiplu GmbH
          <br />
          Frontend React Developer
          <Techstack isDarkMode={isDarkMode} company={data.tiplu} />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          03/2021 - 06/2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Gimmickmedia Frontend <br /> Developer / Game designer
          <Techstack isDarkMode={isDarkMode} company={data.gimmick} />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          08/2020 - 12/2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Marktplatz GmbH
          <br />
          Frontend React developer
          <Techstack isDarkMode={isDarkMode} company={data.marktplatz} />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
