import styled from 'styled-components'
import { DatePicker, Col } from 'antd';

import { devices } from 'constants/screens-conf'

const { RangePicker } = DatePicker;

export const WelcomeRowWrapper = styled.div`
  position: relative;

  @media ${devices.laptop} {
    display: flex;
  }
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.eighty};
  z-index: 2;
  flex: 1;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  width: 100%;
  padding: 24px;
`

export const StyledRangePicker = styled(RangePicker)`
  width: 100%;
`

export const FilterButtonRow = styled(Col)`
  display: flex;
  justify-content: end;
  gap: 16px;
`