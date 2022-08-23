const prop = {
  align: 'justifyContent',
  direction: 'flexDirection',
  grow: 'flexGrow',
  order: 'order',
  shrink: 'flexShrink',
  valign: 'alignItems',
  valignContent: 'alignContent',
  wrap: 'flexWrap',
}

export const flexPropsAvailable = [
  {
    prop: 'direction',
    properties: [prop.direction],
    conversionType: 'getFlexProperty',
  },
  {
    prop: 'wrap',
    properties: [prop.wrap],
  },
  {
    prop: 'align',
    properties: [prop.align],
    conversionType: 'getFlexProperty',
  },
  {
    prop: 'valign',
    properties: [prop.valign],
    conversionType: 'getFlexProperty',
  },
  {
    prop: 'valignContent',
    properties: [prop.valignContent],
    conversionType: 'getFlexProperty',
  },
  {
    prop: 'order',
    properties: [prop.order],
  },
  {
    prop: 'grow',
    properties: [prop.grow],
  },
  {
    prop: 'shrink',
    properties: [prop.shrink],
  },
]
