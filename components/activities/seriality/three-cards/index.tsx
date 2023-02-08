import React, {
    forwardRef,
    useRef,
    useImperativeHandle,
    useEffect
} from 'react'
import SerialityContextProvider, {
    SerialityContextProviderInterface,
} from '@contexts/seriality-context/seriality-context-provider'
import { ActivityInterface } from '@components/pages/activity'
import { ActivityProps } from '@components/pages/activity'
import ThreeCardContent from "./tree-card-content"


export interface Item {
    id: number
    text: string
}

const ThreeCards = (
    { complexity, onHandleChanged }: ActivityProps,
    ref: React.Ref<ActivityInterface> | undefined
) => {
    const serialityContextProviderRef = useRef<SerialityContextProviderInterface>(null)

    useImperativeHandle(
        ref,
        (): ActivityInterface => ({
            getResult: serialityContextProviderRef?.current?.checkResult || (() => false),
            generateNext: () => { },
        })
    )

    useEffect(() => {
        onHandleChanged()
    }, [onHandleChanged])


    return (
        <SerialityContextProvider
            ref={serialityContextProviderRef}
            type={"threePictures"}
        >
            <ThreeCardContent />
        </SerialityContextProvider>
    )
}

export default forwardRef(ThreeCards)
