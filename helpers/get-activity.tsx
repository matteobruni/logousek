import React from "react";
import AsActivity from "@components/activities/visual/a_s";
import VisualDifActivity from "@components/activities/visual/visual_differentiation";
import VisualMemoryActivity from "@components/activities/visual/visual_memory";
import AudioDifferentiation from "@components/activities/audio/audio-differentiation";
import Memory from "components/activities/audio/memory";
import ThreeCards from "@components/activities/seriality/three-cards";
import LanguagePracticing from "@components/activities/oromotorics/language-practicing";
import Syllables from "@components/activities/audio/syllables";

export const getActivity = (activityName: string) => {
  switch (activityName) {
    case "a_s":
      return AsActivity;
    case "visual_memory":
      return VisualMemoryActivity;
    case "visual_differentiation":
      return VisualDifActivity;
    case "sound_differentiation":
    case "word_differentiation":
      return AudioDifferentiation;
    case "audio_memory":
      return Memory;
    case "syllables":
      return Syllables;
    case "3_pictures":
      return ThreeCards;
    case "language_practicing":
      return LanguagePracticing
    default:
      return ActivityNotFound;
  }
};

type ActivityNotFoundProps = { complexity: string, tasksElapsed: number, onHandleChanged: () => void }

const ActivityNotFound: React.FC<ActivityNotFoundProps> = () => {
  return <div>Typ Aktivity nebyla nalezena</div>;
};
