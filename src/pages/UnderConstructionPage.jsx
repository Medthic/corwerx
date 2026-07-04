import logo from '../assets/brand-mark.png'
import siteImage from '../assets/construction-site.jpeg'
import { ServiceGrid } from '../components/ServiceGrid'
import { services } from '../data/services'

function UnderConstructionPage() {
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

        <h1>Website under constrution</h1>

        <section className="contact-info" aria-label="Contact information">
          <div className="contact-details">
            <p>
              <a href="mailto:estimate@corwerx.com">estimate@corwerx.com</a>
            </p>
          </div>
        </section>

        <section className="services-section" aria-label="What we do">
          <ServiceGrid services={services} />
        </section>

        <div className="location-line" aria-label="Location">
          <span className="location-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" />
              <path d="M12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </span>
          <span>Pittsburgh, PA</span>
        </div>
      </section>
    </main>
  )
}

export default UnderConstructionPage