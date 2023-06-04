import styled from 'styled-components'

export const LoginModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginModalForm = styled.form`
  & > * {
    width: 100%;
  margin-top: 1rem;
  }
  & > button {
    width: auto;
  }
`

export const CustomInput = styled.input`
  height: 1.7rem;
  width: 100%;
  padding: 1rem 1.5rem;
  margin: 0.4rem 0;
  border: 1px solid ${({ theme }) => theme.colors.seventy};
  border-radius: ${({ theme }) => theme.radius.primary};
  box-sizing: border-box;

  &:focus {
        outline: none !important;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
  }
`

export const LabelWithInput = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

export const CustomLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0rem 0.4rem;
  border-top-left-radius: ${({ theme }) => theme.radius.primary};
  border-bottom-left-radius: ${({ theme }) => theme.radius.primary};
  font-size: 1.1rem;
`
