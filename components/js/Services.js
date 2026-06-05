import Image from "next/image";


const services = [
  {
    title: "Ad Tracking Tools",
    desc: "Set up and troubleshoot tracking platforms used for affiliate and paid campaigns. Improve visibility with accurate click, lead, and conversion data.",
    logos: [
      { src: "/images/logos/voluum-logo.webp", alt: "Voluum" },
      { src: "/images/logos/redtrack-logo.jpg", alt: "RedTrack" },
      { src: "/images/logos/click-flare-logo.webp", alt: "ClickFlare" },
      { src: "/images/logos/Keitaro-logo.webp", alt: "Keitaro" },
      { src: "/images/logos/FunnelFluxlogo.webp", alt: "FunnelFlux" },
    ],
  },
  {
    title: "Affiliate Tracking Tools",
    desc: "Connect affiliate platforms with clean conversion tracking and reporting. Track partners, offers, payouts, and performance more accurately.",
    logos: [
      { src: "/images/logos/everflow-logo.webp", alt: "Everflow" },
      { src: "/images/logos/click-bank-logo.webp", alt: "ClickBank" },
      { src: "/images/logos/impact-logo.webp", alt: "Impact" },
      { src: "/images/logos/tune-logos.webp", alt: "Tune" },
      { src: "/images/logos/cake-logos.webp", alt: "Cake" },
    ],
  },
  {
    title: "Paid Ads Tracking",
    desc: "Measure leads and sales from paid media campaigns with reliable attribution. Fix missing conversions across major advertising platforms.",
    logos: [
      { src: "/images/logos/google-ads-logo.webp", alt: "Google Ads" },
      { src: "/images/logos/meta-ads-logo.webp", alt: "Meta Ads" },
      { src: "/images/logos/bing-logo.webp", alt: "Bing Ads" },
      { src: "/images/logos/outbrain-logo.webp", alt: "Outbrain" },
      { src: "/images/logos/taboola-logo.webp", alt: "Taboola" },
    ],
  },
  {
    title: "Analytics Tracking",
    desc: "Build a clean analytics foundation for reporting and decision-making. Track key events across websites, forms, funnels, and CRM tools.",
    logos: [
      { src: "/images/logos/google-analytics-logo.webp", alt: "GA4" },
      { src: "/images/logos/google-tag-manager-logo.webp", alt: "GTM" },
      { src: "/images/logos/stape-logos.webp", alt: "Stape" },
      { src: "/images/logos/google-data-studio.webp", alt: "Looker Studio" },
      { src: "/images/logos/google-big-query-logos.webp", alt: "BigQuery" },
    ],
  },
];

const ServiceCard = ({ service }) => (
  <div className="service-card">

    <h3>{service.title}</h3>

    <div className="service-logo-row">
      {service.logos.map((logo, index) => (
        <div className="service-logo-pill" key={index} data-tooltip={logo.alt}>
         <Image src={logo.src} alt={logo.alt} width={80} height={36} />
      </div>
      ))}
    </div>

    <p className="service-desc">{service.desc}</p>

    <a href="#contact" className="service-more">
      Explore More →
    </a>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-heading">
          <div>
            <span>Tracking & Attribution Services</span>
            <h2>Conversion Tracking Services Built for Growth</h2>
            <p>
              We help you measure what matters, fix broken tracking, and connect
              marketing activity with real business results.
            </p>
          </div>

          <a href="#contact" className="services-top-link">
            View All Services →
          </a>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard service={service} key={`desktop-${index}`} />
          ))}
        </div>

        <div className="services-mobile-slider">
          <div className="services-mobile-track">
            {[...services, ...services].map((service, index) => (
              <ServiceCard service={service} key={`mobile-${index}`} />
            ))}
          </div>
        </div>

        <div className="services-bottom">
          <p>All campaigns include free audit + monthly ROI reporting</p>
          <a href="#contact" className="btn-orange">
            Schedule Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}