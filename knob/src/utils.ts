export const DEFAULTS: {
  ZERO: number
  NULL: null
  SVG_ORIGIN: number
  SIZE: number
} = Object.freeze({
  ZERO: 0,
  NULL: null,
  SVG_ORIGIN: 100,
  SIZE: 200,
})

const ROTATION_OFFSET = 90

const mod = (n: number, m: number) => {
  return ((n % m) + m) % m
}

export const calculateRotation = (
  pointerX: number,
  pointerY: number,
  rotationOrigin: { x: number; y: number },
) => {
  return mod(
    (Math.atan2(pointerY - rotationOrigin.y, pointerX - rotationOrigin.x) *
      180) /
      Math.PI +
      ROTATION_OFFSET,
    360,
  )
}

export const clamp = (a: number, min = 0, max = 1): number =>
  Math.min(max, Math.max(min, a))
