import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WeightPlateIcon = ({
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
    <path d='M32,1A31,31,0,1,0,63,32,31.034,31.034,0,0,0,32,1Zm0,58A27,27,0,1,1,59,32,27.03,27.03,0,0,1,32,59Z M32,24a8,8,0,1,0,8,8A8.009,8.009,0,0,0,32,24Zm0,12a4,4,0,1,1,4-4A4,4,0,0,1,32,36Z M32,7A25,25,0,1,0,57,32,25.028,25.028,0,0,0,32,7ZM42,32a9.949,9.949,0,0,1-2.262,6.324l6.969,6.969a1,1,0,1,1-1.414,1.414l-6.969-6.969a9.971,9.971,0,0,1-12.648,0l-6.969,6.969a1,1,0,0,1-1.414-1.414l6.969-6.969a9.971,9.971,0,0,1,0-12.648l-6.969-6.969a1,1,0,0,1,1.414-1.414l6.969,6.969a9.971,9.971,0,0,1,12.648,0l6.969-6.969a1,1,0,0,1,1.414,1.414l-6.969,6.969A9.949,9.949,0,0,1,42,32Z' />
  </Svg>
)

WeightPlateIcon.displayName = 'WeightPlateIcon'

WeightPlateIcon.defaultProps = {
  size: 24
}

export default WeightPlateIcon