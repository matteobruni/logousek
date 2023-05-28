import styled from 'styled-components'
import { devices } from '../../constants/screens-conf'

type SidebarItemsWrapperProps = { isMenuShow: boolean }
type SidebarWrapperProps = { isMenuShow: boolean }

export const SidebarWrapper = styled.nav<SidebarWrapperProps>`
  position: relative;
  transition-duration: 1s;
  width: auto;
  @media ${devices.laptop} {
    min-width: ${({ isMenuShow }) => (isMenuShow ? '50vw' : '4rem')};
    height: auto;
  }
`

export const SidebarItemsWrapper = styled.div<SidebarItemsWrapperProps>`
  top: 0px;
  display: flex;
  flex-direction: column;
  position: fixed;
  flex-wrap: wrap;
  transition-duration: 0.5s;
  min-height: 100vh;
  overflow: hidden;
  z-index: ${({ theme }) => {
    return theme.zIndex.xxl
  }};
  overflow: auto;
  width: ${({ isMenuShow }) => (isMenuShow ? '100vw' : '0px')};
  background: ${({ theme }) => theme.colors.eighty};
  z-index: ${({ theme }) => theme.zIndex.xxl};

  & h4 {
    transition-duration: 0.5s;
    opacity: ${({ isMenuShow }) => (isMenuShow ? '1' : '0')};
    color: ${({ theme }) => theme.colors.ninghty};
  }

  @media ${devices.laptop} {
    max-width: 50vw;
    height: 100vh;
    flex-direction: row;
    width: 50vw;
    padding: 0;
    z-index: 1;
    background: ${({ theme }) => theme.colors.darkGreen};

    &:hover {
      background-color: ${({ theme }) => theme.colors.eighty};
      padding: 0px 3rem;
    }

    & > * {
      width: auto;
      padding: 0px;
    }


    & h4 {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

export const MobileDarkModeSwitchWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 4px;

  @media ${devices.laptop} {
    display: none;
  }
`

export const RoundFooterWrapper = styled.div`
  @media ${devices.laptop} {
    display: none;
  }
`