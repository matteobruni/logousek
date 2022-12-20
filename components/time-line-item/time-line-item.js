import React from 'react'
import styled from './styles.module.css'
import { getFormatedDate } from '../../helpers/date-helper'
import FadeRight from '../animations/fade-right'
import FadeLeft from '../animations/fade-left'

function TimeLineItem ({ isEven, desc, date }) {
  const UsedAnimationWrapper = isEven ? FadeRight : FadeLeft
  return (
    <UsedAnimationWrapper>
      <article className={[styled.timeLineItemWrapper, isEven ? styled.leftNew : styled.rightNew].join(' ')}>
        <div className={styled.container}>
          <div className={styled.beak} />
          <div className={styled.content }>
            {date && <span className={styled.date}>{getFormatedDate(date)}</span>}
            <p className={styled.desc}>{desc}</p>
          </div>
        </div>
      </article>
      </UsedAnimationWrapper>
  )
}

export default TimeLineItem
