const schema = {
  align: 'justifyContent',
  direction: 'flexDirection',
  grow: 'flexGrow',
  order: 'order',
  shrink: 'flexShrink',
  valign: 'alignItems',
  valignContent: 'alignContent',
  wrap: 'flexWrap',
}

export const flexPropsAvailable = {
  direction: {
    properties: [schema.direction],
    conversionType: 'getFlexProperty',
  },
  wrap: {
    properties: [schema.wrap],
  },
  align: {
    properties: [schema.align],
    conversionType: 'getFlexProperty',
  },
  valign: {
    properties: [schema.valign],
    conversionType: 'getFlexProperty',
  },
  valignContent: {
    properties: [schema.valignContent],
    conversionType: 'getFlexProperty',
  },
  order: {
    properties: [schema.order],
  },
  grow: {
    properties: [schema.grow],
  },
  shrink: {
    properties: [schema.shrink],
  },
}
