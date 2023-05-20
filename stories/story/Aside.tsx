import Knobs, { Demo } from './Knobs'

function Aside({
  onSelect,
  active,
}: {
  onSelect: (name: Demo) => void
  active: Demo
}) {
  return (
    <aside>
      <div className="grid">
        <div onClick={() => onSelect('default')}>
          <Knobs disabled={active !== 'default'} name="default" />
        </div>

        <div onClick={() => onSelect('tiny')}>
          <Knobs disabled={active !== 'tiny'} width="40px" name="tiny" />
        </div>
        <div onClick={() => onSelect('progress5')}>
          <Knobs disabled={active !== 'progress5'} name="progress5" />
        </div>
        <div onClick={() => onSelect('progress10')}>
          <Knobs disabled={active !== 'progress10'} name="progress10" />
        </div>
        <div onClick={() => onSelect('temp')}>
          <Knobs disabled={active !== 'temp'} name="temp" width="44px" />
        </div>
        <div onClick={() => onSelect('emoji')}>
          <Knobs disabled={active !== 'emoji'} name="emoji" width="40px" />
        </div>
        <div onClick={() => onSelect('popdot')}>
          <Knobs disabled={active !== 'popdot'} name="popdot" />
        </div>
        <div onClick={() => onSelect('pull-dot')}>
          <Knobs disabled={active !== 'pull-dot'} name="pull-dot" />
        </div>
        <div onClick={() => onSelect('pop-line')}>
          <Knobs disabled={active !== 'pop-line'} name="pop-line" />
        </div>
        <div onClick={() => onSelect('pull-line')}>
          <Knobs disabled={active !== 'pull-line'} name="pull-line" />
        </div>
        <div onClick={() => onSelect('conic')}>
          <Knobs disabled={active !== 'conic'} name="conic" />
        </div>

        <div onClick={() => onSelect('clock')}>
          <Knobs disabled={active !== 'clock'} name="clock" />
        </div>
      </div>
    </aside>
  )
}

export default Aside
