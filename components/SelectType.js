import { themeGet } from 'styled-system'
import styled from 'styled-components'
import { Text, Box, Flex } from './'
import ClickableBox from 'clickable-box'

export const Wrapper = styled(Box).attrs({
  border: '2px solid',
  borderColor: 'grays.10',
  borderRadius: 1
})(
  {
    display: 'flex'
  },
  props => ({
    '> *:not(:last-child)': {
      borderRight: '2px solid',
      borderColor: themeGet('colors.grays.10')(props)
    }
  })
)

const ItemWrapper = styled(Flex).attrs({
  p: 3,
  flexDirection: 'column',
  alignItems: 'center'
})(
  {
    backgroundColor: 'white',
    transition: 'background-color .2s'
  },
  props => ({
    backgroundColor: props.isActive
      ? themeGet('colors.grays.10')(props)
      : 'white'
  })
)

export const Item = ({ Icon, text, isActive, onClick, ...props }) => (
  <Box as={ClickableBox} flex="1" onClick={onClick} aria-label={text}>
    <ItemWrapper isActive={isActive}>
      <Icon size={64} color="grays.2" />
      <Text
        pt={1}
        color="grays.2"
        fontFamily="primary"
        fontWeight="bold"
        fontSize={1}
      >
        {text}
      </Text>
    </ItemWrapper>
  </Box>
)

export const SelectType = {
  Wrapper,
  Item
}
