import styled from 'styled-components'
import {
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent
} from 'styled-system'
import { Box } from './'

export const Flex = styled(Box)(
  props => ({
    display: props.inline ? 'inline-flex' : 'flex'
  }),
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
}
