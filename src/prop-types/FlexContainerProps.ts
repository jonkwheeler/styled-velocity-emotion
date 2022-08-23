import { ElementProps } from '../components/Element'

export interface FlexContainerProps extends ElementProps {
  /**
   * columns
   * @desc Number of columns in a flex container
   * @type number | object
   * @example
   * columns={5}
   * columns={{ 0: 1, 768: 2, 1440: 3 }}
   */
  columns?: number | object

  /**
   * direction
   * @returns flex-direction css property
   * @type object | 'row' | 'column'
   * @example
   * direction='row'
   * direction={{ 0: 'row', 768: 'column' }}
   */
  direction?: object | 'row' | 'column'

  /**
   * wrap
   * @returns flex-wrap css property
   * @type object | 'wrap' | 'nowrap'
   * @example
   * wrap='wrap'
   * wrap={{ 0: 'wrap', 768: 'nowrap' }}
   */
  wrap?: object | 'wrap' | 'nowrap'

  /**
   * align
   * @returns justify-content css property (horizontal justification)
   * @type object | 'left' | 'center' | 'middle' | 'right' | 'space-between' | 'space-around'
   * @example
   * align='left'
   * align={{ 0: 'left', 768: 'center' }}
   */
  align?: object | 'left' | 'center' | 'middle' | 'right' | 'space-between' | 'space-around'

  /**
   * valign
   * @returns align-items css property (vertical justification)
   * @type object | 'top' | 'middle' | 'center' | 'bottom' | 'baseline' | 'stretch' | 'space-between' | 'space-around'
   * @desc 'center' and 'middle' return the same thing
   * @example
   * valign='center'
   * valign={{ 0: 'middle', 768: 'space-between' }}
   */
  valign?: object | 'top' | 'middle' | 'center' | 'bottom' | 'baseline' | 'stretch' | 'space-between' | 'space-around'

  /**
   * valignContent
   * @returns align-content css property (vertical justification when flex container has height greater than children)
   * @type string | object | 'top' | 'middle'| 'center' | 'bottom' | 'baseline' | 'stretch' | 'space-between' | 'space-around'
   * @example
   * valignContent='center'
   * valignContent={{ 0: 'middle', 768: 'space-between' }}
   */
  valignContent?:
    | string
    | object
    | 'top'
    | 'middle'
    | 'center'
    | 'bottom'
    | 'baseline'
    | 'stretch'
    | 'space-between'
    | 'space-around'
}
