import { hasZeroPlates, getPlates } from './plates'

test('get plates in order', () => {
  expect(Array.from(getPlates(0, { sides: 1 }).plates.keys())).toEqual([
    25,
    20,
    15,
    10,
    5,
    2.5,
    1.25
  ])
})

test('get belt plates', () => {
  expect(getPlates(10, { sides: 1 }).plates).toEqual(
    new Map([[25, 0], [20, 0], [15, 0], [10, 1], [5, 0], [2.5, 0], [1.25, 0]])
  )

  expect(getPlates(47.5, { sides: 1 }).plates).toEqual(
    new Map([[25, 1], [20, 1], [15, 0], [10, 0], [5, 0], [2.5, 1], [1.25, 0]])
  )

  expect(getPlates(80, { sides: 1 }).plates).toEqual(
    new Map([[25, 3], [20, 0], [15, 0], [10, 0], [5, 1], [2.5, 0], [1.25, 0]])
  )
})

test('get barbell plates', () => {
  expect(getPlates(10, { sides: 2 }).plates).toEqual(
    new Map([[25, 0], [20, 0], [15, 0], [10, 0], [5, 1], [2.5, 0], [1.25, 0]])
  )

  expect(getPlates(47.5, { sides: 2 }).plates).toEqual(
    new Map([[25, 0], [20, 1], [15, 0], [10, 0], [5, 0], [2.5, 1], [1.25, 1]])
  )

  expect(getPlates(80, { sides: 2 }).plates).toEqual(
    new Map([[25, 1], [20, 0], [15, 1], [10, 0], [5, 0], [2.5, 0], [1.25, 0]])
  )

  expect(getPlates(125, { sides: 2 }).plates).toEqual(
    new Map([[25, 2], [20, 0], [15, 0], [10, 1], [5, 0], [2.5, 1], [1.25, 0]])
  )
})

test('get plates with limited stack', () => {
  expect(
    getPlates(15, {
      sides: 1,
      stack: new Map([
        [25, 0],
        [20, 0],
        [15, 0],
        [10, 2],
        [5, 1],
        [2.5, 0],
        [1.25, 0]
      ])
    }).plates
  ).toEqual(
    new Map([[25, 0], [20, 0], [15, 0], [10, 1], [5, 1], [2.5, 0], [1.25, 0]])
  )

  expect(
    getPlates(40, {
      sides: 2,
      stack: new Map([
        [25, 0],
        [20, 0],
        [15, 0],
        [10, 4],
        [5, 0],
        [2.5, 0],
        [1.25, 0]
      ])
    }).plates
  ).toEqual(
    new Map([[25, 0], [20, 0], [15, 0], [10, 2], [5, 0], [2.5, 0], [1.25, 0]])
  )
})

test('get plates with equipment', () => {
  expect(
    getPlates(50, {
      sides: 2,
      equipmentWeight: 20
    }).plates
  ).toEqual(
    new Map([[25, 0], [20, 0], [15, 1], [10, 0], [5, 0], [2.5, 0], [1.25, 0]])
  )
})

test('get plates with rest weight', () => {
  expect(getPlates(10.5).rest).toBe(0.5)
  expect(getPlates(47.5).rest).toBe(0)
  expect(getPlates(47.85).rest).toBe(0.35)
  expect(getPlates(0, { equipmentWeight: 20 }).rest).toBe(0)
})

test('check if plate calculation has no plates in it', () => {
  expect(
    hasZeroPlates(getPlates(5, { equipmentWeight: 20 }).plates)
  ).toBeTruthy()

  expect(hasZeroPlates(getPlates(10).plates)).toBeFalsy()
})
