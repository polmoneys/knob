import { clamp, DEFAULTS } from './utils'
import { Fill } from './Knob'

export type LineInterface = {
  strokeWidth?: number
  stroke?: Fill
  size?: number
}

const Line = (props: LineInterface) => {
  const { stroke, size = 10, strokeWidth = 7 } = props

  const points = `${DEFAULTS.SVG_ORIGIN},${DEFAULTS.SVG_ORIGIN} ${
    DEFAULTS.SVG_ORIGIN
  }, ${clamp(size, 8, 93)}`

  return (
    <polyline
      points={points}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  )
}

export default Line
