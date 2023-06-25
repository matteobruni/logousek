import React from 'react'
import { DndContextValueType } from './dnd-context-provider'

export default React.createContext<DndContextValueType | null>(null)
