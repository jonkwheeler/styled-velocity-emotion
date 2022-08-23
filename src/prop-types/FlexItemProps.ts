import { SharedProps } from './SharedProps'

export interface FlexItemProps extends SharedProps {
  /**
   * @returns align-self css property
   * @type object | 'top' | 'bottom' | 'center' | 'middle' | 'stretch'
   * @example
   * alignSelf='top'
   * alignSelf={{ 0: 'top', 768: 'bottom' }}
   */
  alignSelf?: object | 'top' | 'bottom' | 'center' | 'middle' | 'stretch'

  /**
   * grow
   * @returns flex-grow css property
   * @type string | number | object
   * @example
   * grow={1}
   * grow={{ 0: 1, 768: 0 }}
   */
  grow?: boolean | object

  /**
   * shrink
   * @returns flex-shrink css property
   * @type string | number | object
   * @example
   * shrink={0}
   * shrink={{ 0: 1, 768: 0 }}
   */
  shrink?: boolean | object

  /**
   * order
   * @returns order css property
   * @type string | number | object
   * @example
   * order={0}
   * order={{ 0: 1, 768: -1 }}
   */
  order?: string | number | object
}
