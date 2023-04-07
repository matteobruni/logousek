import styled from 'styled-components'
import {
  TextWrapType,
  T1Styles,
  T2Styles,
  T3Styles,
  T4Styles,
  T5Styles,
  T6Styles,
} from '../text/styled'

export const H1 = styled.h1<TextWrapType>`
  ${T1Styles};
`

export const H2 = styled.h2<TextWrapType>`
  ${T2Styles};
`

export const H3 = styled.h3<TextWrapType>`
  ${T3Styles};
`

export const P4 = styled.h4<TextWrapType>`
  ${T4Styles};
`

export const H5 = styled.h5<TextWrapType>`
  ${T5Styles}
`

export const H6 = styled.h6<TextWrapType>`
  ${T6Styles};
`
