import styled from 'styled-components'
import { Box, Flex, Text, Absolute, Relative } from './'
import { style } from 'styled-system'

export const PlateText = styled(Text)({})

PlateText.defaultProps = {
  fontSize: 1,
  p: 1,
  fontFamily: 'primary',
  color: 'grays.2'
}

const Badge = ({ weight, amount, ...props }) => (
  <Flex
    {...props}
    bg="grays.10"
    borderRadius={1}
    style={{ overflow: 'hidden' }}
  >
    <PlateText>{amount}x</PlateText>
    <PlateText bg="grays.4" color="grays.10" fontWeight="bold">
      {weight}kg
    </PlateText>
  </Flex>
)

const ColoredPath = styled('path')(
  style({
    prop: 'color',
    cssProperty: 'fill',
    key: 'colors'
  })
)

const WeightPlate = ({ size, color, colorInside }) => (
  <svg x="0px" y="0px" width={size} height={size} viewBox="0 0 48 48">
    <g transform="translate(0, 0)">
      <ColoredPath
        d="M24,1A23,23,0,1,0,47,24,23.025,23.025,0,0,0,24,1Zm0,26a3,3,0,1,1,3-3A3,3,0,0,1,24,27Z"
        color={color}
      />

      <ColoredPath
        d="M24,44A20,20,0,1,1,44,24,20.023,20.023,0,0,1,24,44ZM24,6A18,18,0,1,0,42,24,18.021,18.021,0,0,0,24,6Z"
        color={colorInside}
      />

      <ColoredPath
        d="M30.312,28.9a7.95,7.95,0,0,0,0-9.8l4.395-4.395a1,1,0,0,0-1.414-1.414L28.9,17.688a7.95,7.95,0,0,0-9.8,0l-4.395-4.395a1,1,0,0,0-1.414,1.414L17.688,19.1a7.95,7.95,0,0,0,0,9.8l-4.395,4.395a1,1,0,1,0,1.414,1.414L19.1,30.312a7.95,7.95,0,0,0,9.8,0l4.395,4.395a1,1,0,0,0,1.414-1.414ZM24,30a6,6,0,1,1,6-6A6,6,0,0,1,24,30Z"
        color={colorInside}
      />
    </g>
  </svg>
)

export const Plate = ({ weight, amount, ...props }) => {
  const PLATE_SIZE = 48
  return (
    <Relative
      {...props}
      p={3}
      border="1px solid"
      borderColor="grays.9"
      borderRadius={1}
    >
      <Flex>
        {new Array(amount).fill(true).map((_, i) => {
          return (
            <Box key={i} top={0} ml={i == 0 ? 0 : -PLATE_SIZE + 30}>
              <WeightPlate
                colorInside="grays.11"
                color={`grays.${8 - i}`}
                size={PLATE_SIZE}
              />
            </Box>
          )
        })}
      </Flex>

      <Absolute bottom="10px" left="50%" transform="translateX(-50%)">
        <Badge weight={weight} amount={amount} />
      </Absolute>
    </Relative>
  )
}
