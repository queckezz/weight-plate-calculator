import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowDownIcon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 16 16'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M 14.7 9.3 L 13.3 7.9 L 9 12.2 L 9 0 L 7 0 L 7 12.2 L 2.7 7.9 L 1.3 9.3 L 8 16 z' />
  </Svg>
)

ArrowDownIcon.displayName = 'ArrowDownIcon'

ArrowDownIcon.defaultProps = {
  size: 24
}

export default ArrowDownIcon