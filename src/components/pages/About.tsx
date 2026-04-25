import dogghouseLogo from '../../assets/logo.png'

export function About() {
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
              <td style={{ padding: '2px 8px' }}>Members</td>
              <td><strong>55</strong></td>
            </tr>
            <tr>
              <td style={{ padding: '2px 8px' }}>Founded</td>
              <td><strong>January 2019</strong></td>
            </tr>
            <tr>
              <td style={{ padding: '2px 8px' }}>Status</td>
              <td><strong style={{ color: 'green' }}>● Online</strong></td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </section>
  )
}
