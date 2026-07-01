import logo from './corwerx-b.png'
import siteImage from './AdobeStock_748082769.jpeg'

const services = [
  { title: 'Landscape Solutions', icon: LandscapeIcon },
  { title: 'General Contracting', icon: ContractingIcon },
  { title: 'Project Management', icon: ManagementIcon },
  { title: 'Facilities Management', icon: FacilitiesIcon },
]

function LandscapeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 19c3-7 7-11 14-13-2 7-6 11-13 13H5Z" />
      <path d="M8 16c2-1 4-3 6-6" />
    </svg>
  )
}

function ManagementIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="m8 16 2 2 4-5" />
    </svg>
  )
}

function FacilitiesIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 19h16" />
      <path d="M6 19V8l6-3 6 3v11" />
      <path d="M10 19v-5h4v5" />
      <path d="M9 10h1" />
      <path d="M14 10h1" />
    </svg>
  )
}

function ContractingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 18h16" />
      <path d="M7 18V9l5-3 5 3v9" />
      <path d="M9 12h6" />
      <path d="M9 15h4" />
    </svg>
  )
}

function App() {
  return (
    <main className="under-construction-page">
      <div className="site-slice" aria-hidden="true">
        <div
          className="site-slice-image"
          style={{ backgroundImage: `url(${siteImage})` }}
        />
      </div>

      <section className="construction-card" aria-label="Website under construction">
        <div className="brand-frame">
          <img className="brand-image" src={logo} alt="Corwerx logo" />
        </div>

        <h1>Under Construction</h1>

        <section className="services-section" aria-label="What we do">
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h2 className="service-title">
                  <span className="service-icon" aria-hidden="true">
                    <service.icon />
                  </span>
                  <span>{service.title}</span>
                </h2>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default App