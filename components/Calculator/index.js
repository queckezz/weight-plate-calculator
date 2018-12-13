import {
  InputWithMeasurement,
  LabeledBlock,
  Belt,
  Plate,
  Flex,
  PowerRack,
  SpaceChildren,
  SelectType
} from '../'

export function Calculator({
  weight,
  barbellWeight,
  loadType,
  sides,
  plates,
  dispatch
}) {
  return (
    <Flex flexDirection="column" height="100%">
      <SpaceChildren
        size={4}
        p={4}
        flex="1 1 auto"
        style={{ overflowY: 'scroll', minHeight: 0 }}
      >
        <LabeledBlock textPadding={0} text="Weight">
          <InputWithMeasurement
            measurement="kg"
            maxNumber={999}
            placeholder="60"
            fontSize={6}
            minSize={3}
            value={weight}
            onChange={e => {
              if (e.target.value == '') {
                dispatch({ type: 'SET_WEIGHT', weight: 0 })
              } else {
                dispatch({
                  type: 'SET_WEIGHT',
                  weight: e.target.value
                })
              }
            }}
          />
        </LabeledBlock>

        <LabeledBlock text="Load Type">
          <SelectType.Wrapper>
            <SelectType.Item
              isActive={loadType === 'BARBELL'}
              Icon={PowerRack}
              text="Barbell"
              onClick={() =>
                dispatch({ type: 'SET_LOAD_TYPE', loadType: 'BARBELL' })
              }
            />
            <SelectType.Item
              isActive={loadType === 'WEIGHT_BELT'}
              Icon={Belt}
              text="Weight Belt"
              onClick={() =>
                dispatch({ type: 'SET_LOAD_TYPE', loadType: 'WEIGHT_BELT' })
              }
            />
          </SelectType.Wrapper>
        </LabeledBlock>

        {loadType === 'BARBELL' && (
          <LabeledBlock textPadding={0} text="Barbell Weight">
            <InputWithMeasurement
              measurement="kg"
              maxNumber={99}
              fontSize={4}
              width={32}
              value={barbellWeight}
              onChange={e => {
                if (e.target.value == '') {
                  dispatch({ type: 'SET_BARBELL_WEIGHT', weight: 0 })
                } else {
                  dispatch({
                    type: 'SET_BARBELL_WEIGHT',
                    weight: e.target.value
                  })
                }
              }}
            />
          </LabeledBlock>
        )}
      </SpaceChildren>

      <LabeledBlock
        notice={sides == 2 ? 'per side' : null}
        textPadding={2}
        bg="grays.11"
        boxShadow={3}
        text="Plates"
        p={4}
      >
        <Flex flexWrap="wrap" m={-1} style={{ overflowY: 'scroll' }}>
          {Array.from(plates.entries()).map(
            ([weight, amount], i) =>
              amount != 0 && (
                <Plate m={1} key={i} weight={weight} amount={amount} />
              )
          )}
        </Flex>
      </LabeledBlock>
    </Flex>
  )
}
