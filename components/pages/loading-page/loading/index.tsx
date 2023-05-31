import { useEffect, useState, useMemo } from "react"

import { P3 } from '@components/typography/paragraph'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import { getEmptyArray } from "@helpers/array-helper"

import * as S from './styled'

const Loading: React.FC = () => {
    const { tCommon } = useTranslateFunctions()
    const [textDotsCount, setTextDotsCount] = useState(3);


    useEffect(() => {
        const interval = setInterval(() => {
            setTextDotsCount(prevValue => {
                if (prevValue === 3) {
                    return 0;
                }
                return prevValue + 1
            });
        }, 700);
        return () => clearInterval(interval);
    }, []);

    const loadingAnimationParts = useMemo(() => getEmptyArray(4).map((_, index) => <S.LoadingAnimationPart key={`animation_part_${index}`} index={index} />), [])

    return (
        <S.LoadingWrapper>
            <S.LoadingAnimation>
                {loadingAnimationParts}
            </S.LoadingAnimation>
            <P3 style={{ width: "120px", paddingLeft: "12px" }} type="ghost">{`${tCommon("loading")}${getEmptyArray(textDotsCount).map(() => ".").join("")}`}</P3>
        </S.LoadingWrapper >
    )
}

export default Loading
