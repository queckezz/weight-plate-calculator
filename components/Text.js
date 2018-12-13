import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign
} from 'styled-system'
import { Box } from './'

const caps = props => (props.caps ? { textTransform: 'uppercase' } : null)

export const Text = styled(Box)(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  caps
)

Text.displayName = 'Text'

Text.defaultProps = {
  as: 'p',
  m: 0
}

Text.propTypes = {
  caps: PropTypes.bool,
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes
}
