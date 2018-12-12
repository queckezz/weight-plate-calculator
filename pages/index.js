import { AppShell, Calculator } from '../components'
import { getPlates } from '../lib/get-plates'
import { useReducer } from 'react'

const createNumberInputState = localeValue => {
  const value = localeValue.toString().replace(/,/, '.')

  return {
    raw: value,
    value: !isNaN(value) && value !== '' ? parseFloat(value) : 0
  }
}

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_WEIGHT':
          return { ...state, weight: createNumberInputState(action.weight) }
        case 'SET_BARBELL_WEIGHT':
          return {
            ...state,
            barbellWeight: createNumberInputState(action.weight)
          }
        case 'SET_LOAD_TYPE':
          return { ...state, loadType: action.loadType }
        default:
          return state
      }
    },
    {
      barbellWeight: createNumberInputState(20),
      weight: createNumberInputState(120),
      loadType: 'BARBELL'
    }
  )

  const sides =
    (state.loadType === 'BARBELL' && 2) ||
    (state.loadType === 'WEIGHT_BELT' && 1)

  const { rest, plates } = getPlates(state.weight.value, {
    sides,
    equipmentWeight:
      state.loadType === 'BARBELL' ? state.barbellWeight.value : 0
  })

  return (
    <Calculator {...state} sides={sides} plates={plates} dispatch={dispatch} />
  )
}

export default () => (
  <AppShell>
    <App />
  </AppShell>
)
