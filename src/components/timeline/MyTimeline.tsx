import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { HiOutlineFlag } from "react-icons/hi";
import { Element } from "react-scroll";

export default function MyTimeline() {
  return (
    <Element name="timeline">
      <div className="max-w-3xl mx-auto text-emerald-900 dark:text-emerald-50 pb-16">
        <div className="flex flex-col items-center p-4 pb-10 gap-1">
          <HiOutlineFlag className="text-6xl" />
          <h2 className="text-4xl font-frag font-bold">Timeline</h2>
        </div>
        <div
          className="border-solid border-2 rounded-lg shadow-md py-4
      border-amber-300 dark:border-none
      bg-white/75 dark:bg-stone-800"
        >
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.4,
              },
            }}
          >
            <TimelineItem>
              <TimelineOppositeContent>
                <p className="italic">Feb 2023</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="warning" />

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Graduated from{" "}
                <a
                  className="underline underline-offset-2"
                  href="https://www.fullstackacademy.com/"
                  target="_blank"
                >
                  Fullstack Academy Bootcamp
                </a>
                .
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <p className="italic">March 2023</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Began volunteering with{" "}
                <a
                  className="underline underline-offset-2"
                  href="https://www.womenwhocode.com/"
                  target="_blank"
                >
                  Women Who Code
                </a>{" "}
                and{" "}
                <a
                  className="underline underline-offset-2"
                  href="https://techtonica.org/"
                  target="_blank"
                >
                  techtonica
                </a>
                .
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <p className="italic">May 2023</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Attended my first hackathon and wrote an{" "}
                <a
                  className="underline underline-offset-2"
                  href="https://medium.com/@rosalienewman0/my-first-hackathon-a-bootcamp-grads-pov-d0595c351bfc"
                  target="_blank"
                >
                  article
                </a>{" "}
                about it.
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <p className="italic">June 2023</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="warning" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Accepted a Software Engineering Summer Internship at{" "}
                <a
                  className="underline underline-offset-2"
                  href="https://www.moneylion.com/"
                  target="_blank"
                >
                  MoneyLion
                </a>
                .
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <p className="italic">Aug 2023</p>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="warning" />
              </TimelineSeparator>
              <TimelineContent>
                Started as a Quality Assurance Engineer I at{" "}
                <a
                  className="underline underline-offset-2"
                  href="https://www.qawolf.com/"
                  target="_blank"
                >
                  QA Wolf
                </a>
                .
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </Element>
  );
}
