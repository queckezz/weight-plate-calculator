import styled from 'styled-components'
import {
  alignSelf,
  borderColor,
  borderRadius,
  borders,
  bottom,
  boxShadow,
  color,
  flex,
  fontSize,
  height,
  minHeight,
  minWidth,
  order,
  space,
  width
} from 'styled-system'

export const Box = styled('div')(
  {
    boxSizing: 'border-box'
  },
  // base
  space,
  width,
  minWidth,
  height,
  minHeight,
  fontSize,
  color,

  // flex
  flex,
  order,
  alignSelf,

  // borders
  borders,
  borderColor,
  borderRadius,

  // shadows
  boxShadow
)

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes
}
