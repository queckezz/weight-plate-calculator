import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BeltIcon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 64 64'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M42,19H22c-0.6,0-1,0.4-1,1v24c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1V20C43,19.4,42.6,19,42,19
	z M30,33h-5c-0.6,0-1-0.4-1-1s0.4-1,1-1h5c0.6,0,1,0.4,1,1S30.6,33,30,33z M62,23H45v18h17c0.6,0,1-0.4,1-1V24C63,23.4,62.6,23,62,23z M55,33h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2
	c0.6,0,1,0.4,1,1S55.6,33,55,33z M2,23c-0.6,0-1,0.4-1,1v16c0,0.6,0.4,1,1,1h17V23H2z M11,33H9c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h2
	c0.6,0,1,0.4,1,1C12,32.6,11.6,33,11,33z' />
  </Svg>
)

BeltIcon.displayName = 'BeltIcon'

BeltIcon.defaultProps = {
  size: 24
}

export default BeltIcon