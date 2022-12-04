import React from "react";
import TimeLineItem from "../time-line-item/time-line-item";
import styled from "./styles.module.css";

const NEWS = [
  {
    desc: "Zahájení prací na aplikaci",
    data: new Date("10.9.2022"),
  },
  {
    desc: "Vydání 1. beta verze aplikace",
    data: new Date("01.30.2022"),
  },
  {
    desc: "Vydání 2. beta verze aplikace",
    data: new Date("01.02.2023"),
  },
  {
    desc: "Ukončení práce na aplikaci",
    data: new Date("30.05.2023"),
  },
];

function TimeLine() {
  return (
    <div className={styled.wrapper}>
      <div className={styled.centerLine}/>
      {NEWS.map((newObj, index) => (
        <TimeLineItem
          isEven={index % 2 === 0}
          desc={newObj.desc}
          date={newObj.data}
          key={`new-${index}`}
        />
      ))}
    </div>
  );
}

export default TimeLine;
