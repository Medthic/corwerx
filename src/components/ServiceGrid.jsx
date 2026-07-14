import { serviceIcons } from './ServiceIcons'

function ServiceGrid({ services }) {
  return (
    <div className="services-grid">
      {services.map((service) => {
        const Icon = serviceIcons[service.icon]

        return (
          <article key={service.title} className={`service-card service-card--${service.icon}`}>
            <h2 className="service-title">
              <span className="service-icon" aria-hidden="true">
                <Icon />
              </span>
              <span>{service.title}</span>
            </h2>
            {service.subservices?.length ? (
              <ul className="service-subservices" aria-label={`${service.title} subservices`}>
                {service.subservices.map((subservice) => (
                  <li key={subservice}>{subservice}</li>
                ))}
              </ul>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}

export { ServiceGrid }