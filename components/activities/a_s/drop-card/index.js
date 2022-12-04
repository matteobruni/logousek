import React, { useContext, useState } from "react";
import { useMultiDrop } from "react-dnd-multi-backend";
import ActivityCard from "../../activity-card";
import { ThemeContext } from "styled-components";
import DragCard from "../drag-card";
// const DropCard = (props) => {
//     const [[dropProps], {html5: [html5DropStyle, html5Drop], touch: [touchDropStyle, touchDrop]}] = useMultiDrop({
//       accept: 'card',
//       drop: (item) => {
//         
//       },
//       collect: (monitor) => {

//         
//         return {
//           isOver: monitor.isOver(),
//           canDrop: monitor.canDrop(),
//         }
//       },
//     })
//     
//     const containerStyle = {border: '1px dashed black'}
//     // const html5DropStyle = {backgroundColor: (html5Props.isOver && html5Props.canDrop) ? '#f3f3f3' : '#bbbbbb'}
//     // const touchDropStyle = {backgroundColor: (touchProps.isOver && touchProps.canDrop) ? '#f3f3f3' : '#bbbbbb'}
//     return (
//       <div style={containerStyle}>
//         <div style={html5DropStyle} ref={html5Drop}>HTML5</div>
//         <div style={touchDropStyle} ref={touchDrop}>Touch</div>
//       </div>
//     )
//   }
//   export default DropCard

import { useDrop } from "react-dnd";

function DropCard({onDrop, children}) {
  const themeContext = useContext(ThemeContext);
  const [collectedProps, drop] = useDrop(() => ({
    accept: ["image"],
    drop: (item) => {
      onDrop(item)
    },
  }));
  return (
    <div ref={drop}>
      <ActivityCard
        color={themeContext?.colors?.lightGrey}
        customRadius={"0px"}
      >
        {children}
      </ActivityCard>
    </div>
  );
}

export default DropCard;
