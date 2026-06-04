import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-content">
          <h2>
            Built for Brands That Want Accurate Data & Real Growth
          </h2>

          <div className="about-experience">
            <span>10+</span>
            <p>Years<br />Experience</p>
          </div>

          <p>
            We help brands move from guesswork to reliable attribution. Whether
            your leads come from Google Ads, Meta Ads, affiliate partners,
            organic search, email, or direct traffic, your tracking setup should
            clearly show what’s working and what’s wasting your budget.
          </p>

          <p>
            Our approach focuses on building clean tracking foundations,
            accurate event measurement, and reporting that connects marketing
            activity to real business outcomes.
          </p>

          <p>
            We help businesses improve conversion tracking, attribution setup,
            and overall marketing data accuracy.
          </p>
        </div>

        <div className="about-image">
          <img src="/images/about-img.avif" alt="Conversion tracking experts team" />
        </div>
      </div>
    </section>
  );
}