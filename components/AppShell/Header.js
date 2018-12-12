import { Box, Text } from '../'

export function Header() {
  return (
    <Box p={3} boxShadow={1} borderBottom="1px solid" borderColor="grays.8">
      <Text fontSize={3} fontWeight="bold" fontFamily="primary" color="grays.1">
        platecalc
      </Text>
    </Box>
  )
}
