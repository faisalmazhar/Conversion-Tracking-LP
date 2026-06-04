import HubspotForm from "./HubspotForm";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>
            Accurate Conversion Tracking for{" "}
            <span>Scalable Growth</span>
          </h1>
          <p className="hero-description">
            Get reliable attribution, cleaner analytics, and accurate event
            tracking across your website, ad platforms, CRM, and sales funnel.
            We help businesses fix broken tracking, improve conversion
            visibility, and understand exactly which campaigns are driving
            leads, sales, and revenue.
          </p>

          <ul className="hero-list">
            <li>Fix broken GA4, GTM, Meta Ads, Google Ads, and CRM tracking</li>
            <li>Track form submissions, calls, purchases, bookings, and key actions</li>
            <li>Improve attribution across ads, landing pages, and sales activity</li>
            <li>Build cleaner reporting for smarter marketing decisions</li>
            <li>Reduce wasted ad spend caused by missing or inaccurate data</li>
          </ul>

          <div className="hero-actions">
            <a href="#contact" className="btn-orange">
              Schedule Free Discovery Call
            </a>
            <a href="#services" className="btn-blue">
              View Our Services
            </a>
          </div>

          <div className="hero-trust">
            <Image className="trust-logo" src="/images/google-business-review.png" alt="Google Business Reviews" width={100} height={50} />
            <Image className="trust-logo" src="/images/trustpilot.png" alt="Trustpilot" width={100} height={50} />
            <Image className="trust-logo" src="/images/clutch.png" alt="Clutch" width={100} height={50} />
            </div>
        </div>

        <div className="hero-form-wrap">
          <HubspotForm />
        </div>
      </div>
    </section>
  );
}