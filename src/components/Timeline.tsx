import { motion } from "motion/react";
import { TIMELINE } from "../data";
import { Code, ScanFace, GraduationCap, FileJson, Smartphone, AppWindow, Calendar } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Code": return <Code className="w-5 h-5 text-indigo-400" />;
    case "ScanFace": return <ScanFace className="w-5 h-5 text-cyan-400" />;
    case "GraduationCap": return <GraduationCap className="w-5 h-5 text-emerald-400" />;
    case "FileJson": return <FileJson className="w-5 h-5 text-amber-400" />;
    case "Smartphone": return <Smartphone className="w-5 h-5 text-purple-400" />;
    case "AppWindow": return <AppWindow className="w-5 h-5 text-pink-400" />;
    default: return <Calendar className="w-5 h-5 text-blue-400" />;
  }
};

export default function Timeline() {
  return (
    <section id="journey" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Decorative Top Accent Card Frame */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none opacity-[0.03]" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-bold tracking-widest font-mono uppercase bg-blue-100 rounded-full px-4 py-1"
          >
            Milestones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-sans"
          >
            My Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            A chronological progression of technical skill acquisition, project milestones, and professional transitions.
          </motion.p>
        </div>

        {/* Timeline Line & Node Flow */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 z-0" />

          {/* Animated Highlight Line on Hover and Scroll */}
          <motion.div
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 -translate-x-1/2 z-10"
          />

          <div className="space-y-12 relative z-20">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center justify-between relative">
                  {/* Timeline Node Bubble */}
                  <motion.div
                    viewport={{ once: true }}
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, delay: index * 0.1 }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-slate-300 shadow-md flex items-center justify-center z-30 peer hover:border-blue-500 hover:scale-110 transition-all duration-300 cursor-help"
                  >
                    {getIcon(item.icon)}
                  </motion.div>

                  {/* Empty Spacer side on Desktop */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Responsive Timeline Info Panel */}
                  <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ type: "spring", stiffness: 70, delay: index * 0.12 }}
                    whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0,0,0,0.05), 0 8px 10px -6px rgb(0,0,0,0.05)" }}
                    className={`ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[45%] p-6 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 relative cursor-default group hover:border-slate-300 ${
                      isEven ? "md:order-first" : "md:order-last"
                    }`}
                  >
                    {/* Tiny Triangular Tooltip Arrow */}
                    <div className={`hidden md:block absolute top-[22px] w-3 h-3 bg-white border-b border-r border-slate-100 transform rotate-135 ${
                      isEven ? "-right-1.5 border-t border-l border-b-0 border-r-0" : "-left-1.5"
                    }`} />

                    <div className="space-y-3">
                      {/* Sub-Header / Year tag */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-mono text-indigo-500 uppercase tracking-widest bg-indigo-50 px-2.5 py-1 rounded-md">
                          {item.year}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase font-mono tracking-wider">
                          Phase 0{item.id}
                        </span>
                      </div>

                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Technical Stack Tags used in this point */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tech.map((term) => (
                          <span
                            key={term}
                            className="text-[10px] bg-slate-100 border border-slate-200/50 text-slate-500 font-semibold font-mono rounded px-2 py-0.5"
                          >
                            {term}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
