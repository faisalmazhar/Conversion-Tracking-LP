import { Inter } from "next/font/google";
import "./globals.css";
import "../components/css/Header.css";
import "../components/css/Hero.css";
import "../components/css/LogoSlider.css";
import "../components/css/About.css";
import "../components/css/Services.css";
import "../components/css/Process.css";
import "../components/css/WhyChooseUs.css";
import "../components/css/ContactCTA.css";
import "../components/css/FinalCTA.css";
import "../components/css/Footer.css";
import "../components/css/Testimonials.css";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Conversion Tracking Services | Conversion Tracking Experts",
  description:
    "Conversion tracking services for Google Ads, GA4, GTM, HubSpot, server-side tracking, paid ads tracking, and attribution setup.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}