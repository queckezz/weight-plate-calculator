function createUnlimitedPlateWeights() {
  return new Map([25, 20, 15, 10, 5, 2.5, 1.25].map(n => [n, Infinity]))
}

export function getPlates(
  initialWeight,
  { sides = 1, stack = createUnlimitedPlateWeights(), equipmentWeight = 0 } = {}
) {
  let plates = new Map()
  let remaindingWeight = initialWeight - equipmentWeight

  for (let [plateWeight, platesAvailable] of stack) {
    let plateCount = Math.floor(remaindingWeight / plateWeight)

    while (plateCount % sides != 0) {
      plateCount--
    }

    if (plateCount >= 1 && platesAvailable >= plateCount) {
      const totalWeight = plateCount * plateWeight
      remaindingWeight = remaindingWeight - totalWeight
      plates.set(plateWeight, plateCount / sides)
    } else {
      plates.set(plateWeight, 0)
    }
  }

  return { rest: parseInt(remaindingWeight * 100) / 100, plates }
}
