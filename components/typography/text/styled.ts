import styled, { css } from "styled-components";
import { Variant } from "./index"

export type TextWrapType = { variant: Variant }

export const T1Styles = css`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.lg};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.xxl};
  line-height: ${({ theme }) => theme.typography.lineHeight.xxl};
`

export const T2Styles = css`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.lg};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.xl};
`

export const T3Styles = css`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.lg};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.lg};
`

export const T4Styles = css`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.lg};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.xxl};
  line-height: ${({ theme }) => theme.typography.lineHeight.xxl};
`

export const T5Styles = css`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.md};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.md};
`

export const T6Styles = css`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.sm};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};
`

export const T7Styles = css`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.sm};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.xs};
`


export const TextWrap = styled.span<TextWrapType>`
  ${({ variant }) => {
    switch (variant) {
      case "T1":
        return T1Styles
      case "T2":
        return T2Styles
      case "T3":
        return T3Styles
      case "T4":
        return T4Styles
      case "T5":
        return T5Styles
      case "T6":
        return T6Styles
      case "T7":
        return T7Styles
    }


  }}

`
