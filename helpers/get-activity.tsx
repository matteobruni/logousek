import React from "react";
import ASActivity from "../components/activities/a_s";
import VisualDifActivity from "../components/activities/visual_differentiation";
import VisualMemoryActivity from "../components/activities/visual_memory";
import AudioDifferentiation from "../components/activities/audio/audio-differentiation";

export const getActivity = (activityName: string) => {
  switch (activityName) {
    case "a_s":
      return ASActivity;
    case "visual_memory":
      return VisualMemoryActivity;
    case "visual_differentiation":
      return VisualDifActivity;
    case "audio_differentiation":
      return AudioDifferentiation;
    default:
      return ActivityNotFound;
  }
};

type ActivityNotFoundProps = { complexity: string, tasksElapsed: number, onHandleChanged: () => void }

const ActivityNotFound: React.FC<ActivityNotFoundProps> = () => {
  return <div>Typ Aktivity nebyla nalezena</div>;
};
