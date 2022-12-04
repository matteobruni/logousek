import React from 'react'
import styled from "styled-components";


export default function ButtonRow({children}) {
  return (
    <ButtonRowWrapper>{children}</ButtonRowWrapper>
  )
}


const ButtonRowWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    &>* {
        margin: 0.5rem;
    }
`;