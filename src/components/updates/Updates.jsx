import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import React from "react";

export default function Updates() {
  return (
    <div className="max-w-xl mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent>Feb 2023</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Graduated from Fullstack Academy Bootcamp
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>March 2023</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Began volunteering with{" "}
            <a href="https://techtonica.org/">techtonica</a> and{" "}
            <a href="https://www.womenwhocode.com/">wwc</a>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>May 2023</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Attended my first{" "}
            <a href="https://organize.mlh.io/participants/events/9237-techtogether-new-york">
              hackathon
            </a>{" "}
            and wrote an{" "}
            <a href="https://medium.com/@rosalienewman0/my-first-hackathon-a-bootcamp-grads-pov-d0595c351bfc">
              article
            </a>{" "}
            about it.
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>June 2023</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Accepted a Software Engineering Summer Internship at{" "}
            <a href="https://www.moneylion.com/">MoneyLion</a>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
