import React, {
    useState,
    forwardRef,
    useRef,
    useImperativeHandle,
} from 'react'
// import AvaibleCards from './avaible-cards'
// import DropCards from './drop-cards'
import CustomDragLayer from './custom-drag-layer'
import SerialityContextProvider, {
    SerialityContextProviderInterface,
} from '@contexts/seriality-context/seriality-context-provider'
import { ActivityInterface } from '@components/pages/activity'
import { ActivityProps } from '@components/pages/activity'
import CardList from './card-list'

export interface Item {
    id: number
    text: string
}

const SortableList: React.FC<{ count: number, onHandleChanged: () => void }> = (
    { onHandleChanged }
) => {

    const contextProviderRef = useRef<SerialityContextProviderInterface>(null)

    return (
        <div>
            {/*
                <DropCards />
                <AvaibleCards /> */}
            <CardList />
            <CustomDragLayer />
        </div>
    )
}

export default SortableList
