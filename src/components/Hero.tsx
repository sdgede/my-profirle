import { motion } from "motion/react";
import { Sparkles, Terminal, ArrowDown, MapPin, Github, Mail } from "lucide-react";

export default function Hero() {
  const skills = [
    { name: "Flutter", cat: "Mobile" },
    { name: "Laravel", cat: "Backend" },
    { name: "CodeIgniter 4", cat: "Backend" },
    { name: "MySQL", cat: "Database" },
    { name: "Firebase", cat: "Cloud" },
    { name: "REST API", cat: "Integration" },
    { name: "Git", cat: "VCS" },
    { name: "CI/CD", cat: "DevOps" }
  ];

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center bg-radial from-slate-950 via-slate-900 to-black text-white px-6 py-20 overflow-hidden">
      {/* Dynamic Background Grid Ornament */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointers-events-none" />

      {/* Decorative Orbs with Floating Animations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-24 right-1/4 w-96 h-96 bg-brand-500 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-[#4f46e5]/40 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Intro Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/60 rounded-full px-4 py-1.5 w-fit"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-emerald-400 tracking-wider font-mono">AVAILABLE FOR NEW PROJECTS</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl font-medium text-slate-300 font-mono tracking-wide"
            >
              Hi, I'm
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
            >
              <span className="block text-white">Gede Indrawan</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Mobile Developer
              </span>
              <span className="block text-2xl md:text-3xl font-medium text-slate-400 font-sans mt-3">
                &amp; Lifelong Learner
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-l-4 border-blue-500/80 bg-slate-900/50 backdrop-blur-md p-5 rounded-r-2xl max-w-xl"
          >
            <p className="text-slate-300 italic text-base md:text-lg font-medium leading-relaxed font-sans">
              "I may not be the smartest person in the room, but I am always willing to learn what I don't know."
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl"
          >
            I build robust, scalable mobile applications with a focus on clean architecture and seamless user experiences. Passionate about bridging the gap between elegant design and complex backend systems.
          </motion.p>

          {/* Core Skills Tech Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-3"
          >
            <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold font-mono">Primary Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.08, y: -2, backgroundColor: "rgba(14, 165, 233, 0.25)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05, type: "spring", stiffness: 200 }}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800/60 border border-slate-700/55 text-sky-300 font-mono flex items-center gap-1.5 cursor-default shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center gap-4 pt-4"
          >
            <a
              href="mailto:gedeindrawan2006@gmail.com"
              className="p-3 bg-slate-850 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 rounded-xl transition-all duration-350 border border-slate-800 hover:border-sky-500/50"
              title="Email Gede"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sdgede"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-850 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 rounded-xl transition-all duration-350 border border-slate-800 hover:border-sky-500/50"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <span className="w-px h-6 bg-slate-800" />
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Bali, Indonesia</span>
            </div>
          </motion.div>
        </div>

        {/* Right Panel: Interactive Smartphone Mockup */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
            className="relative w-full max-w-[320px] aspect-[9/18.5] bg-slate-950 rounded-[48px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-4 border-slate-800 hover:border-slate-700/80 transition-colors duration-500 group"
          >
            {/* Glossy Reflection Highlight */}
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-t-[44px] pointer-events-none" />

            {/* Simulated Dynamic Island / Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-black rounded-full z-30 flex items-center justify-between px-3.5">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                <span className="w-2.5 h-1 bg-slate-800 rounded-full" />
              </div>
            </div>

            {/* Inner Phone Screen Content */}
            <div className="w-full h-full bg-slate-900 rounded-[38px] overflow-hidden border border-slate-950/80 flex flex-col justify-between py-8 px-5 relative">
              {/* Internal Mockup Bg Glow */}
              <div className="absolute inset-0 bg-radial from-indigo-500/10 via-transparent to-transparent opacity-60" />

              {/* Simulated Status Bar */}
              <div className="flex justify-between items-center text-[10px] font-bold font-mono text-slate-500 z-10 px-2">
                <span>09:41 AM</span>
                <div className="flex gap-1 items-center">
                  <span>5G</span>
                  <div className="w-4.5 h-2.5 border border-slate-600 rounded-[3px] flex items-center p-0.5">
                    <div className="w-3/4 h-full bg-slate-400 rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* Dynamic Center Widget on Phone Face */}
              <div className="flex-1 flex flex-col justify-center items-center space-y-6 z-10 relative">
                {/* Floating Apple Watch / Sparkle Icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>

                <div className="text-center space-y-1">

                  <p className="text-[11px] text-slate-400">Published via Flutter Native Platform</p>
                </div>

                {/* Simulated UI Skeleton Cards */}
                <div className="w-full space-y-2.5">
                  <div className="p-3 bg-slate-950/65 rounded-xl border border-slate-800/40 space-y-1.5">
                    <div className="h-2 w-12 bg-slate-800 rounded" />
                    <div className="h-3 w-4/5 bg-gradient-to-r from-blue-500/50 to-indigo-500/40 rounded" />
                  </div>
                  <div className="p-3 bg-slate-950/65 rounded-xl border border-slate-800/40 space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="h-2.5 w-16 bg-slate-800 rounded" />
                      <div className="h-4 w-7 bg-indigo-500/30 rounded-full flex items-center justify-end px-1">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded overflow-hidden">
                      <motion.div
                        animate={{ width: ["10%", "85%", "10%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-blue-400 to-sky-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Button */}
              <div className="z-10 space-y-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const el = document.getElementById("projects");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3 bg-white text-slate-950 hover:bg-slate-200 transition-colors duration-300 rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-1.5 shadow-md shadow-white/5 cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  Explore Works
                </motion.button>
                <div className="w-20 h-1 bg-slate-700/60 rounded-full mx-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Arrow Floating Element */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => {
          const el = document.getElementById("journey");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-slate-500 hover:text-white transition-colors duration-300 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] tracking-wider uppercase font-bold font-mono">Scroll down</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
