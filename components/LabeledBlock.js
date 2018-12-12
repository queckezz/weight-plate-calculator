import styled from 'styled-components'
import { Text, Box, Flex } from '.'

const ContentLabel = styled(Text)({
  textTransform: 'uppercase'
})

ContentLabel.defaultProps = {
  fontFamily: 'primary',
  fontSize: 0,
  letterSpacing: '1px',
  fontWeight: 'bold',
  color: 'grays.7'
}

const Badge = styled(Text)({
  display: 'inline-block'
})

Badge.defaultProps = {
  p: 1,
  fontFamily: 'primary',
  fontSize: 0,
  borderRadius: 1,
  bg: 'grays.9',
  color: 'grays.2',
  fontWeight: 'bold'
}

export const LabeledBlock = ({
  text,
  notice,
  textPadding = 1,
  children,
  ...props
}) => (
  <Box {...props}>
    <Flex alignItems="center" pb={textPadding}>
      <ContentLabel pr={1}>{text}</ContentLabel>
      {notice && <Badge>{notice}</Badge>}
    </Flex>
    {children}
  </Box>
)
