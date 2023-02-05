import React, {
    useState,
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
import SortableList from '../sortable-list'


export interface Item {
    id: number
    text: string
}

const ThreeCards = (
    { complexity, onHandleChanged }: ActivityProps,
    ref: React.Ref<ActivityInterface> | undefined
) => {
    const contextProviderRef = useRef<SerialityContextProviderInterface>(null)

    useImperativeHandle(
        ref,
        (): ActivityInterface => ({
            getResult: contextProviderRef?.current?.checkResult || (() => false),
            generateNext: () => { },
        })
    )

    useEffect(() => {
        onHandleChanged()
    }, [onHandleChanged])

    const _onHandleChanged = () => { }

    return (
        <SerialityContextProvider
            ref={contextProviderRef}
            count={3}
            onHandleChanged={onHandleChanged}
        >
            <SortableList count={3} onHandleChanged={_onHandleChanged} />

        </SerialityContextProvider>
    )
}

export default forwardRef(ThreeCards)
