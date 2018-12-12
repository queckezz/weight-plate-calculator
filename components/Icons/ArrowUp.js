import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowUpIcon = ({
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
    <path d='M 1.3 6.7 L 2.7 8.1 L 7 3.8 L 7 16 L 9 16 L 9 3.8 L 13.3 8.1 L 14.7 6.7 L 8 0 z' />
  </Svg>
)

ArrowUpIcon.displayName = 'ArrowUpIcon'

ArrowUpIcon.defaultProps = {
  size: 24
}

export default ArrowUpIcon