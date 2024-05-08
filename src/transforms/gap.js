import { LENGTH, UNSUPPORTED_LENGTH_UNIT, SPACE, PERCENT } from '../tokenTypes'

export default () => ({})

const gapFactory = ({
  types = [LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT],
  directions = ['row', 'column'],
}) => tokenStream => {
  const values = []

  values.push(tokenStream.expect(...types))

  while (values.length < 2 && tokenStream.hasTokens()) {
    tokenStream.expect(SPACE)
    values.push(tokenStream.expect(...types))
  }

  tokenStream.expectEmpty()

  if (values.length === 1) {
    return {
      gap: values[0],
    }
  }

  const [first, second] = values

  const keyFor = n => `${directions[n]}Gap`

  return {
    [keyFor(0)]: first,
    [keyFor(1)]: second !== undefined ? second : first,
  }
}

export const gap = gapFactory({})
