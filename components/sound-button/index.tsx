import React, { useState, useEffect, useCallback } from "react";
import ClickableIcon from "@components/clickable-icon";

type SoundButtonProps = { sound: string; fontSize: string, customSound?: HTMLAudioElement };
const SoundButton: React.FC<SoundButtonProps> = ({ sound, fontSize, customSound }) => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [audio] = useState(new Audio(sound));

  const getSound = useCallback(() => {
    return customSound || audio
  }, [audio, customSound])

  useEffect(() => {
    getSound().loop = true;
    return () => {
      getSound().pause()
    }
  }, [getSound]);

  const playAudio = () => {
    setIsPlayed(true);
    try {
      getSound().play();
    } catch (e) {
      console.error(e);
    }
  };

  const stopAudio = () => {
    setIsPlayed(false);
    getSound().pause();
  };
  return (
    <div>
      {isPlayed ? (
        <ClickableIcon
          fontSize={fontSize}
          onClick={stopAudio}
          icon="pause_circle_outline"
        />
      ) : (
        <ClickableIcon
          fontSize={fontSize}
          onClick={playAudio}
          icon="play_circle_outline"
        />
      )}
    </div>
  );
};

export default SoundButton;
