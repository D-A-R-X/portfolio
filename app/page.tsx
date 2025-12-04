"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * app/page.tsx
 * Premium Cyberpunk Portfolio — Depth Particle Parallax (B2)
 *
 * - Depth-based particle field (3 depth layers)
 * - Soft low-contrast neon
 * - Cursor indicator
 * - Loader
 * - Skills (from resume), Projects
 * - Badge and ProjectCard components included
 *
 * Notes:
 * - Keep an image at public/ai-avatar.png for avatar display.
 * - Ensure framer-motion is installed.
 */

/* ---------------------- Data ---------------------- */
const SOCIALS = {
  email: "mailto:surya777dbs@gmail.com",
  linkedin: "https://www.linkedin.com/in/surya-194910306",
  github: "https://github.com/D-A-R-X",
  instagram: "https://www.instagram.com/itz._darx._?igsh=ajJweWQ5eDU2N2I3",
  whatsapp: "https://wa.me/qr/U4KOUOEM4BFXA1",
};

const PROJECTS: { name: string; desc: string; link: string; status: string }[] = [
  {
    name: "IBM Hackathon",
    desc: "AI-driven prototype & cloud integration.",
    link: "https://github.com/D-A-R-X/IBM-Hackathon.git",
    status: "Completed",
  },
  {
    name: "Megatron",
    desc: "Modular automation toolkit.",
    link: "https://github.com/D-A-R-X/Megatron.git",
    status: "Completed",
  },
  {
    name: "Drive Track Mate",
    desc: "Vehicle tracking with alerts & geofencing.",
    link: "https://github.com/D-A-R-X/drive-track-mate.git",
    status: "Completed",
  },
  {
    name: "Bus Management System",
    desc: "Supabase + Flutter fleet management.",
    link: "https://drive-track-mate.lovable.app",
    status: "Completed",
  },
  {
    name: "Solo-Leveling AI Fitness App",
    desc: "AI real-time tracking, 3D avatar, anti-cheat.",
    link: "#",
    status: "In Progress",
  },
];

/* ---------------------- Page ---------------------- */
export default function Page(): JSX.Element {
  const [loaded, setLoaded] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const avatarSrc = "/ai-avatar.png";

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 600);
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => {
      clearTimeout(t);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <Cursor x={cursor.x} y={cursor.y} />
      <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>

      <main className="min-h-screen bg-[#050615] text-gray-100 font-sans overflow-hidden relative">
        <DepthParticleBackground />

        <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
          {/* Header */}
          <header className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#0f1724] to-[#07101a] flex items-center justify-center text-xl font-semibold text-[#8be9ff]/70 border border-white/5">
                S
              </div>
              <div>
                <div className="text-base text-gray-200">Surya J</div>
                <div className="text-xs text-gray-400">AI & Flutter Developer</div>
              </div>
            </div>

            <nav className="hidden md:flex gap-6 text-sm text-gray-400">
              <a href="#projects" className="hover:text-[#8be9ff]/80 transition">Projects</a>
              <a href="#skills" className="hover:text-[#8be9ff]/80 transition">Skills</a>
              <a href={SOCIALS.email} className="hover:text-[#8be9ff]/80 transition">Contact</a>
            </nav>
          </header>

          {/* Hero */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(139,233,255,0.05)]"
              >
                AI-Driven Engineering
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg text-gray-300 max-w-xl"
              >
                Building real-world apps with Flutter, Firebase and AI automation — focused on pragmatic, production-ready solutions.
              </motion.p>

              <div className="mt-6 flex gap-4">
                <a
                  href={SOCIALS.github}
                  className="px-4 py-2 border border-[#8be9ff]/10 rounded-lg bg-[#07101a]/60 text-[#8be9ff]/80 hover:bg-[#0b1b29] transition-all"
                >
                  GitHub
                </a>
                <a
                  href={SOCIALS.linkedin}
                  className="px-4 py-2 border border-white/5 rounded-lg bg-[#07101a]/50 text-gray-200 hover:bg-[#0c141d] transition-all"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-48 h-48 rounded-full p-[3px] avatar-glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#051014] border border-white/5">
                  <img src={avatarSrc} className="w-full h-full object-cover" alt="avatar" />
                </div>
              </div>
            </div>
          </section>

          {/* Skills & Projects */}
          <section className="mt-20 grid lg:grid-cols-3 gap-10">
            <aside id="skills" className="col-span-1 p-6 rounded-2xl bg-[#071018]/60 border border-white/6 hover:shadow-[0_0_20px_rgba(139,233,255,0.08)] transition-all">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Skills</h3>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                <Badge>Flutter</Badge>
                <Badge>Firebase</Badge>
                <Badge>HTML / CSS</Badge>
                <Badge>Java</Badge>
                <Badge>Python</Badge>
                <Badge>AI / ML Basics</Badge>
                <Badge>SQL</Badge>
                <Badge>Git / GitHub</Badge>
                <Badge>Prompt Engineering</Badge>
                <Badge>RPA / Automation</Badge>
                <Badge>3D UI / CSS</Badge>
                <Badge>Team Collaboration</Badge>
              </div>

              <div className="mt-6 text-sm">
                <div className="font-medium text-gray-200">Education</div>
                <div className="mt-2 text-gray-400">B.E CSE — Dhanalakshmi Srinivasan College of Engineering (2022–2026)</div>
              </div>

              <div className="mt-6 text-sm">
                <div className="font-medium text-gray-200">Internship</div>
                <div className="mt-2 text-gray-400">MERN Stack — VEI Technologies (Jun–Jul 2025)</div>
              </div>

              <div className="mt-6 text-sm">
                <div className="font-medium text-gray-200">Certifications</div>
                <ul className="list-disc ml-6 mt-2 text-gray-400">
                  <li>Cybersecurity Basics</li>
                  <li>MongoDB Basics</li>
                  <li>Digital Marketing — Google</li>
                  <li>AI & ML Fundamentals — Coursera</li>
                  <li>Generative AI</li>
                </ul>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                <div className="font-medium text-gray-200">Languages</div>
                <div className="mt-2">Tamil — Native</div>
                <div>English — Intermediate</div>
              </div>
            </aside>

            <div id="projects" className="col-span-2">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {PROJECTS.map((p) => (
                  <ProjectCard key={p.name} project={p} />
                ))}
              </div>
            </div>
          </section>

          <footer className="mt-16 text-center text-sm text-gray-400">
            <div>Available for Freelance Work & Collaboration</div>
            <div className="mt-4 flex justify-center gap-4">
              <a href={SOCIALS.github} className="underline">GitHub</a>
              <a href={SOCIALS.linkedin} className="underline">LinkedIn</a>
              <a href={SOCIALS.instagram} className="underline">Instagram</a>
            </div>
            <div className="mt-6 text-xs">© {new Date().getFullYear()} Surya J</div>
          </footer>
        </div>
      </main>

      <style jsx>{`
        .avatar-glow {
          box-shadow: 0 0 30px rgba(139,233,255,0.07);
        }
        a:hover {
          color: rgba(139,233,255,0.9);
        }
      `}</style>
    </>
  );
}

/* ---------------- Cursor ---------------- */
function Cursor({ x, y }: { x: number; y: number }): JSX.Element {
  return (
    <div style={{ position: "fixed", left: x - 6, top: y - 6, pointerEvents: "none", zIndex: 9999 }}>
      <div style={{ width: 10, height: 10, borderRadius: 6, background: "rgba(73,230,255,0.18)", boxShadow: "0 0 12px rgba(73,230,255,0.08)" }} />
    </div>
  );
}

/* ---------------- Loader ---------------- */
function Loader(): JSX.Element {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/85">
      <div className="text-center">
        <div className="mb-4 text-2xl font-semibold text-white">SYSTEM BOOT</div>
        <div className="h-2 w-64 bg-white/10 rounded overflow-hidden">
          <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 1, repeat: Infinity }} className="h-full bg-[rgba(139,233,255,0.2)]" />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Depth Particle Parallax (B2) ---------------- */
/**
 * Implementation notes:
 * - Three depth layers (far, mid, near)
 * - Each particle has a depth factor used to scale velocity and size
 * - Canvas resized on window resize
 * - ctx is asserted non-null (canvas.getContext("2d")!)
 */

function DepthParticleBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!; // non-null assertion

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    type Particle = { x: number; y: number; vx: number; vy: number; size: number; depth: number; alpha: number };

    const particles: Particle[] = [];

    // create particles with depth categories
    const counts = { far: 36, mid: 28, near: 16 }; // total ~80
    const createParticles = (count: number, depthFactor: number, sizeRange: [number, number], alpha: number) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3 * depthFactor,
          vy: (Math.random() - 0.5) * 0.3 * depthFactor,
          size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
          depth: depthFactor,
          alpha,
        });
      }
    };

    createParticles(counts.far, 0.45, [0.6, 1.6], 0.08);
    createParticles(counts.mid, 0.9, [1.0, 2.2], 0.10);
    createParticles(counts.near, 1.6, [1.6, 3.2], 0.14);

    // subtle background gradient behind canvas particles
    const bgGradient = ctx.createLinearGradient(0, 0, 0, h);
    bgGradient.addColorStop(0, "rgba(2,6,12,0.06)");
    bgGradient.addColorStop(1, "rgba(2,6,12,0.02)");

    function draw() {
      // clear & subtle backdrop
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, w, h);

      // draw each particle
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // wrap-around edges gently
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = `rgba(139,233,255,${p.alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    // start
    draw();

    // handle resize
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 bg-transparent pointer-events-none" />;
}

/* ---------------- Badge ---------------- */
function Badge({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="px-3 py-2 rounded bg-[#061018]/50 border border-white/4 text-sm text-gray-200 hover:bg-[#0b1e29]/60 transition-all">
      {children}
    </div>
  );
}

/* ---------------- ProjectCard ---------------- */
function ProjectCard({ project }: { project: { name: string; desc: string; link: string; status: string } }): JSX.Element {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const px = (x / r.width - 0.5) * 10;
      const py = (y / r.height - 0.5) * -8;

      el.style.transform = `perspective(900px) rotateX(${py}deg) rotateY(${px}deg)`;
      el.style.boxShadow = `${-px * 6}px ${py * 6}px 30px rgba(5,12,18,0.7)`;
    };

    const onLeave = () => {
      if (!el) return;
      el.style.transform = "";
      el.style.boxShadow = "";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a ref={ref} href={project.link} target="_blank" rel="noreferrer" className="block p-5 rounded-2xl glass border border-white/6 hover:scale-[1.01] transition-all">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-[#071018]/60 flex items-center justify-center text-xl">📁</div>
        <div>
          <div className="flex items-center gap-3">
            <div className="font-semibold text-gray-100">{project.name}</div>
            <div className="text-xs text-gray-400 px-2 py-1 rounded bg-white/3">{project.status}</div>
          </div>
          <p className="mt-2 text-sm text-gray-300">{project.desc}</p>
        </div>
      </div>
    </a>
  );
}
