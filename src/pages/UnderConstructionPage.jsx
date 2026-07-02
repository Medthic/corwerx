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
      </section>
    </main>
  )
}

export default UnderConstructionPage