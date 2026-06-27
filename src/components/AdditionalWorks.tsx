import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ADDITIONAL_WORKS } from "../data";
import { AdditionalWork } from "../types";
import { Image, Award, Layout, BookOpen, Compass, Sparkles, X } from "lucide-react";

export default function AdditionalWorks() {
  const [selectedConcept, setSelectedConcept] = useState<AdditionalWork | null>(null);

  // Helper renderer for visual elements based on type
  const renderMockVisual = (type: string) => {
    switch (type) {
      case "chart":
        return (
          <div className="h-28 bg-slate-100 rounded-xl flex items-end justify-between p-4 border border-slate-200/50">
            <div className="w-4 h-1/3 bg-blue-500 rounded-sm animate-pulse" />
            <div className="w-4 h-2/3 bg-indigo-500 rounded-sm" />
            <div className="w-4 h-1/2 bg-sky-500 rounded-sm animate-pulse" />
            <div className="w-4 h-3/4 bg-violet-500 rounded-sm" />
            <div className="w-4 h-2/5 bg-purple-500 rounded-sm" />
          </div>
        );
      case "badge":
        return (
          <div className="h-28 bg-gradient-to-tr from-amber-50 to-orange-50 rounded-xl flex items-center justify-center p-4 border border-amber-100/50">
            <div className="text-center space-y-1">
              <Award className="w-8 h-8 text-amber-500 mx-auto animate-bounce-slow" />
              <span className="text-[9px] font-bold font-mono text-amber-700 tracking-wider block uppercase">Apple SwiftUI</span>
            </div>
          </div>
        );
      case "iconset":
        return (
          <div className="h-28 bg-slate-50 rounded-xl grid grid-cols-4 gap-2 p-3 border border-slate-200/45">
            {[Compass, Sparkles, Award, Layout].map((Icon, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-lg flex items-center justify-center p-2.5 text-indigo-400">
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        );
      case "slides":
        return (
          <div className="h-28 bg-slate-950 rounded-xl p-3 border border-slate-800 flex flex-col justify-between text-white">
            <div className="flex justify-between items-center text-[8px] font-mono text-slate-500">
              <span>VoiceOver Workshop</span>
              <span>Slide 01/14</span>
            </div>
            <div className="space-y-1.5 text-left">
              <div className="h-1.5 w-1/3 bg-indigo-400 rounded" />
              <div className="h-2 w-4/5 bg-slate-700 rounded" />
            </div>
            <span className="text-[7px] text-indigo-300 font-bold uppercase tracking-wider block">Accessibility Standards API</span>
          </div>
        );
      case "bubbles":
        return (
          <div className="h-28 bg-slate-100 rounded-xl p-4 border border-slate-200/50 flex justify-center items-center relative overflow-hidden group">
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="w-16 h-16 rounded-full border border-dashed border-indigo-400/40 flex items-center justify-center"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20" />
            </motion.div>
            <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-purple-500/20" />
            <div className="absolute bottom-3 left-4 w-4 h-4 rounded-full bg-sky-500/30" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="additional-works" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Title Block */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 text-xs text-sky-600 font-bold tracking-widest font-mono uppercase bg-sky-100 rounded-full px-4 py-1"
          >
            Gallery
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Additional Works
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            A curated gallery of app interfaces, design explorations, certifications, and technical workshops that complement the core portfolio.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADDITIONAL_WORKS.map((work, idx) => (
            <motion.div
              key={work.id}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 90 }}
              whileHover={{ y: -6, boxShadow: "0 22px 30px -8px rgba(0,0,0,0.06)" }}
              onClick={() => setSelectedConcept(work)}
              className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200/80 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-5 cursor-pointer group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest uppercase block">
                  {work.category}
                </span>
                
                {renderMockVisual(work.visualType)}

                <div className="space-y-1 text-left">
                  <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-sky-600 transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {work.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold font-mono tracking-widest uppercase text-slate-400 group-hover:text-slate-800 transition-colors">
                <span>View Overviews</span>
                <span className="text-xs font-serif font-black">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bento Grid Detail Overlay dialog */}
        <AnimatePresence>
          {selectedConcept && (
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
                className="w-full max-w-md bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl relative block space-y-6"
              >
                <button
                  onClick={() => setSelectedConcept(null)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors p-2 rounded-full hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-4">
                  <span className="text-[10px] font-bold font-mono text-cyan-600 uppercase tracking-widest">
                    {selectedConcept.category}
                  </span>
                  <h3 className="text-2xl font-black text-slate-950 leading-tight">
                    {selectedConcept.title}
                  </h3>
                  
                  {renderMockVisual(selectedConcept.visualType)}

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedConcept.description}
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                    <span className="text-[9px] font-bold font-mono text-slate-400 block uppercase">Context Alignment</span>
                    <p className="text-xs text-slate-500 leading-normal">
                      This task demonstrates the auxiliary design capabilities and software planning discipline required for professional developer setups.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedConcept(null)}
                    className="w-full py-3 bg-slate-950 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-800"
                  >
                    Done Exploring
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
