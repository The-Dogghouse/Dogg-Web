import {useEffect, useState} from "react";
import dogghouseLogo from '../../assets/logo.png'

const GUILD_INFO_URL = "https://discord.com/api/guilds/537011097824395274/widget.json";
const POLL_INTERVAL_MS = 60 * 1000;

interface GuildWidget {
  presence_count: number;
}

export function About() {
    const [widget, setWidget] = useState<GuildWidget | null>(null);

    useEffect(() => {
        const fetchWidget = () => {
            fetch(GUILD_INFO_URL)
                .then(response => response.json())
                .then((data: GuildWidget) => setWidget(data))
                .catch(error => {console.error("Error fetching guild widget:", error); setWidget(null)});
        };

        fetchWidget();
        const interval = setInterval(fetchWidget, POLL_INTERVAL_MS);
        return () => clearInterval(interval);
    }, []);

  return (
    <section style={{ padding: 12 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
        <img src={dogghouseLogo} alt="DoggHouse Logo" />
        <div>
          <h2>Welcome to the Dogghouse</h2>
          <p>
            The official homepage of the Dogghouse Discord community
          </p>
        </div>
      </div>

      <fieldset>
        <legend>About Us</legend>
        <p>
          The greatest minds of a generation that get together and
          break every single thing we touch, about once a week
        </p>
      </fieldset>

      <fieldset style={{ marginTop: 8 }}>
        <legend>Server Stats</legend>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '2px 8px' }}>Members Online</td>
              <td><strong style={{ color: 'green' }}>● {widget?.presence_count ?? 'loading...'}</strong></td>
            </tr>
            <tr>
              <td style={{ padding: '2px 8px' }}>Founded</td>
              <td><strong>January 2019</strong></td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </section>
  )
}
