import transformCss from '..'

it('transforms direction property', () => {
  expect(transformCss([['direction', 'ltr']])).toEqual({ direction: 'ltr' })
  expect(transformCss([['direction', 'rtl']])).toEqual({ direction: 'rtl' })
})

it('transforms start/end properties', () => {
  expect(transformCss([['start', '10px']])).toEqual({ start: 10 })
  expect(transformCss([['end', '20px']])).toEqual({ end: 20 })
})

it('transforms margin logical properties', () => {
  expect(transformCss([['margin-inline', '10px 20px']])).toEqual({
    marginStart: 10,
    marginEnd: 20,
  })

  expect(transformCss([['margin-inline-start', '10px']])).toEqual({
    marginStart: 10,
  })
  expect(transformCss([['margin-inline-start', '10rem']])).toEqual({
    marginStart: '10rem',
  })
  expect(transformCss([['margin-inline-start', '10%']])).toEqual({
    marginStart: '10%',
  })

  expect(transformCss([['margin-block', '10px 20px']])).toEqual({
    marginTop: 10,
    marginBottom: 20,
  })

  expect(transformCss([['margin-block-start', '10px']])).toEqual({
    marginTop: 10,
  })
  expect(transformCss([['margin-block-start', '10rem']])).toEqual({
    marginTop: '10rem',
  })
  expect(transformCss([['margin-block-start', '10%']])).toEqual({
    marginTop: '10%',
  })

  expect(transformCss([['margin-inline-end', '20rem']])).toEqual({
    marginEnd: '20rem',
  })
  expect(transformCss([['margin-inline-end', '20%']])).toEqual({
    marginEnd: '20%',
  })
  expect(transformCss([['margin-inline-end', '20px']])).toEqual({
    marginEnd: 20,
  })

  expect(transformCss([['margin-block-end', '10px']])).toEqual({
    marginBottom: 10,
  })
  expect(transformCss([['margin-block-end', '10rem']])).toEqual({
    marginBottom: '10rem',
  })
  expect(transformCss([['margin-block-end', '10%']])).toEqual({
    marginBottom: '10%',
  })
})

it('transforms padding logical properties', () => {
  expect(transformCss([['padding-inline', '10px 20px']])).toEqual({
    paddingStart: 10,
    paddingEnd: 20,
  })

  expect(transformCss([['padding-inline-start', '10px']])).toEqual({
    paddingStart: 10,
  })
  expect(transformCss([['padding-inline-start', '10rem']])).toEqual({
    paddingStart: '10rem',
  })
  expect(transformCss([['padding-inline-start', '10%']])).toEqual({
    paddingStart: '10%',
  })

  expect(transformCss([['padding-block', '10px 20px']])).toEqual({
    paddingTop: 10,
    paddingBottom: 20,
  })

  expect(transformCss([['padding-block-start', '10px']])).toEqual({
    paddingTop: 10,
  })
  expect(transformCss([['padding-block-start', '10rem']])).toEqual({
    paddingTop: '10rem',
  })
  expect(transformCss([['padding-block-start', '10%']])).toEqual({
    paddingTop: '10%',
  })

  expect(transformCss([['padding-inline-end', '20rem']])).toEqual({
    paddingEnd: '20rem',
  })
  expect(transformCss([['padding-inline-end', '20%']])).toEqual({
    paddingEnd: '20%',
  })
  expect(transformCss([['padding-inline-end', '20px']])).toEqual({
    paddingEnd: 20,
  })

  expect(transformCss([['padding-block-end', '20rem']])).toEqual({
    paddingBottom: '20rem',
  })
  expect(transformCss([['padding-block-end', '20%']])).toEqual({
    paddingBottom: '20%',
  })
  expect(transformCss([['padding-block-end', '20px']])).toEqual({
    paddingBottom: 20,
  })
})

it('transforms borderWidth logical properties', () => {
  expect(transformCss([['border-inline-width', '10px 20px']])).toEqual({
    borderStartWidth: 10,
    borderEndWidth: 20,
  })

  expect(transformCss([['border-block-width', '10px 20px']])).toEqual({
    borderTopWidth: 10,
    borderBottomWidth: 20,
  })

  expect(transformCss([['border-inline-start-width', '10px']])).toEqual({
    borderStartWidth: 10,
  })

  expect(transformCss([['border-block-start-width', '10px']])).toEqual({
    borderTopWidth: 10,
  })

  expect(transformCss([['border-inline-end-width', '20px']])).toEqual({
    borderEndWidth: 20,
  })

  expect(transformCss([['border-block-end-width', '10px']])).toEqual({
    borderBottomWidth: 10,
  })
})

it('transforms position logical properties', () => {
  expect(transformCss([['inset-inline-start', '10px']])).toEqual({
    start: 10,
  })

  expect(transformCss([['inset-block-start', '10px']])).toEqual({
    top: 10,
  })

  expect(transformCss([['inset-inline-end', '10px']])).toEqual({
    end: 10,
  })

  expect(transformCss([['inset-block-end', '10px']])).toEqual({
    bottom: 10,
  })

  expect(transformCss([['inset-block', '10px 20px']])).toEqual({
    top: 10,
    bottom: 20,
  })

  expect(transformCss([['inset-inline', '10px 20px']])).toEqual({
    start: 10,
    end: 20,
  })
})
