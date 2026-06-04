import HubspotForm from "./HubspotForm";

export default function ContactCTA() {
  return (
    <section id="contact" className="contact-cta-section">
      <div className="container contact-cta-grid">
        <div className="contact-cta-content">
          <h2>Ready to Improve Your Tracking & Attribution?</h2>

          <p>
            Book a free discovery call and let us review your current tracking
            setup. We’ll help you understand what’s missing, what’s inaccurate,
            and what needs to be fixed so your marketing data becomes more
            reliable.
          </p>

          <ul className="contact-cta-list">
            <li>Review your current GA4, GTM, pixel, and ad tracking setup</li>
            <li>Identify missing or broken conversion events</li>
            <li>Find attribution gaps between traffic sources and leads</li>
            <li>Recommend the best tracking improvements for your business</li>
            <li>Help you make better decisions with cleaner reporting</li>
            <li>Get actionable quick wins you can implement immediately</li>
          </ul>

          <div className="contact-rating">
            <span>★★★★★</span>
            <p>4.9/5 average · 500+ US businesses served</p>
          </div>
        </div>

        <div className="contact-cta-form">
          <HubspotForm />
        </div>
      </div>
    </section>
  );
}