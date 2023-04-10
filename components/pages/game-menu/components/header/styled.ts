import styled from 'styled-components'
import { devices } from '@constants/screens-conf'

export const DarkModeSwitchWrapper = styled.div`
  display: none;
  align-items: center;
  margin: 0px 0.3rem;
  @media ${devices.mobileL} {
    display: flex;
  }
`

export const CashContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.i`
  padding: 0px 7px;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: ${({ theme }) => theme.radius.secondary};
  background-color: #444444;
`

export const UserName = styled.div`
  display: none;
  @media ${devices.mobileL} {
    display: block;
  }
`

export const CashWrapper = styled.span`
  display: flex;
  justify-content: center;
`
