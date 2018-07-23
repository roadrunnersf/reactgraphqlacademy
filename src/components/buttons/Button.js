import React from 'react'
import styled from 'styled-components'
import { blue1, WHITE, CALLTOACTIONRED, FONT_FAMILY } from '../../styles'

export const DEFAULT_BUTTON_STYLE = `
  font-size: 18px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  align-items: flex-start;
  text-align: center;
  padding: 17px 25px;
  border-radius: 2px;
`
export default styled(({ large, ...props }) => <button {...props} />)`
  ${DEFAULT_BUTTON_STYLE}
  ${FONT_FAMILY}
  background-color: ${props => (props.cta ? CALLTOACTIONRED : blue1())};
  font-weight: ${props => (props.cta ? 'bold' : '')};
  box-shadow: 0 18px 29px -2px rgba(0, 0, 0, 0.26);
  color: ${WHITE};
  display: ${props => (props.block ? 'block' : 'inline-block')};
`
