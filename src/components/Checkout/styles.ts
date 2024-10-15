import { styled } from 'styled-components'
import { colors } from '../../styles'
import SideBar from '../SideBar'

export const SideBarDelivery = styled(SideBar)`
  &.isVisible {
    display: block;
  }
`
export const Row = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  width: 100%;
  column-gap: 34px;
  margin-top: 8px;

  input {
    width: 100%;
    margin-top: 8px;
  }

  .width {
    width: 228px;
  }
`

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  margin-bottom: 24px;

  input,
  label {
    margin-top: 8px;
    &.error {
      border: 3px solid red;
    }
  }

  input {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background-color: ${colors.LightSalmon};
    height: 32px;
    border: none;
    color: #4b4b4b;
    padding: 8px;
  }

  &.erroor {
    border: 1px solid red;
  }
`

export const SideBarPurchase = styled(SideBar)`
  &.isVisible {
    display: block;
  }
`

export const SideBarFinish = styled(SideBar)`
  &.isVisible {
    display: block;
  }

  p {
    margin-bottom: 24px;
  }
`
