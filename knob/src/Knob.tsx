import {
  useState,
  useEffect,
  useRef,
  CSSProperties,
  ComponentProps,
  useMemo,
} from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { Draggable } from 'gsap/Draggable'
import Labels, { LabelItems } from './Label'
import Line, { LineInterface } from './Line'
import Background from './Background'
import Circle, { CircleInterface } from './Circle'
import Progress, { ProgressInterface } from './Progress'
import { DEFAULTS, calculateRotation } from './utils'
import styles from './index.module.css'

gsap.registerPlugin(MotionPathPlugin, Draggable)

export type Fill =
  | `#${string}`
  | `rgb(${string})`
  | `rgba(${string})`
  | 'pink'
  | 'orange'
  | 'orangered'
  | 'red'
  | 'currentColor'
  | 'transparent'

export type Gradient =
  | `linear-gradient(${string})`
  | `radial-gradient(${string}`
  | `conic-gradient(${string}`
  | `repeating-conic-gradient(${string}`
  | Fill

interface CommonKnobProps extends Omit<ComponentProps<'div'>, 'children'> {
  children?: (rotation: string) => JSX.Element
  onRotate: (rotation: number | string) => void
  width?:
    | `${string}%`
    | `${string}px`
    | `${string}fr`
    | `${string}vw`
    | `calc(${string})`
  circle?: CircleInterface
  line?: LineInterface
  labels?: { items: LabelItems; fill: Fill }
  progress?: ProgressInterface
  disabled?: boolean
}

interface FillKnobProps extends CommonKnobProps {
  fill: Fill
  gradient?: never
  clipPath?: never
}

interface GradientKnobProps extends CommonKnobProps {
  fill?: never
  gradient: Gradient
  clipPath?: `${string}%`
}

export type KnobProps = FillKnobProps | GradientKnobProps

const Knob = (props: KnobProps) => {
  const {
    children,
    onRotate,
    width = `${DEFAULTS.SIZE}px`,
    className,
    circle,
    line,
    progress,
    labels,
    fill,
    gradient,
    clipPath,
    disabled = false,
    ...rest
  } = props

  const [rotation, setRotation] = useState(DEFAULTS.ZERO)
  const svgRef = useRef<SVGSVGElement>(DEFAULTS.NULL)
  const knobRef = useRef<SVGCircleElement>(DEFAULTS.NULL)

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (svgRef.current && knobRef.current) {
        gsap.set(knobRef.current, {
          svgOrigin: `${DEFAULTS.SVG_ORIGIN} ${DEFAULTS.SVG_ORIGIN}`,
        })

        const draggable = Draggable.create(knobRef.current, {
          type: 'rotation',
          onPressInit: function () {
            if (!this.rotationOrigin || disabled) {
              return
            }
            const rotation = calculateRotation(
              this.pointerX,
              this.pointerY,
              this.rotationOrigin,
            )

            setRotation(rotation)
            gsap.set(this.target, { rotation: rotation.toFixed(0) })
          },
          onPress: function () {
            const rotation = calculateRotation(
              this.pointerX,
              this.pointerY,
              this.rotationOrigin,
            )

            setRotation(rotation)
          },
          onDrag: function () {
            const rotation = calculateRotation(
              this.pointerX,
              this.pointerY,
              this.rotationOrigin,
            )

            setRotation(rotation)
          },
          onDragEnd: function (event) {
            draggable.endDrag(event)
          },
        })[0]
      }
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (rotation !== 0) {
      onRotate(rotation.toFixed(0))
    }
  }, [rotation, onRotate])

  const options: Record<
    'labels' | 'progress' | 'gradient' | 'background' | 'line' | 'circle',
    boolean
  > = useMemo(
    () => ({
      labels: labels !== undefined,
      progress: progress !== undefined,
      gradient: gradient !== undefined,
      background: fill !== undefined,
      line: line !== undefined,
      circle: circle !== undefined,
    }),
    [labels, progress, gradient, line, circle],
  )

  return (
    <div
      className={[styles.group, disabled && styles.disabled, className]
        .filter(Boolean)
        .join(' ')}
      style={
        {
          '--width': width,
          ...(options.gradient && {
            '--background': gradient,
            '--clipPath': clipPath,
            '--end': `${rotation.toFixed(0)}deg`,
          }),
        } as CSSProperties
      }
      {...rest}
    >
      <svg ref={svgRef} viewBox={`0 0 ${DEFAULTS.SIZE} ${DEFAULTS.SIZE}`}>
        {options.background && <Background fill={fill} />}
        <g ref={knobRef}>
          {options.circle && (
            <Circle
              radius={circle?.radius}
              fill={circle?.fill}
              opacity={circle?.opacity}
              y={circle?.y}
            />
          )}
          {options.line && (
            <Line
              stroke={line?.stroke}
              strokeWidth={line?.strokeWidth}
              size={line?.size}
            />
          )}
        </g>
        {options.progress && (
          <g className={styles.ruler}>
            <Progress
              size={DEFAULTS.SIZE}
              interval={progress?.interval}
              colorStops={progress?.colorStops}
              strokeWidth={progress?.strokeWidth}
              rotation={rotation}
            />
          </g>
        )}
      </svg>
      {options.labels && (
        <Labels
          rotation={rotation.toFixed(0)}
          items={labels!.items}
          fill={labels!.fill}
        />
      )}
      {children?.(rotation.toFixed(0))}
    </div>
  )
}

export default Knob
