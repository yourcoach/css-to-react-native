import { LENGTH, UNSUPPORTED_LENGTH_UNIT } from '../tokenTypes'

export default tokenStream => {
  const fontSize = tokenStream.expect(LENGTH, UNSUPPORTED_LENGTH_UNIT)

  if (fontSize <= 0) {
    return { fontSize: 1 }
  }

  return { fontSize }
}
