import { LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT, SPACE } from '../tokenTypes'
import { directionFactory } from './util'

const logicalFactory = ({
  types = [LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT],
  directions = ['Start', 'End'],
  prefix = '',
  suffix = '',
}) => tokenStream => {
  const values = []

  values.push(tokenStream.expect(...types))

  while (values.length < 2 && tokenStream.hasTokens()) {
    tokenStream.expect(SPACE)
    values.push(tokenStream.expect(...types))
  }

  tokenStream.expectEmpty()

  const [first, second] = values

  const keyFor = n => `${prefix}${directions[n]}${suffix}`

  return {
    [keyFor(0)]: first,
    [keyFor(1)]: second !== undefined ? second : first,
  }
}

export const marginInline = logicalFactory({
  prefix: 'margin',
})

export const marginBlock = logicalFactory({
  prefix: 'margin',
  directions: ['Top', 'Bottom'],
})

export const marginInlineStart = tokenStream => ({
  marginStart: tokenStream.expect(
    ...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]
  ),
})

export const marginBlockStart = tokenStream => ({
  marginTop: tokenStream.expect(...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]),
})

export const marginInlineEnd = tokenStream => ({
  marginEnd: tokenStream.expect(...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]),
})

export const marginBlockEnd = tokenStream => ({
  marginBottom: tokenStream.expect(
    ...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]
  ),
})

export const paddingInline = logicalFactory({
  prefix: 'padding',
})

export const paddingBlock = logicalFactory({
  prefix: 'padding',
  directions: ['Top', 'Bottom'],
})

export const paddingInlineStart = tokenStream => ({
  paddingStart: tokenStream.expect(
    ...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]
  ),
})

export const paddingBlockStart = tokenStream => ({
  paddingTop: tokenStream.expect(...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]),
})

export const paddingInlineEnd = tokenStream => ({
  paddingEnd: tokenStream.expect(...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]),
})

export const paddingBlockEnd = tokenStream => ({
  paddingBottom: tokenStream.expect(
    ...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]
  ),
})

export const borderInlineWidth = logicalFactory({
  prefix: 'border',
  suffix: 'Width',
})

export const borderBlockWidth = logicalFactory({
  prefix: 'border',
  suffix: 'Width',
  directions: ['Top', 'Bottom'],
})

export const borderInlineStartWidth = tokenStream => ({
  borderStartWidth: tokenStream.expect(
    ...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]
  ),
})

export const borderBlockStartWidth = tokenStream => ({
  borderTopWidth: tokenStream.expect(
    ...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]
  ),
})

export const borderInlineEndWidth = tokenStream => ({
  borderEndWidth: tokenStream.expect(
    ...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]
  ),
})

export const borderBlockEndWidth = tokenStream => ({
  borderBottomWidth: tokenStream.expect(
    ...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]
  ),
})

export const inset = directionFactory({
  directions: ['top', 'start', 'bottom', 'end'],
})

export const insetInline = logicalFactory({
  directions: ['start', 'end'],
})

export const insetBlock = logicalFactory({
  directions: ['top', 'bottom'],
})

export const insetInlineStart = tokenStream => ({
  start: tokenStream.expect(...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]),
})

export const insetBlockStart = tokenStream => ({
  top: tokenStream.expect(...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]),
})

export const insetInlineEnd = tokenStream => ({
  end: tokenStream.expect(...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]),
})

export const insetBlockEnd = tokenStream => ({
  bottom: tokenStream.expect(...[LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT]),
})
