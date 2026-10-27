const advantages = [
  { title: 'Cost-Effective Solutions', text: 'Quality services at competitive prices.', icon: '/assets/about-icon-cost.png' },
  { title: 'Modern Technology', text: 'Innovative tools & efficient processes.', icon: '/assets/about-icon-technology.png' },
  { title: 'Exceptional Quality', text: 'High standards without compromise.', icon: '/assets/about-icon-quality.png' },
  { title: 'Customized Services', text: 'Customized solutions for every need.', icon: '/assets/about-icon-custom.png' },
  { title: 'Expert Team', text: 'Professionals & technical expertise.', icon: '/assets/about-icon-team.png' },
  { title: 'Customer Satisfaction', text: 'Reliable results within your budget.', icon: '/assets/about-icon-satisfaction.png' },
];
const commitments = [
  ['Fast & Secure Service', '/assets/about-icon-fast.png'],
  ['Licensed & Insured', '/assets/about-icon-insured.png'],
  ['Professional Team', '/assets/about-icon-professional.png'],
];

function About() {
  return <>
    <section className="about-page-hero"><div className="wrap"><h1>About Us</h1></div></section>

    <section className="about-introduction">
      <div className="wrap about-intro-grid">
        <div className="about-photo-collage" aria-label="Unique Tech maintenance work">
          <img className="collage-main" src="/assets/about-intro-water.png" alt="Technician maintaining a water tank" />
          <img src="/assets/about-intro-hvac.png" alt="HVAC maintenance work" />
          <img src="/assets/about-intro-team.png" alt="Maintenance team on site" />
          <img src="/assets/about-intro-city.png" alt="Unique Tech technician in the city" />
        </div>
        <div className="about-intro-copy">
          <span className="eyebrow">INTRODUCTION</span>
          <h2>Your Trusted Maintenance Partner</h2>
          <p>Unique Tech General Maintenance LLC - S.P.C, established in 2024, provides reliable and cost-effective technical and maintenance solutions across the UAE. We specialize in Mechanical, Electrical, and Plumbing (MEP) services, engineering supplies, equipment installation, commissioning, and maintenance. Our experienced engineers and technicians use modern technology and industry-standard equipment to deliver high-quality results.</p>
          <p>We serve residential, commercial, and industrial clients with solutions tailored to their specific needs and budgets. Our services focus on efficiency, reliability, and affordability without compromising quality. We are committed to transparency, safety, and customer satisfaction in every project. Through our expertise and professional approach, we aim to build long-term client relationships and deliver dependable maintenance solutions.</p>
        </div>
      </div>
    </section>

    <section className="chairman-message">
      <div className="wrap chairman-grid">
        <div className="chairman-copy">
          <span className="eyebrow">CHAIRMAN'S MESSAGE</span>
          <h2>Your Trusted Maintenance Partner</h2>
          <p>At Unique Tech General Maintenance LLC - S.P.C, we are committed to quality, safety, and customer satisfaction. Our experienced team delivers reliable and cost-effective maintenance solutions with professionalism and integrity.</p>
          <p>We strive to build lasting client relationships through trust, innovation, and continuous improvement.</p>
          <strong>MOHAMMED AZHARUL ISLAM</strong>
          <span className="chairman-role">Founder / Chairman / General Manager</span>
        </div>
        {/* <div className="chairman-art"><img src="/assets/about-chairman-logo.png" alt="Unique Tech General Maintenance LLC logo" /></div> */}

        



<div className="ut-chairman-frame">
  <div className="ut-chairman-blue-back" aria-hidden="true" />

  <div className="ut-chairman-white-card">
    <span className="ut-chairman-quote" aria-hidden="true">”</span>

    <img
      src="/assets/about-chairman-logo.png"
      alt="Unique Tech General Maintenance LLC logo"
    />
  </div>
</div>



      </div>
    </section>

    <section className="about-advantages">
      <div className="wrap">
        <h2>Affordability &amp; Quality</h2>
        <div className="advantage-layout">
          <div className="advantage-column">{advantages.filter((_, i) => i % 2 === 0).map((item) => <article className="advantage-card" key={item.title}><span><img src={item.icon} alt="" /></span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
          <div className="value-diagram"><img className="value-diagram-image" src="/assets/about-value-diagram.png" alt="Quality, cost, time, safety, and value for money" /></div>
          <div className="advantage-column">{advantages.filter((_, i) => i % 2 === 1).map((item) => <article className="advantage-card" key={item.title}><span><img src={item.icon} alt="" /></span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        </div>
      </div>
    </section>

    <section className="about-vision">
      <div className="wrap vision-grid">
        <div className="vision-collage">
          <img className="vision-main" src="/assets/about-vision-city.png" alt="Unique Tech team overlooking the city" />
          <img src="/assets/about-vision-hvac.png" alt="HVAC engineer at work" />
          <img src="/assets/about-vision-water.png" alt="Water tank maintenance" />
        </div>
        <div className="vision-copy">
          <span className="eyebrow light">OUR VISION</span>
          <h2>Building a Better Future</h2>
          <p>Unique Tech General Maintenance LLC vision is to be a leading service provider of Solutions and Services to Hotels, commercial and residential complexes, and recreational developments, multiple villa complexes and other Hospitality Industries.</p>
          <p>As a service provider, Unique Tech General Maintenance LLC offers its clients end-to-end solutions that results to achieve the return on investment within reasonable duration. The qualified and vast experienced technical team committed to provide services in the field of Steam Boilers, Hot Water Boilers, Calorifiers and Calorifier Heating Elements, Heat Exchangers, PHE, Cooling /Heating System, Water Filtration System, Water Softeners, Reverse Osmosis and Grey water plants.</p>
          <p>It is our goal to offer our clients a valuable and long-term business relationship. Unique Tech General Maintenance LLC understands that a deliberate plan combined with a realistic set-up is required for a business to remain competitive.</p>
        </div>
      </div>
    </section>

    <section className="about-commitment">
      <div className="wrap commitment-grid">
        <div><h2>Our Commitment</h2><p>We are dedicated to providing dependable maintenance solutions, professional workmanship, and efficient technical support to meet our clients' requirements.</p></div>
        <div className="commitment-items">{commitments.map(([name,icon]) => <article key={name}><span><img src={icon} alt="" /></span><h3>{name}</h3></article>)}</div>
      </div>
    </section>
  </>;
}

export default About;

