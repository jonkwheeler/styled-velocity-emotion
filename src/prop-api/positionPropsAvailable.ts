const schema = {
  t: 'top',
  b: 'bottom',
  r: 'right',
  l: 'left',
  position: 'position',
  z: 'zIndex',
}

export const positionPropsAvailable = {
  //position
  t: {
    properties: [schema.t],
  },
  b: {
    properties: [schema.b],
  },
  l: {
    properties: [schema.l],
  },
  r: {
    properties: [schema.r],
  },
  x: {
    properties: [schema.l, schema.r],
  },
  y: {
    properties: [schema.t, schema.b],
    propertyTwo: 'bottom',
  },

  // cell
  ct: {
    properties: [schema.t],
    conversionType: 'getCells',
  },
  cb: {
    properties: [schema.b],
    conversionType: 'getCells',
  },
  cl: {
    properties: [schema.l],
    conversionType: 'getCells',
  },
  cr: {
    properties: [schema.r],
    conversionType: 'getCells',
  },
  cx: {
    properties: [schema.l, schema.r],
    conversionType: 'getCells',
  },
  cy: {
    properties: [schema.t, schema.b],
    conversionType: 'getCells',
  },

  // layer
  position: {
    properties: [schema.position],
  },
  z: {
    properties: [schema.z],
  },
  zIndex: {
    properties: [schema.z],
  },
}
