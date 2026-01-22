"use client";

import { useEffect, useState } from "react";

const sections = ["home", "projects", "about", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold">Darx</span>

        <ul className="flex gap-8 text-sm">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative uppercase tracking-wide transition-colors ${
                  active === id ? "text-white" : "text-gray-400"
                }`}
              >
                {id}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all ${
                    active === id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
