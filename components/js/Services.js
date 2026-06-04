"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const AdTrackingIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M10 50h44v4H10v-4Zm5-8h8V24h-8v18Zm13 0h8V14h-8v28Zm13 0h8V30h-8v12ZM13 18l12-8 12 10 13-9 2 3-15 11-12-10-10 7-2-4Z" />
  </svg>
);

const AffiliateIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16ZM14 36a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm36 0a8 8 0 1 1 0 16 8 8 0 0 1 0-16ZM29 25h6v10h-6V25Zm-5 17-7-5 3-5 7 5-3 5Zm16-5 7-5 3 5-7 5-3-5Z" />
  </svg>
);

const PaidAdsIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M8 26h10l26-12v36L18 38H8V26Zm42-8h4v28h-4V18ZM18 40l8 14h-8l-6-14h6Z" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M10 10h44v44H10V10Zm6 6v32h32V16H16Zm5 24 8-10 7 6 9-14 4 3-12 19-7-6-7 9-2-7Z" />
  </svg>
);

const services = [
  {
    icon: <AdTrackingIcon />,
    title: "Ad Tracking Tools",
    desc: "Set up and troubleshoot tracking platforms used for affiliate and paid campaigns. Improve visibility with accurate click, lead, and conversion data.",
    items: ["Voluum", "RedTrack", "ClickFlare", "Keitaro", "FunnelFlux"],
  },
  {
    icon: <AffiliateIcon />,
    title: "Affiliate Tracking Tools",
    desc: "Connect affiliate platforms with clean conversion tracking and reporting. Track partners, offers, payouts, and performance more accurately.",
    items: ["Everflow", "ClickBank", "Impact", "Tune", "Cake"],
  },
  {
    icon: <PaidAdsIcon />,
    title: "Paid Ads Tracking",
    desc: "Measure leads and sales from paid media campaigns with reliable attribution. Fix missing conversions across major advertising platforms.",
    items: ["Google Ads", "Meta Ads", "Bing Ads", "Outbrain", "Taboola"],
  },
  {
    icon: <AnalyticsIcon />,
    title: "Analytics Tracking",
    desc: "Build a clean analytics foundation for reporting and decision-making. Track key events across websites, forms, funnels, and CRM tools.",
    items: ["GA4", "GTM", "Server Side Tracking", "Stape.io", "Looker Studio"],
  },
];

const ServiceCard = ({ service }) => (
  <div className="service-card">
    <div className="service-icon">{service.icon}</div>

    <h3>{service.title}</h3>
    <p className="service-desc">{service.desc}</p>

    <ul>
      {service.items.map((item, itemIndex) => (
        <li key={itemIndex}>{item}</li>
      ))}
    </ul>

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

        <div className="services-slider-nav">
          <button className="services-prev" aria-label="Previous">
            ←
          </button>

          <button className="services-next" aria-label="Next">
            →
          </button>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard service={service} key={`desktop-${index}`} />
          ))}
        </div>

        <div className="services-mobile-slider">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1.1}
            loop={true}
            navigation={{
              prevEl: ".services-prev",
              nextEl: ".services-next",
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 1.5,
              },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
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