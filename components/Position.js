import { top, right, left, bottom } from 'styled-system'
import styled from 'styled-components'
import { Box } from './'

export const Absolute = styled(Box)(
  {
    position: 'absolute'
  },
  top,
  right,
  left,
  bottom,
  props => ({ transform: props.transform })
)

export const Relative = styled(Box)({
  position: 'relative'
})
