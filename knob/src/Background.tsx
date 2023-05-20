import { Fill } from './Knob'

export interface BackgroundInterface {
  fill?: Fill
}
const Background = (props: BackgroundInterface) => {
  const { fill = 'currentColor' } = props

  return <circle pathLength={1} cx={100} cy={100} fill={fill} r={'44%'} />
}

export default Background
