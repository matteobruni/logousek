import React, {
    forwardRef,
    useImperativeHandle,
    useEffect,
    useRef,
    useState
} from 'react'
import { ActivityInterface, ActivityProps } from '@components/pages/activity'
import { videosArray } from 'constants/language-practicing-conf'

import * as S from './styled'
import { shuffle } from '@helpers/array-helper'


const LanguagePracticing = (
    { checkResult }: ActivityProps,
    ref: React.Ref<ActivityInterface> | undefined
) => {
    const videoEl = useRef<any>(null);
    const [time, setTime] = useState<number | undefined>();
    useImperativeHandle(
        ref,
        (): ActivityInterface => ({
            getResult: () => true,
            generateNext: () => { },
        })
    )

    useEffect(() => {
        if (time) {
            const timer = setTimeout(() => { checkResult() }, time);
            return () => clearTimeout(timer);
        }
    }, [checkResult, time]);

    const handleLoadedMetadata = () => {
        const video = videoEl.current;
        if (!video) return;
        setTime(video.duration * 1000)
    };

    const [video] = shuffle(videosArray)

    return (<div>
        <S.StyledVideo ref={videoEl} autoPlay loop onLoadedMetadata={handleLoadedMetadata}>
            <source src={`/videos/oromotorics/${video}.mp4`} />
        </S.StyledVideo>
    </div>
    )
}

export default forwardRef(LanguagePracticing)
