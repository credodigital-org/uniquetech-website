const contactCards = [
  {
    title: 'Our Location', icon: '/assets/contact-icon-location.png', featured: true,
    lines: ['Unique Tech General Maintenance LLC - S.P.C', 'P.O. Box: 107275', "Ras al Qit'ah Al Bateen, 28 Abu Dhabi"],
  },
  { title: 'Email Address', icon: '/assets/contact-icon-email.png', lines: ['info@uniquetech.ae'] },
  { title: 'Phone Number', icon: '/assets/contact-icon-phone.png', lines: ['+971- 507639356', '+971- 563362209', 'Fax: +971 2 6289002'] },
];

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry: ${fields.get('service')}`);
    const body = [
      `Name: ${fields.get('name')}`,
      `Location: ${fields.get('location')}`,
      `Phone: ${fields.get('phone')}`,
      `Email: ${fields.get('email')}`,
      '',
      `Service: ${fields.get('service')}`,
      `Message: ${fields.get('message')}`,
    ].join('\n');
    window.location.href = `mailto:info@uniquetech.ae?subject=${subject}&body=${encodeURIComponent(body)}`;
  }
  return <>
    <section className="contact-page-hero"><div className="wrap"><h1>Contact Us</h1></div></section>
    <section className="contact-details-section">
      <div className="wrap">
        <header className="contact-details-intro"><span className="eyebrow">CONTACT US</span><h2>Need more Information?<br />Get in Touch</h2></header>
        <div className="contact-details-grid">
          {contactCards.map((card) => <article className={card.featured ? 'contact-detail-card featured' : 'contact-detail-card'} key={card.title} tabIndex={0} aria-label={card.title}>
            <img src={card.icon} alt="" />
            <h3>{card.title}</h3>
            {card.lines.map((line) => <p key={line}>{card.title === "Email Address" ? <a href={`mailto:${line}`}>{line}</a> : card.title === "Phone Number" && line.toLowerCase().startsWith("fax") ? <a href="tel:+97126289002">{line}</a> : card.title === "Phone Number" ? <a href={`tel:${line.replace(/[^+\d]/g, "")}`}>{line}</a> : card.title === "Our Location" ? <a href="https://maps.app.goo.gl/fUMRMChjsvhVKifY8" target="_blank" rel="noreferrer">{line}</a> : line}</p>)}
          </article>)}
        </div>
      </div>
    </section>
    <section className="contact-enquiry-section">
      <div className="wrap contact-enquiry-grid">
        <form className="reference-contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label><span className="sr-only">Name</span><input required name="name" placeholder="Name" autoComplete="name" /></label>
            <label><span className="sr-only">Choose your location</span><select defaultValue="" name="location" required><option value="" disabled>Choose your Location</option><option>Abu Dhabi</option><option>Dubai</option><option>Sharjah</option><option>Other UAE location</option></select></label>
          </div>
          <div className="contact-form-row">
            <label><span className="sr-only">Phone</span><input required type="tel" name="phone" placeholder="Phone" autoComplete="tel" /></label>
            <label><span className="sr-only">Email</span><input required type="email" name="email" placeholder="Email" autoComplete="email" /></label>
          </div>
          <label><span className="sr-only">Service</span><select defaultValue="" name="service" required><option value="" disabled>Service</option><option>MEP Works</option><option>Maintenance</option><option>Interior Works</option><option>Landscaping</option><option>Material Supply</option></select></label>
          <label><span className="sr-only">Your message</span><textarea required name="message" rows="5" placeholder="Typing your message here..." /></label>
          <button type="submit" className="button">Get a Quote</button>
        </form>
        <div className="contact-enquiry-copy">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Send Us a Message</h2>
          <p>Looking for reliable maintenance solutions? Unique Tech General Maintenance LLC is here to help. Contact our team for professional support, service enquiries, and customized maintenance solutions. We look forward to understanding your needs and providing the right solutions.</p>
          <div className="social contact-social">
            <a href="https://wa.me/971507639356?text=Hello%20Unique%20Tech%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noreferrer" aria-label="WhatsApp"><img src="/assets/Group 10 (1).png" alt="" /></a>
            <a href="#instagram" aria-label="Instagram"><img src="/assets/thesvg-color_instagram.png" alt="" /></a>
            <a href="#facebook" aria-label="Facebook"><img src="/assets/Group 12 (1).png" alt="" /></a>
            <a href="#tiktok" aria-label="TikTok"><img src="/assets/Group 13 (1).png" alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default Contact;




