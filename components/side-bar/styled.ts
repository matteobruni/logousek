import styled from 'styled-components'
import { devices } from '../../constants/screens-conf'

type SidebarItemsWrapperProps = { isMenuShow: boolean }
type SidebarWrapperProps = { isMenuShow: boolean }

export const SidebarItemsWrapper = styled.div<SidebarItemsWrapperProps>`
  top: 0px;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.primary};
  transition-duration: 0.5s;
  height: 100vh;
  overflow: hidden;
  z-index: 998;
  overflow: auto;
  width: ${({ isMenuShow }) => (isMenuShow ? '100vw' : '0px')};

  & > * {
    width: 100vw;
    padding: 0rem 10% 5rem 10%;
  }

  & h4 {
    transition-duration: 0.5s;
    opacity: ${({ isMenuShow }) => (isMenuShow ? '1' : '0')};
  }

  @media ${devices.laptop} {
    flex-direction: row;
    width: 50vw;
    padding: 0%;
    z-index: 1;

    &:hover {
      background-color: ${({ theme }) => theme.colors.eighty};
      padding: 0px 3rem;
    }

    & > * {
      width: auto;
      padding: 0px;
    }
  }
`

export const SidebarWrapper = styled.nav<SidebarWrapperProps>`
  position: relative;
  transition-duration: 1s;
  width: auto;
  @media ${devices.laptop} {
    min-width: ${({ isMenuShow }) => (isMenuShow ? '50vw' : '4rem')};
    height: auto;
  }
`

export const Navigation = styled.div`
  flex: 1;
  text-align: center;
`

export const ApplicationNavigation = styled.div`
  @media ${devices.laptop} {
    flex: 1;

    & > h4 {
      padding-left: 40px;
      text-align: center;
    }
  }
`

export const RoundFooterWrapper = styled.div`
  @media ${devices.laptop} {
    display: none;
  }
`