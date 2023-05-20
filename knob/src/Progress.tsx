import { Fragment, useCallback } from 'react'
import { Fill } from './Knob'

interface ColorStop {
  color: Fill
  stop: number
}

export interface ProgressInterface {
  rotation?: number
  size?: number
  interval?: number
  colorStops?: ColorStop[]
  strokeWidth?: number
}

const Progress = (props: ProgressInterface) => {
  const {
    size = 200,
    interval = 5,
    rotation = 0,
    colorStops = [],
    strokeWidth = 7,
  } = props

  const createLines = useCallback(() => {
    const numLines = 100 / interval
    const rotatedLines = rotation / (360 / numLines)
    const center = size / 2
    const lineLength = 10
    const lineStart = (size - lineLength) / 2
    const lineEnd = (size + lineLength) / 2

    let lines = []
    for (let i = 0; i < numLines; i++) {
      const angle = (i * (2 * Math.PI)) / numLines - Math.PI / 2
      const x1 = center + lineStart * Math.cos(angle)
      const y1 = center + lineStart * Math.sin(angle)
      const x2 = center + lineEnd * Math.cos(angle)
      const y2 = center + lineEnd * Math.sin(angle)

      let strokeColor = 'currentColor'
      if (i <= rotatedLines) {
        strokeColor =
          colorStops.find(cs => i <= cs.stop / (360 / numLines))?.color ??
          'currentColor'
      }

      lines.push(
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />,
      )
    }
    return lines
  }, [size, interval, rotation, colorStops])

  return <Fragment>{createLines()}</Fragment>
}

export default Progress
