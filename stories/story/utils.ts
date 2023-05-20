import { LabelItems } from '../../knob/src/Label'

const coverMassive = `radial-gradient(farthest-side circle, 
            transparent 1vmin,#FFF 0, 
            #FFF 90%, transparent 0 ),`

const massiveDeg = 30 // 90 is cool
const massive = `
  ${coverMassive} 
            repeating-conic-gradient( transparent 0deg, 
              #000 0deg, #000 1deg, transparent 1deg, 
              transparent ${massiveDeg}deg ) `

// like clipPath:circle
const coverDetail = `radial-gradient( farthest-side circle, 
                #FFF 95%, transparent 0 ) `

const detailDeg = 6 // lower the more ticks min 2 max 40
const detail = `
             ${coverDetail},
            repeating-conic-gradient( transparent 0deg, 
              #CCC 0deg, #CCC 1deg,transparent 1deg,transparent ${detailDeg}deg )`
export const gr = `
              ${massive},
              ${detail}
              `

export const gradientClock =
  'radial-gradient( farthest-side circle, #ddd .2em,#FFF 0, #FFF 90%, transparent 0 ), repeating-conic-gradient( transparent 0deg, #000 0deg, #000 1deg, transparent 1deg, transparent 30deg ), radial-gradient( farthest-side circle, #FFF 95%, transparent 0 ), repeating-conic-gradient( transparent 0deg, #CCC 0deg, #CCC 1deg,transparent 1deg, transparent 6deg )'

export const gradientCardinal = `${coverMassive} repeating-conic-gradient( transparent 0deg, 
              #000 0deg, #000 1deg, transparent 1deg, 
              transparent 90deg ) `

export const gradientRetro = `
             radial-gradient( farthest-side circle, 
                #FFF 80%, transparent 0 ),
            repeating-conic-gradient( transparent 0deg, 
              #CCC 0deg, #CCC 1deg,transparent 1deg,transparent 4deg )`

export const gradientRetro2 = `
             radial-gradient( farthest-side circle, 
                #FFF 84%, transparent 0 ),
            repeating-conic-gradient( transparent 0deg, 
              #222 0deg, #222 2deg,transparent 2deg,transparent 10deg )`

export const clockLabels: LabelItems = [
  { name: '12:00', angle: '270deg' },
  { name: '1:00', angle: '300deg' },
  { name: '2:00', angle: '330deg' },
  { name: '3:00', angle: '0deg' },
  { name: '4:00', angle: '30deg' },
  { name: '5:00', angle: '60deg' },
  { name: '6:00', angle: '90deg' },
  { name: '7:00', angle: '120deg' },
  { name: '8:00', angle: '150deg' },
  { name: '9:00', angle: '180deg' },
  { name: '10:00', angle: '210deg' },
  { name: '11:00', angle: '240deg' },
]
