"use client";

import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";

const NavBar = () => {
  const handleNavClick = (navItem: string) => {
    posthog.capture(`nav_${navItem}_clicked`, {
      nav_item: navItem,
      source: "navbar",
    });
  };

  return (
    <header>
      <nav>
        <Link href="/" className="logo" onClick={() => handleNavClick("logo")}>
          <Image src="/icons/logo.png" alt="Logo" width={24} height={24} />

          <p>DevEvent</p>
        </Link>

        <ul>
          <Link href="/" onClick={() => handleNavClick("home")}>Home</Link>
          <Link href="/events" onClick={() => handleNavClick("events")}>Events</Link>
          <Link href="/contact" onClick={() => handleNavClick("create_event")}>Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
