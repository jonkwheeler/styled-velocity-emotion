export function createPropKeys(props) {
  const keys = {}

  for (let i = 0; i < props.length; i++) {
    const { prop, ...rest } = props[i]
    keys[prop] = { prop, ...rest }
  }

  return keys
}
