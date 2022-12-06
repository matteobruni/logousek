import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import AsContext from "../../../contexts/as-context";
import AvaibleCards from "./avaible-cards";
import DropCards from "./drop-cards";
import { CustomDragLayer } from "./custom-drag-layer";
import AsContextProvider from "./as-context-provider";

export default forwardRef(function AS(
  { complexity, tasksElapsed, onResetChanged, onHandleChanged },
  ref
) {
  const [cardCount] = useState(
    complexity === "1" ? 2 : complexity === "2" ? 4 : 6
  );
  const contextProviderRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getResult: contextProviderRef.current.checkResult,
    generateNext: () => {
    },
  }));

  return (
    <div>
      <AsContextProvider
        ref={contextProviderRef}
        count={cardCount}
        onHandleChanged={onHandleChanged}
      >
        <CustomDragLayer />
        <DropCards />
        <AvaibleCards />
      </AsContextProvider>
    </div>
  );
});
