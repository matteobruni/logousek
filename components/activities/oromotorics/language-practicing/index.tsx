import React, {
    forwardRef,
    useImperativeHandle,
    useEffect,
    useRef,
} from 'react'
import { ActivityInterface, ActivityProps } from '@components/pages/activity'
import { videosArray } from 'constants/language-practicing-conf'

import * as S from './styled'

const LanguagePracticing = (
    { onHandleChanged, currentTask }: ActivityProps,
    ref: React.Ref<ActivityInterface> | undefined
) => {
    const videoEl = useRef<any>(null)
    useImperativeHandle(
        ref,
        (): ActivityInterface => ({
            getResult: () => true,
            generateNext: () => { },
        })
    )

    useEffect(() => {
        onHandleChanged()
    }, [onHandleChanged])

    const handleLoadedMetadata = () => {
        const video = videoEl.current
        if (!video) return
    }

    const video = videosArray[currentTask]

    return (
        <div>
            <S.StyledVideo
                ref={videoEl}
                autoPlay
                loop
                onLoadedMetadata={handleLoadedMetadata}
            >
                <source src={`/videos/oromotorics/${video}.mp4`} />
            </S.StyledVideo>
        </div>
    )
}

export default forwardRef(LanguagePracticing)
