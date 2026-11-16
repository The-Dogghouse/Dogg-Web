import archipelagoIcon from '../../assets/archipelago-logo.png'
import pastEventsIcon from '../../assets/past-events-icon.png'
import plateUpIcon from '../../assets/plate-up-logo.png'
import minecraftIcon from '../../assets/minecraft-logo.png'

interface PastEvent {
  name: string
  slot: string
  ran: string
  icon: string
  alt: string
  blurb: string
}

const PAST_EVENTS: PastEvent[] = [
  {
    name: 'Minecraft',
    slot: 'Wednesday - 8pm',
    ran: 'Retired TBD',
    icon: minecraftIcon,
    alt: 'Icon for Minecraft',
    blurb: `Members of the Dogghouse larped as professional survivalists while living in dirt holes,
      got derailed for three hours establishing a complex storage system for wheat, established at best
      questionably ethical villager 'communities', built amalgamations of cogs and belts that cannot be
      comprehended by the human mind, only to lose it all by staging a robbery of a bunch of Nether Pigs.`,
  },
  {
    name: 'Plate Up',
    slot: 'Wednesday - 8pm',
    ran: 'Retired 2026',
    icon: plateUpIcon,
    alt: 'Icon of Plate Up',
    blurb: `Members of the Dogghouse got their kitchen certifications faster then what should be legally
      possible. A friendship testing journey of chopping onions, extinguishing fires, and stretching the
      definition of 'well-done' long enough to get shut down because we forgot a single piece of broccoli`,
  },
  {
    name: 'Archipelago 2026',
    slot: 'Monday - 8pm',
    ran: 'Retired 2026',
    icon: archipelagoIcon,
    alt: 'Icon of Archipelago',
    blurb: `Join members of the Dogghouse as we make a huge mess of the visions of several game developers,
    work with limited tools across multiple games, and support each other with random bundles of cash
    and seashells, only to die because someone pressed CTRL+Z in Paint`,
  },
]

export function History() {
  return (
    <section>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
        <img
          src={pastEventsIcon}
          alt="Icon of a calendar with a dog"
          style={{marginRight: '1rem'}}
        />
        <h2>History</h2>
      </div>

      <fieldset>
        <legend>About</legend>
        <p>
          Games that have had their run in the Dogghouse. When a game
          ends a poll picks the next one, and the old one gets filed
          away here for posterity.
        </p>
      </fieldset>

      <fieldset style={{display: 'flex', flexDirection: 'column'}}>
        <legend>Retired Games</legend>

        {PAST_EVENTS.length === 0 ? (
          <p>Nothing retired yet. Check back after the next poll.</p>
        ) : (
          PAST_EVENTS.map((event, index) => (
            <div key={event.name} style={{display: 'flex', flexDirection: 'column', marginTop: index === 0 ? 0 : '1.5rem'}}>
              <h4>{event.name}</h4>
              <img
                style={{maxWidth: "256px", maxHeight: "128px", alignSelf: 'center', imageRendering: 'pixelated'}}
                src={event.icon}
                alt={event.alt}
              />
              <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
                <tbody>
                  <tr>
                    <td style={{padding: '2px 8px'}}>Slot</td>
                    <td><strong>{event.slot}</strong></td>
                  </tr>
                  <tr>
                    <td style={{padding: '2px 8px'}}>Status</td>
                    <td><strong>{event.ran}</strong></td>
                  </tr>
                </tbody>
              </table>
              <p style={{marginTop: '1rem'}}>{event.blurb}</p>
            </div>
          ))
        )}
      </fieldset>
    </section>
  );
}
