import calendarIcon from '../../assets/calendar-icon.png'
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
        </fieldset>

    </section>
  );
}