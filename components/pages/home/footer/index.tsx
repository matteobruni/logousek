import React from 'react'
import ClickableIcon from '@components/clickable-icon'
import ClickableIconWrapper from '@components/clickable-icon-wrapper'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import * as S from './styled'

const Footer = () => {
  const { tHome, tCommon } = useTranslateFunctions()
  return (
    <S.FooterWrapper>
      <h2>{tCommon("appName")}</h2>
      <S.ClickableIconContainer>
        <ClickableIconWrapper>
          <ClickableIcon icon="facebook" onClick={() => { }} />
          <ClickableIcon icon="instagram" onClick={() => { }} />
          <ClickableIcon icon="tiktok" onClick={() => { }} />
        </ClickableIconWrapper>
      </S.ClickableIconContainer>
      <p>
        Image by
        <a href="https://www.freepik.com/free-vector/flat-design-green-type-trees_18895291.htm#query=tree&position=48&from_view=search&track=sph">
          Freepik
        </a>
      </p>
      <p>{tHome("footer.yearAndAuthor")}</p>
    </S.FooterWrapper>
  )
}

export default Footer
