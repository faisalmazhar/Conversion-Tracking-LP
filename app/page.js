import Header from "@/components/js/Header";
import Hero from "@/components/js/Hero";
import LogoSlider from "@/components/js/LogoSlider";
import About from "@/components/js/About";
import Services from "@/components/js/Services";
import Process from "@/components/js/Process";
import WhyChooseUs from "@/components/js/WhyChooseUs";
import ContactCTA from "@/components/js/ContactCTA";
import FinalCTA from "@/components/js/FinalCTA";
import Footer from "@/components/js/Footer";
import Testimonials from "@/components/js/Testimonials";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoSlider />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <WhyChooseUs />
      <FinalCTA />
      <Footer />

      
      {/* <main className="site-main">
        <section id="hero" className="hero-section">
          <div className="container">
            <p className="eyebrow">Conversion Tracking Experts</p>
            <h1>Track Every Lead. Improve Every Campaign.</h1>
            <p className="hero-text">
              We help businesses set up accurate Google Ads, GA4, GTM, HubSpot,
              and server-side conversion tracking so paid ads perform with clean data.
            </p>
            <a href="#contact" className="primary-btn">
              Get a Free Tracking Audit
            </a>
          </div>
        </section>
      </main> */}
    </>
  );
}