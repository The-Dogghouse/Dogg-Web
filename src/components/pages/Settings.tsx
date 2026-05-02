interface SettingsProps {
  cursorEnabled: boolean
  onCursorToggle: (enabled: boolean) => void
}

export function Settings({cursorEnabled, onCursorToggle}: SettingsProps) {
  return (
    <section style={{display: 'flex', alignItems: 'center', gap: 8, width: '100%'}}>
      <fieldset style={{width: '100%', marginTop: '1rem'}}>
        <legend>Display</legend>
        <input
          id={"cursor-toggle"}
          type="checkbox"
          checked={cursorEnabled}
          onChange={e => {
            onCursorToggle(e.target.checked);
            localStorage.setItem('cursorEnabled', e.target.checked.toString())
          }}
        />
        <label htmlFor={"cursor-toggle"}
               style={{display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'}}>
          Custom cursor
        </label>
      </fieldset>
    </section>
  )
}