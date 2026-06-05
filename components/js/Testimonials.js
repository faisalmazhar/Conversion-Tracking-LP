"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Jonathan",
    location: "US",
    title: "Exceptional full-stack developer",
    text: "Muhammad has been instrumental in helping me with Retreaver, Ringba, Unbounce, landing pages, and custom solutions. His technical skills, creativity, and dedication consistently delivered top-notch results.",
    date: "Feb 21, 2025",
  },
  {
    name: "Boris Dvs",
    location: "TH",
    title: "Very skilled",
    text: "Very skilled. Managed to solve all my technical issues.",
    date: "Nov 14, 2024",
  },
  {
    name: "Jay Amin",
    location: "GB",
    title: "This guy is amazing",
    text: "He checked my RedTrack setup, went through everything logically, immediately found the errors, and explained them clearly. We also tested purchases to make sure everything worked properly.",
    date: "Nov 12, 2024",
  },
  {
    name: "George",
    location: "GB",
    title: "He’s an absolute pro",
    text: "He handled advanced setups for affiliate offers and e-commerce products with precision. ClickMagick, RedTrack, Funnelish, Shopify — everything was set up properly with zero errors.",
    date: "Oct 29, 2024",
  },
  {
    name: "AudyBrus",
    location: "AE",
    title: "Skilled, fast, and professional",
    text: "This company helped me track data with precision and efficiency. Ali understood my needs, created the perfect solution, and provided helpful advice throughout the process.",
    date: "Oct 28, 2024",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-heading">
          <div>
            <span>Trustpilot Reviews</span>
            <h2>Real Feedback From Businesses We’ve Helped</h2>
            <p>
              These reviews are manually added from the public Trustpilot profile
              for Conversion Tracking Experts.
            </p>
          </div>

          <div className="testimonials-nav">
            <button className="testimonials-prev" aria-label="Previous review">
              ←
            </button>
            <button className="testimonials-next" aria-label="Next review">
              →
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".testimonials-prev",
            nextEl: ".testimonials-next",
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-top">
                  <div className="testimonial-avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{item.name}</h3>
                    <p>
                      {item.location} · {item.date}
                    </p>
                  </div>
                </div>

                <div className="testimonial-stars">★★★★★</div>

                <h4>{item.title}</h4>

                <p className="testimonial-text">“{item.text}”</p>

                <a
                  href="https://www.trustpilot.com/review/conversiontrackingexperts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testimonial-link"
                >
                  Read on Trustpilot →
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonials-bottom">
          <p>
            Trustpilot profile currently shows a 4.1 TrustScore and 5 total
            reviews. Review content should be updated if the public profile
            changes.
          </p>
          <a
            href="https://www.trustpilot.com/review/conversiontrackingexperts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
          >
            View Trustpilot Profile
          </a>
        </div>
      </div>
    </section>
  );
}