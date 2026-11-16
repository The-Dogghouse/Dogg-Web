import calendarIcon from '../../assets/calendar-icon.png'
import archipelagoIcon from '../../assets/archipelago-logo.png'
import zomboidIcon from '../../assets/zomboid.png'

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
            <img style={{maxWidth: "347px", alignSelf: 'center', imageRendering: 'pixelated'}} src={zomboidIcon} alt={"Icon for the Wednesday game"} />
            <p style={{marginTop: '1rem'}}>
                Join members of the Dogghouse as we return to Knox Country. Experience the no longer invisible animals.
                Explore new basements, floors and bunkers. Try your hand in building up a whole medieval economy of
                blacksmiths and pottery. Only to die in a high-speed car accident because a pole appeared 6 feet in
                front of you in the middle of the highway
            </p>

            <h4 style={{marginTop: '1.5rem'}}>Monday - 8pm</h4>
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