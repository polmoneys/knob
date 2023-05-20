import { Fill } from './Knob'
import { clamp } from './utils'

export interface CircleInterface {
  radius?: number
  fill?: Fill
  opacity?: number
  y?: number
}
const Circle = (props: CircleInterface) => {
  const { radius = 10, fill = 'currentColor', opacity = 1, y = 36 } = props
  const rad = clamp(radius, 4, 30)
  const position = clamp(y, 26, 100)
  return <circle cx="100" r={rad} fill={fill} cy={position} opacity={opacity} />
}

export default Circle
