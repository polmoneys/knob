## TLDR

Pondering (🌶 take) bringing back **knobs** to interfaces. Exploring a **POC** to share with the team. 

## Overview 

A wrapper over lightweight **gsap/MotionPathPlugin** and **gsap/Draggable**. 

```ts 

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

type KnobProps = FillKnobProps | GradientKnobProps

```

## Get started

To get data out you can use:

```ts
  // ...
  onRotate: (rotation: number | string) => void

```

You can also **render prop** if **progress** or **labels** are not enough for the requirements. 

```ts
  children?: (rotation: string) => JSX.Element
  //...
```

## User feedback

We can either use the built in **progress** to lay ticks along the circle at a custom interval or use **labels** to render any element at a specific degree. Both routes gives you extra props to customize **active label** or add **color stops** to make progress more granular. 

Two more elements for your consideration are **line** and **circle**, both are the **draggable** part of the knob and provide can be styled with props like **radius** and **y**...

## Customize

Two suggestions and one escape hatch. Some context:

```ts

type Fill =
  | `#${string}`
  | `rgb(${string})`
  | `rgba(${string})`
  | 'currentColor'
  | 'transparent'
  // for debug/demo purposes
  | 'pink'
  | 'orange'
  | 'orangered'
  | 'red'

type Gradient =
  | `linear-gradient(${string})`
  | `radial-gradient(${string}`
  | `conic-gradient(${string}`
  | `repeating-conic-gradient(${string}`
  | Fill

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

```

Most likely you can do with providing **fill** prop or a combination of **gradient** & **clipPath**. 

If more flexibility is needed add a **className** and overwrite to your will. 

### Inspiration

> Our requirements are more modest but at the same time more responsible:
> buildings, furniture, drinking glasses may well be consumer items that
> we can destroy without regret after they have served for some short or
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic
> enjoyment from observing them in use.

Erik Gunnar Asplund on **Swedish Grace**.

