import { motion } from "motion/react";
import { Mail, Github, MessageSquareCode } from "lucide-react";

export default function ThankYou() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      
      {/* Dynamic Background subtle grid lines ornament */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px)] bg-[size:16rem] opacity-[0.015] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
        
        {/* Large Decorative Quote Accent symbol inside container */}
        <motion.div
          initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="text-8xl md:text-9xl font-serif text-blue-500/20 font-black select-none pointer-events-none mb-[-5rem]"
        >
          ”
        </motion.div>

        {/* Dynamic Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight"
        >
          Thank You
        </motion.h2>

        {/* Famous quote container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-black text-slate-800 tracking-tight leading-relaxed font-sans">
            "Every project in this portfolio started with something I didn't know. What kept me moving forward was curiosity and the willingness to learn."
          </p>
        </motion.div>

        {/* Call to action buttons representing social linkages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 pt-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:gedeindrawan2006@gmail.com"
            className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-md shadow-blue-500/10"
          >
            <Mail className="w-4 h-4" />
            Email
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/sdgede"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 transition-all duration-200 cursor-pointer shadow-sm"
          >
            <Github className="w-4 h-4 text-slate-700" />
            GitHub
          </motion.a>
        </motion.div>

        {/* Compact decorative bottom credits & legal anchors */}
        <div className="pt-16 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Apple Developer Academy Portfolio. All rights reserved.</p>
          <div className="flex gap-4 font-semibold text-slate-500">
            <a href="#" className="hover:text-slate-800 transition-colors">Accessibility</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-800 transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-800 transition-colors">Archive</a>
          </div>
        </div>

      </div>
    </section>
  );
}
