import Image from "next/image";


export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container final-cta-box">
        <div className="final-cta-content">

          <div className="cta-alert-text">
            Fix Your Tracking Before You Waste Another Dollar
          </div>

          <h2>Ready To Scale With Accurate Tracking?</h2>

          <p>
            Get a free tracking audit and discover exactly where your leads,
            sales, and ad spend are being misattributed.
          </p>

          <div className="final-cta-actions">
            <a href="#hero" className="final-cta-primary">
              Get Free Tracking Audit
            </a>

            <a href="#services" className="final-cta-secondary">
              View Our Services
            
            </a>
          </div>
        </div>

        <div className="final-cta-visual">
                <div className="platform-card card-ga4">
          <Image
            src="/images/logos/google-analytics-logo.webp"
            alt="Google Analytics 4"
            width={90}
            height={35}
          />
        </div>

        <div className="platform-card card-gtm">
          <Image
            src="/images/logos/google-tag-manager-logo.webp"
            alt="Google Tag Manager"
            width={90}
            height={35}
          />
        </div>

        <div className="platform-card card-meta">
          <Image
            src="/images/logos/meta-ads-logo.webp"
            alt="Meta Ads"
            width={90}
            height={35}
          />
        </div>

        <div className="platform-card card-tiktok">
          <Image
            src="/images/logos/tiktok-ads-logo.webp"
            alt="TikTok Ads"
            width={90}
            height={35}
          />
        </div>

        <div className="platform-card card-redtrack">
          <Image
            src="/images/logos/redtrack-logo.jpg"
            alt="RedTrack"
            width={90}
            height={35}
          />
        </div>

        <div className="platform-card card-clickflare">
          <Image
            src="/images/logos/click-flare-logo.webp"
            alt="ClickFlare"
            width={90}
            height={35}
          />
        </div>

          <div className="dashboard-card">
            <div className="dashboard-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h3>Tracking Dashboard</h3>

            <div className="metric-grid">
              <div>
                <strong>+212%</strong>
                <p>Conversions</p>
              </div>

              <div>
                <strong>-24%</strong>
                <p>CPA</p>
              </div>

              <div>
                <strong>+38%</strong>
                <p>Revenue</p>
              </div>
            </div>

            <div className="chart-lines">
              <span className="line-one"></span>
              <span className="line-two"></span>
              <span className="line-three"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

