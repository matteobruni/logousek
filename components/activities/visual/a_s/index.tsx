import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'

import AsContextProvider from '@contexts/as-context/as-context-provider'
import { ActivityInterface } from '@components/pages/activity'
import { AsContextProviderInterface } from '@contexts/as-context/as-context-provider'
import { ActivityProps } from '@components/pages/activity'
import { P5 } from '@components/typography/paragraph'

import AvaibleCards from './avaible-cards'
import DropCards from './drop-cards'
import CustomDragLayer from './custom-drag-layer'

const AS = (
  { complexity, onHandleChanged }: ActivityProps,
  ref: React.Ref<ActivityInterface> | undefined
) => {
  const [cardCount] = useState(
    complexity === '1' ? 2 : complexity === '2' ? 4 : 6
  )
  const contextProviderRef = useRef<AsContextProviderInterface>(null)

  useImperativeHandle(
    ref,
    (): ActivityInterface => ({
      getResult: contextProviderRef?.current?.checkResult || (() => false),
      generateNext: () => { },
    })
  )

  return (
    <div>
      <AsContextProvider
        ref={contextProviderRef}
        count={cardCount}
        onHandleChanged={onHandleChanged}
      >
        <P5 align="center" type="ghost">Slož obrázek</P5>
        <CustomDragLayer />
        <DropCards />
        <AvaibleCards />
      </AsContextProvider>
    </div>
  )
}

export default forwardRef(AS)
