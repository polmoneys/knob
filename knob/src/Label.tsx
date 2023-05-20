import { CSSProperties, ReactNode } from 'react'
import { Fill } from './Knob'
import styles from './index.module.css'

export type LabelItems = {
  name: string
  angle?: `${string}deg`
  node?: ReactNode
}[]

interface LabelsProps {
  items: LabelItems
  rotation: string
  fill: Fill
}

const Labels = (props: LabelsProps) => {
  const { items, rotation, fill = '#666' } = props
  const totalItems = items.length
  const evenAngleSpacing = 360 / totalItems
  const rotationNumber = parseInt(rotation, 10)

  const closestIndex = items.reduce((prev, curr, index) => {
    const currAngle = curr.angle
      ? parseInt(curr.angle, 10)
      : index * evenAngleSpacing
    const prevAngle = items[prev].angle
      ? parseInt(items[prev].angle!, 10)
      : prev * evenAngleSpacing
    const rotationWithOffset = (rotationNumber - 90 + 360) % 360
    const currDiff = ((currAngle - rotationWithOffset + 180) % 360) - 180
    const prevDiff = ((prevAngle - rotationWithOffset + 180) % 360) - 180
    return Math.abs(currDiff) < Math.abs(prevDiff) ? index : prev
  }, 0)

  return (
    <div className={styles.labels} data-knob="label">
      {items.map((item, index) => {
        const angle = item.angle ? item.angle : `${index * evenAngleSpacing}deg`
        return (
          <div
            key={index}
            style={
              {
                '--angle': angle,
                color: index === closestIndex ? fill : undefined,
              } as CSSProperties
            }
            data-label={`label-${index}`}
          >
            {item.node ? item.node : item.name}
          </div>
        )
      })}
    </div>
  )
}

export default Labels
