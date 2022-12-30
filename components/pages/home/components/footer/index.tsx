import React from 'react'
import ClickableIcon from '@components/clickable-icon'
import ClickableIconWrapper from '@components/clickable-icon-wrapper'
import { FooterWrapper, ClickableIconContainer } from './styled'

const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Logousek</h2>
      <ClickableIconContainer>
        <ClickableIconWrapper>
          <ClickableIcon icon="facebook" onClick={() => { }} />
          <ClickableIcon icon="instagram" onClick={() => { }} />
          <ClickableIcon icon="tiktok" onClick={() => { }} />
        </ClickableIconWrapper>
      </ClickableIconContainer>
      <p>
        Image by
        <a href="https://www.freepik.com/free-vector/flat-design-green-type-trees_18895291.htm#query=tree&position=48&from_view=search&track=sph">
          Freepik
        </a>
      </p>
      <p>2022 | Created By Petr Holčák</p>
    </FooterWrapper>
  )
}

export default Footer
