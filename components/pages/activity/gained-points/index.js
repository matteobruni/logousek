import React from "react";
import styled, { keyframes } from "styled-components";

export default function GainedPoints({ pointsForTask, correctTasks }) {
  return (
    <GainedPointsWrapper
      key={`gained-point-wrapper-${correctTasks}`}
      animate={Boolean(correctTasks)}
      dataContent={pointsForTask}
    >
      <i className={`material-icons`}>payments</i>
      <p>{pointsForTask * correctTasks}</p>
    </GainedPointsWrapper>
  );
}

const pointsAddedAnim = keyframes`
     from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateY(-7rem) scale(3);
    }
`;

const GainedPointsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    padding: 0.2rem;
  }

  &::before {
    content: ${({ dataContent, animate }) =>
      `"${animate ? `+${dataContent}` : ""}"`};
    position: absolute;
    font-weight: 700;
    color: green;
    animation: ${({ animate }) => (animate ? pointsAddedAnim : "none")} 2s
      forwards;
    transform: translateY(-0.5rem);
  }
`;
