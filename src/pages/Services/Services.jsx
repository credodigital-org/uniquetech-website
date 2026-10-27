import { serviceCatalog } from '../../data/serviceCatalog.js';

function Services() {
  return <>
    <section className="services-page-hero">
      <div className="wrap"><h1>Our Services</h1></div>
    </section>
    <section className="services-overview">
      <div className="wrap">
        <header className="services-intro">
          <h2>Complete Maintenance Solutions<br />Under One Roof</h2>
          <p>At Unique Tech General Maintenance Co. L.L.C., we provide comprehensive maintenance, repair, installation, and material supply solutions for residential, commercial, and industrial properties. Our experienced team is committed to delivering reliable service, quality workmanship, and customer satisfaction.</p>
        </header>
        <div className="service-catalog-grid">
          {serviceCatalog.map((service, index) => <article className="service-catalog-card" key={service.title}>
            <div className="service-catalog-photo">
              <img src={service.image} alt={service.title} loading={index > 2 ? 'lazy' : 'eager'} />
              <span className="catalog-service-icon"><img src="/assets/service-wrench.png" alt="" /></span>
            </div>
            <div className="service-catalog-copy">
              <h3>{service.title}</h3>
              {service.description && <p>{service.description}</p>}
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  </>;
}

export default Services;
