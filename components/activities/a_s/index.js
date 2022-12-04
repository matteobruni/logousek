import React, {useState} from "react";
import ActivityCard from "../activity-card";
import DropCard from "./drop-card";

import { useMultiDrag } from 'react-dnd-multi-backend'
import AvaibleCards from "./avaible-cards";
import DropCards from "./drop-cards";
import { CustomDragLayer } from "./custom-drag-layer";
import AsContextProvider from "./as-context-provider";

const AS = (props) => {
  const [cardCount, setCardCount] = useState(4);


  return (
    <div>
      <AsContextProvider count={cardCount}>
      <CustomDragLayer />
      {/* <DragCard />
      <DragCard />
      <DragCard /> */}
      {/* <DropCard />
      <DropCard />
      <DropCard /> */}
      <DropCards />
      <AvaibleCards />
      </AsContextProvider>
    </div>
  )
}

export default AS