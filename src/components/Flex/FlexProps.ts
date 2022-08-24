import { ElementProps } from '../Element/ElementProps'

export interface FlexProps extends ElementProps {
  /**
   * columns
   * @desc Number of columns in a flex container
   * @type number | object
   * @example
   * columns={5}
   * columns={{ 0: 1, 768: 2, 1440: 3 }}
   */
  columns?: number | object
}
