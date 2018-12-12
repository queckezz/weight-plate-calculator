import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PowerRackIcon = ({
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
    <path d='M24,58H22V25H16V58H14a1,1,0,0,0,0,2H24a1,1,0,0,0,0-2Z M50,58H48V25H42V58H40a1,1,0,0,0,0,2H50a1,1,0,0,0,0-2Z M21,4H17a1,1,0,0,0-1,1V19h6V5A1,1,0,0,0,21,4Z M47,4H43a1,1,0,0,0-1,1V19h6V5A1,1,0,0,0,47,4Z M5,15a1,1,0,0,0-1,1v5H2a1,1,0,0,0,0,2H4v4a1,1,0,0,0,2,0V16A1,1,0,0,0,5,15Z M62,21H60V16a1,1,0,0,0-2,0V27a1,1,0,0,0,2,0V23h2a1,1,0,0,0,0-2Z M54,11a2,2,0,0,0-2,2v8H12V13a2,2,0,0,0-4,0V31a2,2,0,0,0,4,0V23H52v8a2,2,0,0,0,4,0V13A2,2,0,0,0,54,11Z' />
  </Svg>
)

PowerRackIcon.displayName = 'PowerRackIcon'

PowerRackIcon.defaultProps = {
  size: 24
}

export default PowerRackIcon