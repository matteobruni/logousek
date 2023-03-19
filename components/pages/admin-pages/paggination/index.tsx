import React, { useState } from 'react'
import { Collapse } from 'antd'

import { ScoreListType } from '..'
import * as S from './styled'
const { Panel } = Collapse

type PagginationType = {
    maxIndexes: number
    onLinkClick: (index: number) => void
}

const Paggination: React.FC<PagginationType> = ({
    maxIndexes,
    onLinkClick,
}) => {
    const getLinks = () => {
        const linkArray = []
        for (let i = 0; i < maxIndexes; i++) {
            linkArray.push(
                <S.Link onClick={() => onLinkClick(i)} key={i}>
                    {i}
                </S.Link>
            )
        }

        return linkArray
    }

    return <S.LinksWrapper>{getLinks()}</S.LinksWrapper>
}

export default Paggination
