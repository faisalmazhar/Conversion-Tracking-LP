"use client"; // This component run in the browser because we use useState, useEffect, clicks, window, and document.

import { useEffect, useState } from "react"; // Import React hooks for state and scroll detection.
import Image from "next/image"; // Import Next.js optimized image component.

export default function Header() {
  // This state controls mobile menu open/close.
  const [menuOpen, setMenuOpen] = useState(false);

  // This state stores the currently active section ID.
  const [activeSection, setActiveSection] = useState("hero");

  // This function closes the mobile menu.
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // This effect checks which section is currently visible while scrolling.
  useEffect(() => {
    // Select all sections that have an ID, like hero, about, services, process, contact.
    const sections = document.querySelectorAll("section[id]");

    // This function runs whenever user scrolls.
    const handleScroll = () => {
      // Add offset so active link changes a little before section reaches top.
      const scrollY = window.scrollY + 130;

      // Loop through all sections.
      sections.forEach((section) => {
        // Get section top position.
        const sectionTop = section.offsetTop;

        // Get section height.
        const sectionHeight = section.offsetHeight;

        // Get section ID.
        const sectionId = section.getAttribute("id");

        // Check if current scroll position is inside this section.
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          // Set active menu item to this section ID.
          setActiveSection(sectionId);
        }
      });
    };

    // Run once when page loads.
    handleScroll();

    // Listen to page scroll.
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll listener when component unloads.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Main site header.
    <header className="site-header">
      {/* Header inner container. */}
      <div className="container header-inner">
        {/* Logo link. Clicking it goes to hero and closes mobile menu. */}
        <a href="#hero" className="site-logo" onClick={closeMenu}>
          <Image
            src="/images/logo.svg"
            alt="Conversion Tracking Experts"
            width={200}
            height={55}
            priority
          />
        </a>

        {/* Navigation menu. Active class opens menu on mobile. */}
        <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
          {/* Mobile close button. */}
          <button className="menu-close" onClick={closeMenu}>
            ×
          </button>

          {/* Home menu link. */}
          <a
            href="#hero"
            onClick={closeMenu}
            className={activeSection === "hero" ? "active" : ""}
          >
            Home
          </a>

          {/* About menu link. */}
          <a
            href="#about"
            onClick={closeMenu}
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>

          {/* Services menu link. */}
          <a
            href="#services"
            onClick={closeMenu}
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </a>

          {/* Process menu link. */}
          <a
            href="#process"
            onClick={closeMenu}
            className={activeSection === "process" ? "active" : ""}
          >
            Process
          </a>

          {/* Why Choose Us menu link. */}
          <a
            href="#why-choose-us"
            onClick={closeMenu}
            className={activeSection === "why-choose-us" ? "active" : ""}
          >
            Why Choose Us
          </a>

          {/* Contact menu link. */}
          <a
            href="#contact"
            onClick={closeMenu}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>

          {/* Mobile CTA button inside slide menu. */}
          <a href="#contact" className="mobile-menu-btn" onClick={closeMenu}>
            Schedule a Free Discovery Call
          </a>
        </nav>

        {/* Desktop CTA button. */}
        <a href="#contact" className="header-btn">
          Schedule a Free Discovery Call
        </a>

        {/* Mobile hamburger button. */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Dark overlay behind mobile menu. */}
        {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
}