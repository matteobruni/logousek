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
import SortableList from '../../sortable-list'


export interface Item {
    id: number
    text: string
}

const ThreeCards = (

) => {



    return (
        <SortableList count={3} onHandleChanged={() => { }} />
    )
}

export default forwardRef(ThreeCards)
