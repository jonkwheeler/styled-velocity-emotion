const schema = {
  // dimensions
  h: 'height',
  w: 'width',
  fb: 'flexBasis',
  minh: 'minHeight',
  minw: 'minWidth',
  maxh: 'maxHeight',
  maxw: 'maxWidth',

  //margins and padding
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  p: 'padding',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',

  transform: 'transform',
}

export const dimensionPropsAvailable = {
  // dimensions
  h: {
    properties: [schema.h],
  },
  w: {
    properties: [schema.w],
  },
  fb: {
    properties: [schema.fb],
  },
  minh: {
    properties: [schema.minh],
  },
  minw: {
    properties: [schema.minw],
  },
  maxh: {
    properties: [schema.maxh],
  },
  maxw: {
    properties: [schema.maxw],
  },

  // margins and padding
  m: {
    properties: [schema.m],
  },
  mt: {
    properties: [schema.mt],
  },
  mb: {
    properties: [schema.mb],
  },
  ml: {
    properties: [schema.ml],
  },
  mr: {
    properties: [schema.mr],
  },
  mx: {
    properties: [schema.ml, schema.mr],
  },
  my: {
    properties: [schema.mt, schema.mb],
  },
  p: {
    properties: [schema.p],
  },
  pt: {
    properties: [schema.pt],
  },
  pb: {
    properties: [schema.pb],
  },
  pl: {
    properties: [schema.pl],
  },
  pr: {
    properties: [schema.pr],
  },
  px: {
    properties: [schema.pl, schema.pr],
  },
  py: {
    properties: [schema.pt, schema.pb],
  },

  // cell dimensions
  c: {
    properties: [schema.w, schema.h],
    conversionType: 'getCells',
  },
  cw: {
    properties: [schema.w],
    conversionType: 'getCells',
  },
  cfb: {
    properties: [schema.fb],
    conversionType: 'getCells',
  },
  ch: {
    properties: [schema.h],
    conversionType: 'getCells',
  },
  mincw: {
    properties: [schema.minw],
    conversionType: 'getCells',
  },
  minch: {
    properties: [schema.minh],
    conversionType: 'getCells',
  },
  maxcw: {
    properties: [schema.maxw],
    conversionType: 'getCells',
  },
  maxch: {
    properties: [schema.maxh],
    conversionType: 'getCells',
  },
  cm: {
    properties: [schema.m],
    conversionType: 'getCells',
  },
  cml: {
    properties: [schema.ml],
    conversionType: 'getCells',
  },
  cmr: {
    properties: [schema.mr],
    conversionType: 'getCells',
  },
  cmx: {
    properties: [schema.ml, schema.mr],
    conversionType: 'getCells',
  },
  cmt: {
    properties: [schema.mt],
    conversionType: 'getCells',
  },
  cmb: {
    properties: [schema.mb],
    conversionType: 'getCells',
  },
  cmy: {
    properties: [schema.mt, schema.mb],
    conversionType: 'getCells',
  },
  cp: {
    properties: [schema.p],
    conversionType: 'getCells',
  },
  cpl: {
    properties: [schema.pl],
    conversionType: 'getCells',
  },
  cpr: {
    properties: [schema.pr],
    conversionType: 'getCells',
  },
  cpx: {
    properties: [schema.pl, schema.pr],
    conversionType: 'getCells',
  },
  cpt: {
    properties: [schema.pt],
    conversionType: 'getCells',
  },
  cpb: {
    properties: [schema.pb],
    conversionType: 'getCells',
  },
  cpy: {
    properties: [schema.pt, schema.pb],
    conversionType: 'getCells',
  },
  ctransform: {
    properties: [schema.transform],
    conversionType: 'getCellsTranslate',
  },
}
