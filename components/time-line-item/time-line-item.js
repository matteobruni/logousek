import React from "react";
import styled from "./styles.module.css";
import { getFormatedDate } from "../../helpers/date-helper"; 

function TimeLineItem({isEven, desc, date}) {
  return (
      <article className={[styled.timeLineItemWrapper, isEven ? styled.leftNew : styled.rightNew].join(" ")}>
        <div className={styled.container}> 
          <div className={styled.beak} /> 
          <div className={styled.content }>
            {date && <span className={styled.date}>{getFormatedDate(date)}</span>}
            <p className={styled.desc}>{desc}</p>
          </div>
        </div>
      </article>
  );
}

export default TimeLineItem;
