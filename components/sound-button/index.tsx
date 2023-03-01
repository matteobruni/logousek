import React, { useState, useEffect, useCallback } from "react";
import ClickableIcon from "@components/clickable-icon";

type SoundButtonProps = { sound: string; fontSize: string, customSound?: HTMLAudioElement };
const SoundButton: React.FC<SoundButtonProps> = ({ sound, fontSize, customSound }) => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();

  const getSound = useCallback(() => {
    return customSound || audio
  }, [audio, customSound])

  useEffect(() => {
    setAudio(new Audio(sound))
  }, [sound])

  useEffect(() => {
    const sound = getSound();
    sound && (sound.loop = true);

    return () => {
      sound && sound.pause()
    }
  }, [getSound]);

  const playAudio = () => {
    setIsPlayed(true);
    const sound = getSound();
    try {
      sound && sound.play();
    } catch (e) {
      console.error(e);
    }
  };

  const stopAudio = () => {
    const sound = getSound();
    setIsPlayed(false);
    sound && sound.pause();
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
