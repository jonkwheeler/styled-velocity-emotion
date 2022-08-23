import { convertValue } from './convertValue'

export function addStyleToObj({
  properties = [],
  value,
  styleObj,
  conversionType,
}: {
  properties?: string[]
  value: string | number
  styleObj: Record<string, unknown>
  conversionType?: string | undefined
}) {
  if (styleObj && value) {
    for (let p = 0; p < properties.length; p++) {
      const property = properties[p]

      styleObj[property] = conversionType ? convertValue({ conversionType, value }) : value
    }
  }
}
