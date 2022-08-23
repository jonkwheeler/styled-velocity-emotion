export function makeScalingPxString({
  minValue,
  maxValue,
  minWidth = 0,
  maxWidth = 9999,
}: {
  minValue: number
  maxValue: number
  minWidth: number
  maxWidth: number
}) {
  return `calc(${minValue}px + ${maxValue - minValue} * (100vw - ${minWidth}px) / ${maxWidth - minWidth + 1})`
}
