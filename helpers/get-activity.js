import { forwardRef } from "react";
import ASActivity from "../components/activities/a_s";
import VisualDifActivity from "../components/activities/visual_differentiation";
import VisualMemoryActivity from "../components/activities/visual_memory";

export const getActivity = (activityName) => {
  ;
  switch (activityName) {
    case "a_s":
      return ASActivity;
    case "visual_memory":
      return VisualMemoryActivity;
    case "visual_differentiation":
      return VisualDifActivity;
    default:
      return forwardRef(ActivityNotFound);
  }
};

const ActivityNotFound = () => {
  return <div>Typ Aktivity nebyla nalezena</div>;
};
