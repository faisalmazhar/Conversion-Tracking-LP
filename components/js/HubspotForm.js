"use client";

import Script from "next/script";

export default function HubspotForm() {
  return (
    <div className="hubspot-form-box">
      <Script
        src="https://js-na2.hsforms.net/forms/embed/245852015.js"
        strategy="afterInteractive"
      />

      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="64663604-3c3e-4a8b-adfc-fdc261176010"
        data-portal-id="245852015"
      ></div>
    </div>
  );
}