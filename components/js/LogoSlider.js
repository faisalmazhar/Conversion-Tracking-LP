import Image from "next/image";

export default function LogoSlider() {
  const logos = [
    "/images/logos/everflow-logo.webp",
    "/images/logos/impact-logo.webp",
    "/images/logos/tune-logos.webp",
    "/images/logos/cake-logos.webp",
    "/images/logos/stape-logos.webp",
    "/images/logos/marketcall-logos.webp",
    "/images/logos/callgrid-logos.webp",
    "/images/logos/ringba-logos.webp",
    "/images/logos/newsbreak-logo.webp",
    "/images/logos/snapchat-logo.webp",


    "/images/logos/outbrain-logo.webp",
    "/images/logos/taboola-logo.webp", 
    "/images/logos/klaviyo-logo.webp",
    "/images/logos/gesresponse-logo.webp", 
    "/images/logos/framer-logo.webp",
    "/images/logos/activecampaign-logo.webp",
    "/images/logos/unbounce-logo.webp", 
    "/images/logos/sendgrid-logo.webp",
    "/images/logos/google-sheet-logo.webp", 
    "/images/logos/google-big-query-logos.webp",


    "/images/logos/google-data-studio.webp",
    "/images/logos/google-tag-manager-logo.webp", 
    "/images/logos/google-analytics-logo.webp",
    "/images/logos/merchant-center-logo.webp", 
    "/images/logos/bing-logo.webp",
    "/images/logos/hubspot-logo.webp",
    "/images/logos/zapier-logo.webp", 
    "/images/logos/meta-ads-logo.webp",
    "/images/logos/tiktok-ads-logo.webp", 
    "/images/logos/google-ads-logo.webp",


    "/images/logos/shopify-logo.webp",
    "/images/logos/wordpress-logo.webp", 
    "/images/logos/woocommerce-logo.webp",
    "/images/logos/webflow-logo.webp", 
    "/images/logos/clickfunnel-logo.webp",
    "/images/logos/funnelish-logo.webp",
    "/images/logos/checkoutchamp-logo.webp", 
    "/images/logos/voluum-logo.webp",
    "/images/logos/redtrack-logo.jpg", 
    "/images/logos/click-flare-logo.webp",

    "/images/logos/Keitaro-logo.webp", 
    "/images/logos/FunnelFluxlogo.webp",

  ];

  return (
    <section className="logo-slider-section">
      <div className="logo-slider-track">
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-slider-item" key={index}>
            <Image
              src={logo}
              alt="Client Logo"
              width={180}
              height={60}
              className="slider-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}