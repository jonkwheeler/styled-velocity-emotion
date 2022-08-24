const prop = {
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

export const dimensionPropsAvailable = [
  // dimensions
  {
    prop: 'h',
    properties: [prop.h],
  },
  {
    prop: 'w',
    properties: [prop.w],
  },
  {
    prop: 'fb',
    properties: [prop.fb],
  },
  {
    prop: 'minh',
    properties: [prop.minh],
  },
  {
    prop: 'minw',
    properties: [prop.minw],
  },
  {
    prop: 'maxh',
    properties: [prop.maxh],
  },
  {
    prop: 'maxw',
    properties: [prop.maxw],
  },

  // margins and padding
  {
    prop: 'm',
    properties: [prop.m],
  },
  {
    prop: 'mt',
    properties: [prop.mt],
  },
  {
    prop: 'mb',
    properties: [prop.mb],
  },
  {
    prop: 'ml',
    properties: [prop.ml],
  },
  {
    prop: 'mr',
    properties: [prop.mr],
  },
  {
    prop: 'mx',
    properties: [prop.ml, prop.mr],
  },
  {
    prop: 'my',
    properties: [prop.mt, prop.mb],
  },
  {
    prop: 'p',
    properties: [prop.p],
  },
  {
    prop: 'pt',
    properties: [prop.pt],
  },
  {
    prop: 'pb',
    properties: [prop.pb],
  },
  {
    prop: 'pl',
    properties: [prop.pl],
  },
  {
    prop: 'pr',
    properties: [prop.pr],
  },
  {
    prop: 'px',
    properties: [prop.pl, prop.pr],
  },
  {
    prop: 'py',
    properties: [prop.pt, prop.pb],
  },

  // cell dimensions
  {
    prop: 'c',
    properties: [prop.w, prop.h],
    conversionType: 'getCells',
  },
  {
    prop: 'cw',
    properties: [prop.w],
    conversionType: 'getCells',
  },
  {
    prop: 'cfb',
    properties: [prop.fb],
    conversionType: 'getCells',
  },
  {
    prop: 'ch',
    properties: [prop.h],
    conversionType: 'getCells',
  },
  {
    prop: 'mincw',
    properties: [prop.minw],
    conversionType: 'getCells',
  },
  {
    prop: 'minch',
    properties: [prop.minh],
    conversionType: 'getCells',
  },
  {
    prop: 'maxcw',
    properties: [prop.maxw],
    conversionType: 'getCells',
  },
  {
    prop: 'maxch',
    properties: [prop.maxh],
    conversionType: 'getCells',
  },
  {
    prop: 'cm',
    properties: [prop.m],
    conversionType: 'getCells',
  },
  {
    prop: 'cml',
    properties: [prop.ml],
    conversionType: 'getCells',
  },
  {
    prop: 'cmr',
    properties: [prop.mr],
    conversionType: 'getCells',
  },
  {
    prop: 'cmx',
    properties: [prop.ml, prop.mr],
    conversionType: 'getCells',
  },
  {
    prop: 'cmt',
    properties: [prop.mt],
    conversionType: 'getCells',
  },
  {
    prop: 'cmb',
    properties: [prop.mb],
    conversionType: 'getCells',
  },
  {
    prop: 'cmy',
    properties: [prop.mt, prop.mb],
    conversionType: 'getCells',
  },
  {
    prop: 'cp',
    properties: [prop.p],
    conversionType: 'getCells',
  },
  {
    prop: 'cpl',
    properties: [prop.pl],
    conversionType: 'getCells',
  },
  {
    prop: 'cpr',
    properties: [prop.pr],
    conversionType: 'getCells',
  },
  {
    prop: 'cpx',
    properties: [prop.pl, prop.pr],
    conversionType: 'getCells',
  },
  {
    prop: 'cpt',
    properties: [prop.pt],
    conversionType: 'getCells',
  },
  {
    prop: 'cpb',
    properties: [prop.pb],
    conversionType: 'getCells',
  },
  {
    prop: 'cpy',
    properties: [prop.pt, prop.pb],
    conversionType: 'getCells',
  },
  {
    prop: 'ctransform',
    properties: [prop.transform],
    conversionType: 'getCellsTranslate',
  },
]
