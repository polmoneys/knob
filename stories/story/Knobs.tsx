import { Fragment, ReactNode } from 'react'
import {
  gradientClock,
  gradientCardinal,
  gradientRetro,
  clockLabels,
} from './utils'
import Knob, { Gradient } from '../../knob/src/Knob'

const Default = ({ width = '60px', disabled = false }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    fill="currentColor"
    circle={{ fill: '#fff', radius: 8 }}
    progress={{
      interval: 2,
      colorStops: [
        { color: 'pink', stop: 45 },
        { color: 'orange', stop: 110 },
        { color: 'orangered', stop: 190 },
        { color: 'red', stop: 360 },
      ],
    }}
    onRotate={rot => console.log({ rot })}
  />
)

const Tiny = ({ width = '60px', disabled = false }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    fill="currentColor"
    circle={{ fill: '#fff', radius: 12 }}
    progress={{
      interval: 2,
      colorStops: [
        { color: 'pink', stop: 45 },
        { color: 'orangered', stop: 90 },
        { color: 'red', stop: 360 },
      ],
    }}
    onRotate={rot => console.log({ rot })}
  />
)

const Progress5 = ({ width = '60px', disabled = false }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    circle={{ fill: 'orangered', radius: 8 }}
    progress={{
      interval: 20,
      colorStops: [
        { color: 'pink', stop: 90 },
        { color: 'orangered', stop: 270 },
        { color: 'red', stop: 360 },
      ],
    }}
    fill="#ddd"
    onRotate={rot => console.log({ rot })}
  />
)

const Progress10 = ({ width = '60px', disabled = false }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    fill="#888"
    circle={{ fill: '#fff', radius: 12 }}
    onRotate={rot => console.log({ rot })}
    progress={{
      interval: 10,
      colorStops: [
        { color: 'pink', stop: 20 },
        { color: 'orangered', stop: 150 },
        { color: 'red', stop: 360 },
      ],
    }}
  />
)

const Temp = ({ width = '60px', disabled = false }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    labels={{
      fill: 'red',
      items: [
        { name: 'T', angle: '270deg' },
        { name: '10ºC', angle: '0deg' },
        { name: 'TEMPERED', angle: '90deg' },
        { name: 'HOT', angle: '180deg' },
        { name: 'BURN', angle: '240deg' },
      ],
    }}
    gradient="conic-gradient( from 0deg at center, #7498ff 0%, #ff90d0 50%, #ff3674 100%)"
    circle={{ fill: 'currentColor', radius: 10 }}
    onRotate={rot => console.log({ rot })}
  />
)
const Emoji = ({ width = '60px', disabled = false }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    circle={{ radius: 10 }}
    labels={{
      fill: '#777',
      items: [
        {
          node: <span className="emoji">👾</span>,
          name: '',
          angle: '270deg',
        },
        {
          node: <span className="emoji">👛</span>,
          name: '',
          angle: '300deg',
        },
        {
          node: <span className="emoji">🧵</span>,
          name: '',
          angle: '330deg',
        },
        {
          node: <span className="emoji">🕶</span>,
          name: '',
          angle: '0deg',
        },
        {
          node: <span className="emoji">🫀</span>,
          name: '',
          angle: '30deg',
        },
        {
          node: <span className="emoji">🧠</span>,
          name: '',
          angle: '60deg',
        },
        {
          node: <span className="emoji">👾</span>,
          name: '',
          angle: '90deg',
        },
        {
          node: <span className="emoji">👀</span>,
          name: '',
          angle: '120deg',
        },
        {
          node: <span className="emoji">🦷</span>,
          name: '',
          angle: '150deg',
        },
        {
          node: <span className="emoji">😈</span>,
          name: '',
          angle: '180deg',
        },
        {
          node: <span className="emoji">💩</span>,
          name: '',
          angle: '210deg',
        },
        {
          node: <span className="emoji">☠️</span>,
          name: '',
          angle: '240deg',
        },
      ],
    }}
    fill="#aaa"
    onRotate={rot => console.log({ rot })}
  />
)
const PopDot = ({ width = '60px', disabled = false }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    gradient="#ccc"
    className="knob-pop"
    circle={{ fill: '#444', radius: 14, y: 26 }}
    onRotate={rot => console.log({ rot })}
  />
)
const PullDot = ({ width = '60px', disabled = false }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    gradient="#ccc"
    className="knob-pull"
    circle={{ fill: '#444', radius: 10, y: 26 }}
    onRotate={rot => console.log({ rot })}
  />
)

const PullLine = ({ width = '60px', disabled = false, grrr }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    gradient="#ccc"
    className="knob-pull"
    circle={{ fill: 'transparent', radius: 1 }}
    line={{ stroke: 'red', strokeWidth: 6 }}
    onRotate={rot => console.log({ rot })}
    data-t={grrr ? 'yes' : ''}
  />
)

const PopLine = ({ width = '60px', disabled = false }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    gradient="#ccc"
    className="knob-pop"
    circle={{ fill: 'transparent', radius: 1 }}
    line={{ stroke: 'red', strokeWidth: 6, size: 93 }}
    onRotate={rot => console.log({ rot })}
  />
)
const Conic = ({ width = '60px', disabled = false }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    gradient="conic-gradient(from 0deg at center,  #ff9a9a 0%, 25%, #ff5f5f 25%, 50%, #ff2e2e 50%, 75%, #ce0707 75%, 100%, #aa0a0a 100%)"
    clipPath="48%"
    circle={{ fill: '#ff0000', radius: 16 }}
    onRotate={rot => console.log({ rot })}
  />
)

const Clock = ({ width = '60px', disabled = false }: any) => (
  <Knob
    disabled={disabled}
    width={width}
    gradient={gradientClock}
    circle={{ radius: 10 }}
    onRotate={rot => console.log({ rot })}
    labels={{ items: clockLabels, fill: 'orangered' }}
  />
)

export type Demo =
  | 'default'
  | 'tiny'
  | 'progress5'
  | 'progress10'
  | 'temp'
  | 'emoji'
  | 'popdot'
  | 'pull-dot'
  | 'pull-line'
  | 'pop-line'
  | 'conic'
  | 'clock'

function Knobs({
  name,
  disabled,
  width,
  grrr,
}: {
  name: Demo
  disabled?: boolean
  width?:
    | `${string}%`
    | `${string}px`
    | `${string}fr`
    | `${string}vw`
    | `calc(${string})`
  grrr?: boolean
}) {
  const icon: Record<Demo, ReactNode> = {
    default: <Default disabled={disabled} width={width} />,
    tiny: <Tiny disabled={disabled} width={width} />,
    progress5: <Progress5 disabled={disabled} width={width} />,
    progress10: <Progress10 disabled={disabled} width={width} />,
    temp: <Temp disabled={disabled} width={width} />,
    emoji: <Emoji disabled={disabled} width={width} />,
    popdot: <PopDot disabled={disabled} width={width} />,
    'pull-dot': <PullDot disabled={disabled} width={width} />,
    'pop-line': <PopLine disabled={disabled} width={width} />,
    'pull-line': <PullLine disabled={disabled} width={width} grrr={grrr} />,
    conic: <Conic disabled={disabled} width={width} />,
    clock: <Clock disabled={disabled} width={width} />,
  }

  return <Fragment>{icon[name]}</Fragment>
}

export default Knobs
