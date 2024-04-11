import transformCss from '..'

it('transforms border none', () => {
  expect(transformCss([['border', 'none']])).toEqual({
    borderWidth: 0,
    borderColor: 'black',
    borderStyle: 'solid',
  })
})

it('transforms border shorthand', () => {
  expect(transformCss([['border', '2px dashed #f00']])).toEqual({
    borderWidth: 2,
    borderColor: '#f00',
    borderStyle: 'dashed',
  })
})

it('transforms border shorthand in other order', () => {
  expect(transformCss([['border', '#f00 2px dashed']])).toEqual({
    borderWidth: 2,
    borderColor: '#f00',
    borderStyle: 'dashed',
  })
})

it('transforms border shorthand missing color', () => {
  expect(transformCss([['border', '2px dashed']])).toEqual({
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'dashed',
  })
})

it('transforms border shorthand missing style', () => {
  expect(transformCss([['border', '2px #f00']])).toEqual({
    borderWidth: 2,
    borderColor: '#f00',
    borderStyle: 'solid',
  })
})

it('transforms border shorthand missing width', () => {
  expect(transformCss([['border', '#f00 dashed']])).toEqual({
    borderWidth: 1,
    borderColor: '#f00',
    borderStyle: 'dashed',
  })
})

it('transforms border shorthand missing color & width', () => {
  expect(transformCss([['border', 'dashed']])).toEqual({
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
  })
})

it('transforms border shorthand missing style & width', () => {
  expect(transformCss([['border', '#f00']])).toEqual({
    borderWidth: 1,
    borderColor: '#f00',
    borderStyle: 'solid',
  })
})

it('transforms border shorthand missing color & style', () => {
  expect(transformCss([['border', '2px']])).toEqual({
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
  })
})

it('transforms border for unsupported units', () => {
  expect(transformCss([['border', '3em solid black']])).toEqual({
    borderWidth: '3em',
    borderColor: 'black',
    borderStyle: 'solid',
  })
})

it('does not transform border with percentage width', () => {
  expect(() => transformCss([['border', '3% solid black']])).toThrow()
})

it('transforms border-top none', () => {
  expect(transformCss([['border-top', 'none']])).toEqual({
    borderTopWidth: 0,
    borderTopColor: 'black',
    borderTopStyle: 'solid',
  })
})

it('transforms border-top shorthand', () => {
  expect(transformCss([['border-top', '2px dashed #f00']])).toEqual({
    borderTopWidth: 2,
    borderTopColor: '#f00',
    borderTopStyle: 'dashed',
  })
})

it('transforms border-top shorthand in other order', () => {
  expect(transformCss([['border-top', '#f00 2px dashed']])).toEqual({
    borderTopWidth: 2,
    borderTopColor: '#f00',
    borderTopStyle: 'dashed',
  })
})

it('transforms border-top shorthand missing color', () => {
  expect(transformCss([['border-top', '2px dashed']])).toEqual({
    borderTopWidth: 2,
    borderTopColor: 'black',
    borderTopStyle: 'dashed',
  })
})

it('transforms border-top shorthand missing style', () => {
  expect(transformCss([['border-top', '2px #f00']])).toEqual({
    borderTopWidth: 2,
    borderTopColor: '#f00',
    borderTopStyle: 'solid',
  })
})

it('transforms border-top shorthand missing width', () => {
  expect(transformCss([['border-top', '#f00 dashed']])).toEqual({
    borderTopWidth: 1,
    borderTopColor: '#f00',
    borderTopStyle: 'dashed',
  })
})

it('transforms border-top shorthand missing color & width', () => {
  expect(transformCss([['border-top', 'dashed']])).toEqual({
    borderTopWidth: 1,
    borderTopColor: 'black',
    borderTopStyle: 'dashed',
  })
})

it('transforms border-top shorthand missing style & width', () => {
  expect(transformCss([['border-top', '#f00']])).toEqual({
    borderTopWidth: 1,
    borderTopColor: '#f00',
    borderTopStyle: 'solid',
  })
})

it('transforms border-top shorthand missing color & style', () => {
  expect(transformCss([['border-top', '2px']])).toEqual({
    borderTopWidth: 2,
    borderTopColor: 'black',
    borderTopStyle: 'solid',
  })
})

it('transforms border-top for unsupported units', () => {
  expect(transformCss([['border-top', '3em solid black']])).toEqual({
    borderTopWidth: '3em',
    borderTopColor: 'black',
    borderTopStyle: 'solid',
  })
})

it('does not transform border-top with percentage width', () => {
  expect(() => transformCss([['border-top', '3% solid black']])).toThrow()
})

it('transforms border-left none', () => {
  expect(transformCss([['border-left', 'none']])).toEqual({
    borderLeftWidth: 0,
    borderLeftColor: 'black',
    borderLeftStyle: 'solid',
  })
})

it('transforms border-right none', () => {
  expect(transformCss([['border-right', 'none']])).toEqual({
    borderRightWidth: 0,
    borderRightColor: 'black',
    borderRightStyle: 'solid',
  })
})

it('transforms border-bottom none', () => {
  expect(transformCss([['border-bottom', 'none']])).toEqual({
    borderBottomWidth: 0,
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
  })
})
