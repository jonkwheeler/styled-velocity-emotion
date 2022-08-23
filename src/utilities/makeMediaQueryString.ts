export function makeMediaQueryString({
  minWidth,
  maxWidth,
}: {
  minWidth?: string | number | undefined
  maxWidth?: string | number | undefined
}) {
  return `@media ${minWidth ? `(min-width: ${minWidth}px)` : ''}${minWidth && maxWidth ? ' and ' : ''}${
    maxWidth ? `(max-width: ${maxWidth}px)` : ''
  }`
}
