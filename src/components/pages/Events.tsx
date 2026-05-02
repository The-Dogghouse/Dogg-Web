import calendarIcon from '../../assets/calendar-icon.png'
import archipelagoIcon from '../../assets/archipelago-logo.png'

export function Events() {
  return (
    <section>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <img
                src={calendarIcon}
                alt="Icon of a calendar with a dog"
                style={{marginRight: '1rem'}}
            />
            <h2>Events</h2>
        </div>


        <fieldset>
            <legend>About</legend>
            <p>
                Games are typically hosted on Wednesdays
                at 8pm <abbr>EST</abbr> and are chosen
                by a poll when one game ends.
                The poll is open to everyone to
                suggest and vote.
            </p>
        </fieldset>

        <fieldset style={{display: 'flex', flexDirection: 'column'}}>
            <legend>Games</legend>
            <h4>Monday - 7pm</h4>
            <img style={{maxWidth: "256px", maxHeight: "128px", alignSelf: 'center'}} src={archipelagoIcon} alt="Icon of Archipelago"/>
            <p style={{marginTop: '1rem'}}>
                Join members of the Dogghouse as we make a huge mess of the visions of several game developers,
                work with limited tools across multiple games, and support each other with random bundles of cash
                and seashells, only to die because someone pressed CTRL+Z in Paint
            </p>
        </fieldset>

    </section>
  );
}