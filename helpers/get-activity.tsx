import React from "react";
import ASActivity from "../components/activities/visual/a_s";
import VisualDifActivity from "../components/activities/visual/visual_differentiation";
import VisualMemoryActivity from "../components/activities/visual/visual_memory";
import AudioDifferentiation from "../components/activities/audio/audio-differentiation";
import Memory from "components/activities/audio/memory";

export const getActivity = (activityName: string) => {
  switch (activityName) {
    case "a_s":
      return ASActivity;
    case "visual_memory":
      return VisualMemoryActivity;
    case "visual_differentiation":
      return VisualDifActivity;
    case "sound_differentiation":
    case "word_differentiation":
      return AudioDifferentiation;
    case "audio_memory":
      return Memory;
    default:
      return ActivityNotFound;
  }
};

type ActivityNotFoundProps = { complexity: string, tasksElapsed: number, onHandleChanged: () => void }

const ActivityNotFound: React.FC<ActivityNotFoundProps> = () => {
  return <div>Typ Aktivity nebyla nalezena</div>;
};
