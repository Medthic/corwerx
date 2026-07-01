import { serviceIcons } from './ServiceIcons'

function ServiceGrid({ services }) {
  return (
    <div className="services-grid">
      {services.map((service) => {
        const Icon = serviceIcons[service.icon]

        return (
          <article key={service.title} className="service-card">
            <h2 className="service-title">
              <span className="service-icon" aria-hidden="true">
                <Icon />
              </span>
              <span>{service.title}</span>
            </h2>
          </article>
        )
      })}
    </div>
  )
}

export { ServiceGrid }