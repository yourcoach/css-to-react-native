import transformCss from '..'

it('should transform font size', () => {
  expect(transformCss([['font-size', '16px']])).toEqual({
    fontSize: 16,
  })

  expect(transformCss([['font-size', '16rem']])).toEqual({
    fontSize: '16rem',
  })
})

it('font size should be greater than 0', () => {
  expect(transformCss([['font-size', '0px']])).toEqual({
    fontSize: 1,
  })

  expect(transformCss([['font-size', '0rem']])).toEqual({
    fontSize: '0rem',
  })
})
