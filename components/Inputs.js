import styled from 'styled-components'
import { borderColor, borders, themeGet } from 'styled-system'
import { Flex, Text } from '../components'

export const BaseInput = styled(Text)(
  ({ width, value, minSize }) => {
    if (width) {
      return { width }
    }

    const len = value.toString().length
    const baseFactor = 28

    return {
      width: len < minSize ? minSize * baseFactor : len * baseFactor
    }
  },

  props => ({
    transition: 'border-color .2s',
    '&:focus': {
      outline: 'none',
      borderColor: themeGet('colors.grays.1')(props)
    },

    '&::placeholder': {
      color: themeGet('colors.grays.11')(props)
    }
  }),
  borders,
  borderColor
)

const validateKeyAsNumber = keyCode =>
  !/(\d+|\.|,)/.test(String.fromCharCode(keyCode))

const validateMaxNumber = (prevValue, keyCode, maxNumber) =>
  parseFloat(prevValue + String.fromCharCode(keyCode)) > maxNumber

export const NumberInput = ({ maxNumber, value, ...props }) => (
  <BaseInput
    {...props}
    type="text"
    inputMode="numeric"
    value={value.value == 0 ? '' : value.raw}
    onKeyPress={e => {
      validateKeyAsNumber(e.which) && e.preventDefault()
      validateMaxNumber(e.target.value, e.which, maxNumber) &&
        e.preventDefault()
    }}
  />
)

BaseInput.defaultProps = {
  as: 'input',
  textAlign: 'center',
  border: 0,
  fontWeight: 'bold',
  borderBottom: '1px solid',
  borderColor: 'grays.8',
  color: 'grays.2',
  fontFamily: 'primary'
}

export const InputWithMeasurement = ({ measurement, fontSize, ...props }) => (
  <Flex alignItems="baseline">
    <NumberInput fontSize={fontSize} {...props} />
    <Text
      ml={1}
      fontSize={fontSize - 3}
      color="grays.5"
      fontFamily="primary"
      fontWeight="bold"
    >
      {measurement}
    </Text>
  </Flex>
)
