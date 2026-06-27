import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WHY_ACADEMY } from "../data";
import { Sparkles, Compass, TrendingUp, CheckCircle, ChevronRight, X, Heart, Shield } from "lucide-react";

export default function Academy() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <section id="academy" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Mesh Gradient Background Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-400 rounded-full blur-[110px] opacity-[0.06] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-400 rounded-full blur-[130px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-bold tracking-widest font-mono uppercase bg-blue-100/80 rounded-full px-4 py-1"
          >
            Vision
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            {WHY_ACADEMY.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            {WHY_ACADEMY.subtitle}
          </motion.p>
        </div>

        {/* Two Dual Pillars: Curiosity & Persistence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {WHY_ACADEMY.cards.map((card, idx) => (
            <motion.div
              key={card.title}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, delay: idx * 0.15 }}
              whileHover={{ y: -6, boxShadow: "0 25px 30px -10px rgba(0,0,0,0.06)" }}
              className="bg-white border border-slate-100 p-8 rounded-2xl shadow-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-50 border border-indigo-100/50 rounded-xl flex items-center justify-center text-indigo-600">
                  {idx === 0 ? <Compass className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
              </div>
              
              <div className="pt-6 border-t border-slate-50 mt-6 flex items-center gap-2 text-indigo-600 font-bold text-xs tracking-wider uppercase">
                <span>Value Alignment</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Intentionally Deep Blue Designing For Intent Card Grid */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-tr from-slate-950 via-blue-950 to-slate-900 border border-blue-900/40 p-8 md:p-12 shadow-xl shadow-blue-950/10 text-white overflow-hidden group"
        >
          {/* Subtle Vector Radar Ring in Card background */}
          <div className="absolute right-0 bottom-0 w-80 h-80 border border-blue-500/10 rounded-full -translate-x-[-15%] -translate-y-[-15%] pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-120 h-120 border border-blue-500/5 rounded-full -translate-x-[-15%] -translate-y-[-15%] pointer-events-none animate-pulse" />

          <div className="max-w-2xl space-y-8 relative z-10">
            <div className="inline-flex items-center gap-1 text-xs font-bold font-mono tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3 w-fit py-1 border border-blue-400/20 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              Core Philosophy
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
              {WHY_ACADEMY.focusText.heading}
            </h3>

            <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-sans font-medium">
              <div className="space-y-2">
                <span className="font-bold text-white block">Product Thinking:</span>
                <p className="text-slate-400 font-normal">{WHY_ACADEMY.focusText.paragraph1.replace("Product Thinking:", "").trim()}</p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-white block">User-Centered Design:</span>
                <p className="text-slate-400 font-normal">{WHY_ACADEMY.focusText.paragraph2.replace("User-Centered Design:", "").trim()}</p>
              </div>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-white text-slate-950 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-all duration-200 cursor-pointer shadow-md shadow-black/10"
              >
                View Case Studies
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Modal Dialogue Box representing Case Study Overviews */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 15 }}
                className="w-full max-w-lg bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl relative block"
              >
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors p-2 rounded-full hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold font-mono text-indigo-600 uppercase tracking-widest">
                      Apple Academy Framework
                    </span>
                    <h3 className="text-2xl font-black text-slate-950">
                      Product Thinking Checklist
                    </h3>
                    <p className="text-slate-500 text-xs">
                      The internal framework I apply to map technical problems directly to human values.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-4 items-start p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100/20">
                      <Heart className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="font-bold text-sm text-slate-900 block">User Empathy Mapping</span>
                        <p className="text-xs text-slate-600 leading-normal">
                          Observing target user groups in natural environments rather than making abstract workspace assumptions.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100/20">
                      <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="font-bold text-sm text-slate-900 block">Technical Feasibility Loops</span>
                        <p className="text-xs text-slate-600 leading-normal">
                          Drafting rapid paper prototypes and early code modules to evaluate backend hurdles before complex cycles.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start p-3 bg-amber-50/50 rounded-2xl border border-amber-100/20">
                      <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="font-bold text-sm text-slate-900 block">Iterative Value Shipping</span>
                        <p className="text-xs text-slate-600 leading-normal">
                          Prioritizing clean Core features over multiple unstable side layouts, maintaining pristine user interactions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      onClick={() => setModalOpen(false)}
                      className="w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-800 cursor-pointer"
                    >
                      Acknowledge Alignment
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
