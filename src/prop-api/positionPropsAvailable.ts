const prop = {
  t: 'top',
  b: 'bottom',
  r: 'right',
  l: 'left',
  position: 'position',
  z: 'zIndex',
}

export const positionPropsAvailable = [
  //position
  {
    prop: 't',
    properties: [prop.t],
  },
  {
    prop: 'b',
    properties: [prop.b],
  },
  {
    prop: 'l',
    properties: [prop.l],
  },
  {
    prop: 'r',
    properties: [prop.r],
  },
  {
    prop: 'x',
    properties: [prop.l, prop.r],
  },
  {
    prop: 'y',
    properties: [prop.t, prop.b],
    propertyTwo: 'bottom',
  },

  // cell
  {
    prop: 'ct',
    properties: [prop.t],
    conversionType: 'getCells',
  },
  {
    prop: 'cb',
    properties: [prop.b],
    conversionType: 'getCells',
  },
  {
    prop: 'cl',
    properties: [prop.l],
    conversionType: 'getCells',
  },
  {
    prop: 'cr',
    properties: [prop.r],
    conversionType: 'getCells',
  },
  {
    prop: 'cx',
    properties: [prop.l, prop.r],
    propertyTwo: 'right',
    conversionType: 'getCells',
  },
  {
    prop: 'cy',
    properties: [prop.t, prop.b],
    conversionType: 'getCells',
  },

  // layer
  {
    prop: 'position',
    properties: [prop.position],
  },
  {
    prop: 'z',
    properties: [prop.z],
  },
]
