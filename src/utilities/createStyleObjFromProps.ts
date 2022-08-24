import { mergePropsToStyleObj } from './mergePropsToStyleObj'

export function createStyleObjFromProps(svProps) {
  if (!svProps) {
    return {}
  }

  const styleObj = {}
  mergePropsToStyleObj({ props: svProps, styleObj })
  return styleObj
}
