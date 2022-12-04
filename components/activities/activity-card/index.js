import React from "react";
import { ActivityCardWrapper } from "./styled";

function ActivityCard({ children, onClick, selected, rotate, color, customRadius }) {
  return (
    <ActivityCardWrapper onClick={onClick} selected={selected} rotate={rotate} color={color} customRadius={customRadius}>{children}</ActivityCardWrapper>
  );
}

export default ActivityCard;
