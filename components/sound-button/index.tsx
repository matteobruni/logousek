import React, { useState, useEffect } from "react";
import ClickableIcon from "@components/clickable-icon";

type SoundButtonProps = { sound: string; fontSize: number };

const SoundButton: React.FC<SoundButtonProps> = ({ sound, fontSize }) => {
  const [audio] = useState(new Audio(sound));
  const [isPlayed, setIsPlayed] = useState(false);

  useEffect(() => {
    audio.loop = true;
  }, [audio]);

  const playAudio = () => {
    setIsPlayed(true);
    audio.play();
  };

  const stopAudio = () => {
    setIsPlayed(false);
    audio.pause();
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
