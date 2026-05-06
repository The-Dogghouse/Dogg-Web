import calendarIcon from '../../assets/calendar-icon.png'
import archipelagoIcon from '../../assets/archipelago-logo.png'
import gameIcon from '../../assets/plate-up-logo.png'

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

            <h4>Wednesday - 8pm</h4>
            <img style={{maxWidth: "256px", maxHeight: "128px", alignSelf: 'center', imageRendering: 'pixelated'}} src={gameIcon} alt={"Icon for the Wednesday game"} />
            <p style={{marginTop: '1rem'}}>
                Join members of the Dogghouse as we get our kitchen certifications faster then what should be legally
                possible. Embark on a friendship testing journey as we chop onions, extinguish fires, and stretch the
                definition of 'well-done' long enough to get shut down because we forgot a single piece of broccoli
            </p>

            <h4>Monday - 7pm</h4>
            <img style={{maxWidth: "256px", maxHeight: "128px", alignSelf: 'center', imageRendering: 'pixelated'}} src={archipelagoIcon} alt="Icon of Archipelago"/>
            <p style={{marginTop: '1rem'}}>
                Join members of the Dogghouse as we make a huge mess of the visions of several game developers,
                work with limited tools across multiple games, and support each other with random bundles of cash
                and seashells, only to die because someone pressed CTRL+Z in Paint
            </p>
        </fieldset>

    </section>
  );
}