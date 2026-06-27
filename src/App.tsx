/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import ProjectShowcase from "./components/ProjectShowcase";
import Academy from "./components/Academy";
import AdditionalWorks from "./components/AdditionalWorks";
import ThankYou from "./components/ThankYou";
import { Sparkles, Terminal, Smartphone, Menu, X, ArrowUp } from "lucide-react";

export default function App() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll height to trigger style shifts in Nav Bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", target: "about" },
    { name: "Journey", target: "journey" },
    { name: "Projects", target: "projects" },
    { name: "Academy", target: "academy" },
    { name: "Gallery", target: "additional-works" }
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-indigo-500 selection:text-white antialiased text-slate-800">
      
      {/* Floating Glassmorphism Sticky Nav Bar */}
      <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-350 ${
        scrolled 
          ? "bg-slate-950/75 backdrop-blur-md border-b border-slate-900 shadow-md py-4" 
          : "bg-transparent py-6"
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleScrollTo("about")}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Terminal className="w-4.5 h-4.5" />
            </div>
            <span className="font-extrabold text-sm tracking-widest uppercase font-mono text-white">Gede Indrawan</span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase font-mono">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleScrollTo(link.target)}
                className="text-slate-400 hover:text-white transition-colors duration-250 cursor-pointer relative py-1"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                const mailEl = document.getElementById("journey");
                mailEl?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all shadow-md shadow-indigo-500/10 cursor-pointer"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile responsive toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-400 hover:text-white transition-colors p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-lg z-30 pt-28 px-8 flex flex-col gap-6 font-mono text-sm uppercase tracking-widest font-black"
          >
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleScrollTo(link.target)}
                className="text-slate-400 hover:text-white transition-colors text-left py-2"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleScrollTo("journey")}
              className="w-full py-4 text-center bg-indigo-600 text-white rounded-xl text-xs tracking-wider"
            >
              Get In Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Landing Page Sections Flow */}
      <main className="relative">
        <Hero />
        <Timeline />
        <ProjectShowcase />
        <Academy />
        <AdditionalWorks />
        <ThankYou />
      </main>

      {/* Back to top scroll button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-500/20 hover:scale-110 active:scale-95 transition-all z-45 cursor-pointer border border-indigo-400/20"
            title="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 font-black" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
