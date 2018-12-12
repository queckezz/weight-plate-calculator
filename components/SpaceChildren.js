import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Box } from './'

export const SpaceChildren = styled(Box)(({ direction, size, ...props }) => ({
  '& > * + *': {
    ['margin-' + direction]: themeGet(`scale.${size}`)(props)
  }
}))

SpaceChildren.displayName = 'SpaceChildren'

SpaceChildren.defaultProps = {
  direction: 'top',
  size: 1
}

SpaceChildren.propTypes = {
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  size: PropTypes.number
}
