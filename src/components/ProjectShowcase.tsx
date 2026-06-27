import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import {
  Layers, Cpu, Terminal, ArrowRight, ScanFace, CheckCircle,
  Play, Lock, AppWindow, ShieldCheck, ChevronRight, FileCode, Check, Server, RefreshCw,
  Users, Trash2, Plus, UserCheck, XCircle, Search, HelpCircle, X, BookOpen
} from "lucide-react";

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState<string>("mobile-dev");
  const [absensiModalOpen, setAbsensiModalOpen] = useState<boolean>(false);
  const [selectedMobileApp, setSelectedMobileApp] = useState<number>(0);
  const [faceScanActive, setFaceScanActive] = useState<boolean>(false);
  const [faceScanSuccess, setFaceScanSuccess] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [pdfGenerating, setPdfGenerating] = useState<boolean>(false);
  const [pdfPrinted, setPdfPrinted] = useState<boolean>(false);

  // PPDB Interactive State System
  const [students, setStudents] = useState([
    { name: "dhefanda julian christo putra Irawan", nisn: "76391630", program: "PPLG", status: "Proses Selesai" },
    { name: "Yanuar Nur Adrean", nisn: "24353", program: "PERHOTELAN", status: "Proses Selesai" },
    { name: "Rehan Yogi Agis Riyanto", nisn: "09754324", program: "KULINER", status: "Proses Selesai" },
    { name: "fahiraaaa", nisn: "09877261", program: "TKC", status: "Proses Selesai" },
    { name: "fahiraazz", nisn: "5129", program: "TKC", status: "Proses Selesai" },
    { name: "ananda hary", nisn: "09827382", program: "PERHOTELAN", status: "Ditolak" },
  ]);

  const [formName, setFormName] = useState("");
  const [formNisn, setFormNisn] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formProgram, setFormProgram] = useState("PPLG");
  const [searchQuery, setSearchQuery] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  // Active Project Data
  const currentProject = PROJECTS.find((p) => p.id === activeTab) || PROJECTS[0];

  // Helper icons
  const getHowIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers": return <Layers className="w-5 h-5 text-indigo-500" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-sky-500" />;
      case "Terminal": return <Terminal className="w-5 h-5 text-purple-500" />;
      case "Binary": return <FileCode className="w-5 h-5 text-rose-500" />;
      case "Server": return <Server className="w-5 h-5 text-emerald-500" />;
      case "Workflow": return <RefreshCw className="w-5 h-5 text-amber-500 animate-spin-slow" />;
      default: return <Layers className="w-5 h-5 text-blue-500" />;
    }
  };

  // Face Scan Simulator Handler
  const triggerFaceScan = () => {
    setFaceScanActive(true);
    setFaceScanSuccess(false);
    setTimeout(() => {
      setFaceScanSuccess(true);
      setFaceScanActive(false);
    }, 2800);
  };

  // PDF Generation Automation mock
  const generatePdfDemo = () => {
    setPdfGenerating(true);
    setPdfPrinted(false);
    setTimeout(() => {
      setPdfGenerating(false);
      setPdfPrinted(true);
    }, 2000);
  };

  return (
    <section id="projects" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 text-xs text-indigo-600 font-bold tracking-widest font-mono uppercase bg-indigo-100 rounded-full px-4 py-1"
          >
            Featured Engineering
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Portfolio Projects
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Real-world systems, cross-platform apps, and enterprise solutions developed with structural discipline.
          </p>
        </div>

        {/* Tab Toggle Buttons */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-3 mb-16 max-w-4xl mx-auto bg-slate-100 p-2.5 rounded-2xl border border-slate-200/60 shadow-inner">
          {PROJECTS.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                setActiveTab(proj.id);
                setStepIndex(0);
                setFaceScanSuccess(false);
                setFaceScanActive(false);
                setPdfPrinted(false);
              }}
              className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold tracking-wide transition-all duration-350 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === proj.id
                  ? "bg-white text-slate-900 shadow-md transform scale-[1.02] border-b-2 border-indigo-500"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              {proj.id === "mobile-dev" && <AppWindow className="w-4 h-4" />}
              {proj.id === "face-attendance" && <ScanFace className="w-4 h-4" />}
              {proj.id === "student-admission" && <ShieldCheck className="w-4 h-4" />}
              {proj.id === "intern-report" && <FileCode className="w-4 h-4" />}
              {proj.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        {/* Main Tab Screen Wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            
            {/* Left Column: Project Documentation Details */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest font-mono text-indigo-500 block">
                  Project Case Study
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                  {currentProject.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                  {currentProject.tagline}
                </p>
              </div>

              {/* OUTCOME BOX: The Why & Big Numbers badge overlay */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="sm:col-span-2 space-y-2">
                  <h4 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase font-mono">
                    Core Objective
                  </h4>
                  <p className="text-slate-800 font-extrabold text-sm md:text-base">
                    {currentProject.outcome.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {currentProject.outcome.tags.map((tg) => (
                      <span key={tg} className="text-[9px] bg-slate-200/70 border border-slate-300/30 text-slate-700 font-bold font-mono uppercase px-2 py-0.5 rounded-md">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl p-4 flex flex-col justify-center items-center text-white text-center shadow-lg shadow-indigo-500/10">
                  <span className="text-3xl font-black font-sans leading-none block">
                    {currentProject.outcome.metrics}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest font-bold font-mono text-indigo-100 mt-1 block">
                    Apps/Metric
                  </span>
                </div>
              </div>

              {/* HOW IT WORKS / IMPLEMENTATION POINTS */}
              <div className="space-y-5">
                <h4 className="text-[11px] font-bold tracking-widest text-slate-400 uppercase font-mono">
                  Architectural Implementation
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {currentProject.how.description}
                </p>

                <div className="space-y-4">
                  {currentProject.how.points.map((pt, pIdx) => (
                    <motion.div
                      key={pt.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: pIdx * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors duration-250 cursor-default"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        {getHowIcon(pt.icon)}
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-bold text-sm text-slate-900">{pt.title}</h5>
                        <p className="text-xs text-slate-500 leading-relaxed">{pt.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CHALLENGES ROW */}
              <div className="p-6 bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-md relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 p-3 text-slate-800 font-black text-6xl select-none uppercase font-mono">
                  ERR
                </div>
                <div className="space-y-1 z-10 relative">
                  <span className="text-[10px] uppercase tracking-widest font-bold font-mono text-rose-400">
                    Obstacles Overcome
                  </span>
                  <h4 className="font-bold text-lg text-white">
                    {currentProject.challenges.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {currentProject.challenges.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 z-10 relative">
                  {currentProject.challenges.items.map((it) => (
                    <div key={it.label} className="p-3 bg-slate-900 border border-slate-800/80 rounded-xl space-y-1">
                      <span className="text-[10px] font-bold text-indigo-400 font-mono tracking-wider block uppercase">
                        {it.label}
                      </span>
                      <p className="text-[11px] text-slate-300 leading-normal">{it.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHAT I LEARNED TEXT BOX */}
              <div className="p-6 bg-blue-50/50 border border-blue-100/50 rounded-2xl space-y-2">
                <div className="flex items-center gap-1.5 text-blue-800">
                  <Check className="w-4 h-4 font-bold" />
                  <span className="text-[10px] uppercase font-bold tracking-widest font-mono">
                    Retrospective Insight
                  </span>
                </div>
                <p className="text-slate-700 text-xs md:text-sm leading-relaxed italic">
                  "{currentProject.whatILearned}"
                </p>
              </div>

              {/* Action Buttons for Documentation / Links */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {currentProject.id === "student-admission" && (
                  <a
                    href="https://drive.google.com/drive/folders/1xarjP006H1KBW4Ht6GHOZJBX1JSbKyQt?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shadow-emerald-600/10 text-center"
                  >
                    <span>🌐</span> Buka Dokumentasi PPDB (Google Drive)
                  </a>
                )}
                {currentProject.id === "face-attendance" && (
                  <>
                    <a
                      href="https://dokumentasi.edgeone.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shadow-cyan-600/10 text-center cursor-pointer"
                    >
                      Dokumentasi Absensi Wajah (Edge One)
                    </a>
                   
                  </>
                )}
                {currentProject.id !== "student-admission" && currentProject.id !== "face-attendance" && (
                  <a
                    href="https://drive.google.com/drive/folders/1xarjP006H1KBW4Ht6GHOZJBX1JSbKyQt?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shadow-slate-900/10 text-center text-slate-100"
                  >
                    Lihat Dokumentasi di Google Drive
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Dynamic Screen Mockup Interactive Panel */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-md bg-slate-100 rounded-3xl p-4 md:p-6 border border-slate-200/80 shadow-md space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold font-mono">
                    Interactive Playground
                  </span>
                </div>

                {/* 1. FLUTTER ECOSYSTEM MOCKUP PLAYGROUND */}
                {currentProject.id === "mobile-dev" && (
                  <div className="space-y-4">
                    <div className="flex justify-center gap-2 mb-2 bg-slate-200/60 p-1 rounded-xl">
                      {currentProject.how.screenshots.map((scr, idx) => (
                        <button
                          key={scr.title}
                          onClick={() => setSelectedMobileApp(idx)}
                          className={`flex-1 py-1 px-1 rounded-lg text-[9px] font-bold uppercase tracking-wider text-center transition-all ${
                            selectedMobileApp === idx
                              ? "bg-indigo-600 text-white shadow-sm"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          {scr.title.split(" ")[0]}
                        </button>
                      ))}
                    </div>

                    {/* Smartphone screen renderer */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedMobileApp}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-[280px] mx-auto aspect-[9/18] bg-slate-950 rounded-[40px] p-2.5 shadow-xl border-4 border-slate-800 relative"
                      >
                        <div className="absolute top-2 w-20 h-4 bg-black rounded-full left-1/2 -translate-x-1/2 z-20" />
                        <div className="w-full h-full bg-slate-900 rounded-[30px] overflow-hidden p-4 flex flex-col justify-between py-6">
                          
                          {/* Inner Mock Screen Header */}
                          <div className="flex justify-between items-center text-[8px] font-bold text-slate-400 pt-1 font-mono">
                            <span>09:41</span>
                            <span>Flutter Client Engine</span>
                          </div>

                          <div className="flex-1 flex flex-col justify-center items-center space-y-4 pt-4">
                            <span className="text-[10px] font-extrabold font-mono tracking-widest text-[#4f46e5] uppercase px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-md">
                              {currentProject.how.screenshots[selectedMobileApp].title}
                            </span>
                            
                            {/* Rendering visual properties mock inside standard components */}
                            <div className="w-full space-y-2.5">
                              {currentProject.how.screenshots[selectedMobileApp].elements.map((el, elIdx) => {
                                if (el.type === "header") {
                                  return (
                                    <div key={elIdx} className="text-center font-black text-xs text-white">
                                      {el.label}
                                    </div>
                                  );
                                }
                                if (el.type === "card") {
                                  return (
                                    <div key={elIdx} className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg space-y-1">
                                      <span className="text-[8px] font-bold font-mono text-slate-500 block uppercase">{el.label}</span>
                                      <span className="text-xs font-bold text-slate-200 block">{el.value}</span>
                                    </div>
                                  );
                                }
                                if (el.type === "button") {
                                  return (
                                    <div key={elIdx} className="p-2.5 rounded-lg bg-indigo-600 text-white text-center font-bold text-[9px] uppercase tracking-wider shadow-md">
                                      {el.label}
                                    </div>
                                  );
                                }
                                if (el.type === "chart") {
                                  return (
                                    <div key={elIdx} className="p-2 bg-slate-950 rounded-lg space-y-1">
                                      <span className="text-[8px] font-bold text-slate-500 block uppercase">{el.label}</span>
                                      <div className="flex items-end justify-between h-10 px-2 pt-1 border-b border-l border-slate-800">
                                        <div className="w-2.5 h-6 bg-indigo-500 rounded-t-sm animate-pulse" />
                                        <div className="w-2.5 h-4 bg-sky-500 rounded-t-sm" />
                                        <div className="w-2.5 h-8 bg-[#10b981] rounded-t-sm" />
                                        <div className="w-2.5 h-5 bg-amber-500 rounded-t-sm" />
                                      </div>
                                    </div>
                                  );
                                }
                                if (el.type === "list") {
                                  return (
                                    <div key={elIdx} className="p-2 bg-slate-950/60 rounded-lg flex justify-between items-center text-[9px] border border-slate-800/30">
                                      <span className="text-slate-400 font-medium">{el.label}</span>
                                      <span className="text-[#10b981] font-bold font-mono">{el.value}</span>
                                    </div>
                                  );
                                }
                                return null;
                              })}
                            </div>
                            
                            <p className="text-[9px] text-center text-slate-500 leading-normal px-2">
                              {currentProject.how.screenshots[selectedMobileApp].caption}
                            </p>
                          </div>

                          <div className="w-12 h-1 bg-slate-700/80 rounded-full mx-auto" />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}

                {/* 2. BIOMETRIC FACE RECOGNITION SIMULATOR */}
                {currentProject.id === "face-attendance" && (
                  <div className="space-y-6">
                    <div className="mt-2 text-center">
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Interact with the OpenCV face verification module. Click below to start the biometric scanning recognition loop.
                      </p>
                    </div>

                    <div className="relative w-full max-w-[280px] mx-auto aspect-square rounded-full border-4 border-slate-800 bg-slate-950 overflow-hidden shadow-lg flex items-center justify-center group flex-col">
                      {/* Scan Lines Laser effect code */}
                      {faceScanActive && (
                        <motion.div
                          animate={{ y: ["0%", "100%", "0%"] }}
                          transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                          className="absolute inset-x-0 h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-30 pointer-events-none"
                        />
                      )}

                      {/* Mock Vector Face Contour drawing */}
                      <div className="absolute inset-0 flex items-center justify-center p-6 select-none opacity-80">
                        <ScanFace className={`w-36 h-36 border border-slate-800/40 rounded-3xl p-4 transition-all duration-300 ${
                          faceScanActive ? "text-cyan-400 animate-pulse scale-103" : 
                          faceScanSuccess ? "text-emerald-400 scale-105" : "text-slate-700"
                        }`} />
                      </div>

                      {/* Floating statistics Overlay HUD on Scanning */}
                      <AnimatePresence>
                        {faceScanActive && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-6 bg-slate-900/90 border border-cyan-500/30 px-3 py-1.5 rounded-lg text-center font-mono text-[9px] text-cyan-300 z-20 space-y-1 block shadow-md"
                          >
                            <span className="block font-bold">SCANNING VECTOR FACE</span>
                            <span className="block text-[8px] text-slate-400">FPS: 48 • haar_cascade.xml • active</span>
                          </motion.div>
                        )}

                        {/* Success HUD screen feedback */}
                        {faceScanSuccess && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute bottom-6 bg-slate-900/95 border border-emerald-500/40 px-3.5 py-1.5 rounded-lg text-center font-mono text-[9px] text-emerald-400 z-20 space-y-1 block shadow-md"
                          >
                            <span className="font-extrabold block">IDENTITY VERIFIED</span>
                            <span className="block text-[8px] text-slate-400">Class XII - Absen logged ok</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex justify-center pt-2">
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        onClick={triggerFaceScan}
                        disabled={faceScanActive}
                        className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 border border-slate-700 cursor-pointer shadow-md"
                      >
                        {faceScanActive ? (
                          <>
                            <span className="inline-block w-4 h-4 rounded-full border-2 border-slate-400 border-t-white animate-spin" />
                            Analyzing Frames...
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-white text-white" />
                            Simulate Face Scan
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                )}

                {/* 3. STUDENT ADMISSION REGISTRATION PIPELINE */}
                {currentProject.id === "student-admission" && (
                  <div className="space-y-4">
                    {/* Step navigation button indicators */}
                    <div className="flex justify-between items-center bg-slate-200/60 p-1.5 rounded-xl text-xs gap-1">
                      {[
                        { title: "01. Landing", icon: "🌐" },
                        { title: "02. Form", icon: "📝" },
                        { title: "03. Admin Console", icon: "📊" }
                      ].map((step, idx) => (
                        <button
                          key={step.title}
                          onClick={() => {
                            setStepIndex(idx);
                            setFormSuccess(false);
                            setFormError("");
                          }}
                          className={`flex-1 py-1.5 px-1 rounded-lg font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                            stepIndex === idx 
                              ? "bg-indigo-600 text-white shadow-sm" 
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                          style={{ fontSize: "9px" }}
                        >
                          <span>{step.icon}</span>
                          <span className="hidden sm:inline">{step.title}</span>
                          <span className="sm:hidden">{step.title.split(".")[0]}</span>
                        </button>
                      ))}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={stepIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between"
                      >
                        {/* Interactive Screen Display Header */}
                        <div className="bg-blue-900 px-4 py-3 border-b border-blue-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[10px] font-bold font-mono tracking-wide text-blue-200">
                              SMK PARIWISATA DALUNG • PPDB v1.1
                            </span>
                          </div>
                          <span className="text-[8px] bg-sky-500/20 text-sky-300 font-bold px-2 py-0.5 rounded font-mono uppercase">
                            LIVE PREVIEW
                          </span>
                        </div>

                        {/* STEP 0: LANDING PAGE PORTAL */}
                        {stepIndex === 0 && (
                          <div className="p-4 sm:p-5 space-y-4">
                            <div className="text-center py-4 bg-gradient-to-br from-indigo-950 to-blue-900 rounded-xl px-3 border border-indigo-500/20 relative overflow-hidden">
                              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
                              <span className="text-[9px] text-yellow-400 font-black tracking-widest uppercase block mb-1">
                                PORTAL RESMI PPDB ONLINE
                              </span>
                              <h4 className="font-black text-sm md:text-base text-white uppercase tracking-tight">
                                SMK Pariwisata Dalung Badung
                              </h4>
                              <p className="text-[10px] text-blue-200 font-medium max-w-xs mx-auto mt-1">
                                Unggul, Berbudaya, Berdaya Saing Global
                              </p>

                              <div className="flex items-center justify-center gap-2 mt-4">
                                <button
                                  onClick={() => setStepIndex(1)}
                                  className="py-1.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black font-sans uppercase tracking-wider text-[9px] transition-all cursor-pointer"
                                >
                                  DAFTAR AKUN BARU
                                </button>
                                <button
                                  onClick={() => setStepIndex(2)}
                                  className="py-1.5 px-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-black font-sans uppercase tracking-wider text-[9px] transition-all cursor-pointer"
                                >
                                  LOGIN PORTAL
                                </button>
                              </div>
                            </div>

                            {/* Program Seats Count (Check Jumlah Pendaftar) */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                                <span className="text-[9px] font-bold tracking-widest text-slate-400 font-mono uppercase">
                                  - Check Jumlah Pendaftar -
                                </span>
                                <span className="text-[8px] font-mono text-indigo-400 font-bold">
                                  Tahun Pelajaran 2026/2027
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                {[
                                  { prog: "PPLG", desc: "Software & Game Dev", color: "from-blue-500/15 text-blue-400 border-blue-500/20" },
                                  { prog: "PERHOTELAN", desc: "Hospitality & Tourism", color: "from-emerald-500/15 text-emerald-400 border-emerald-500/20" },
                                  { prog: "TKC", desc: "Beauty & Spa Services", color: "from-pink-500/15 text-pink-400 border-pink-500/20" },
                                  { prog: "KULINER", desc: "Culinary & Baking Arts", color: "from-amber-500/15 text-amber-400 border-amber-500/20" }
                                ].map((p) => {
                                  const count = students.filter(s => s.program === p.prog).length;
                                  return (
                                    <div 
                                      key={p.prog} 
                                      className={`p-2 rounded-lg bg-gradient-to-br ${p.color} border flex flex-col justify-between`}
                                    >
                                      <span className="text-[10px] font-black">{p.prog}</span>
                                      <span className="text-[8px] text-slate-400 leading-tight mb-2 font-medium">{p.desc}</span>
                                      <div className="flex items-baseline justify-between pt-1 border-t border-slate-800/60">
                                        <span className="text-[8px] font-mono text-slate-500 uppercase font-black">Registered</span>
                                        <span className="text-sm font-black tracking-tight">{count} Siswa</span>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* STEP 1: FORM REGISTRATION INTAKE */}
                        {stepIndex === 1 && (
                          <div className="p-4 sm:p-5 space-y-4">
                            <div className="border-b border-slate-800 pb-2">
                              <span className="text-[9px] font-bold text-emerald-400 font-mono tracking-widest uppercase block">
                                PPDB ONLINE FORM REGISTRASI
                              </span>
                              <h4 className="font-extrabold text-xs text-white uppercase mt-0.5">
                                Isi Data Diri Calon Siswa
                              </h4>
                            </div>

                            <AnimatePresence mode="wait">
                              {formSuccess ? (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="p-6 text-center space-y-2 bg-emerald-900/10 border border-emerald-500/20 rounded-xl"
                                >
                                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center font-black">
                                    ✓
                                  </div>
                                  <h5 className="font-black text-sm text-emerald-400">Pendaftaran Berhasil!</h5>
                                  <p className="text-[10px] text-slate-400">
                                    Calon siswa "{formName}" telah didata dengan program "{formProgram}". Mentransfer ke panel admin...
                                  </p>
                                </motion.div>
                              ) : (
                                <form 
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    if (!formName.trim()) {
                                      setFormError("Silakan masukkan nama siswa.");
                                      return;
                                    }
                                    if (!formNisn.trim() || formNisn.length < 4) {
                                      setFormError("Silakan masukkan NISN valid (minimal 4 digit).");
                                      return;
                                    }
                                    setFormError("");
                                    const newStud = {
                                      name: formName,
                                      nisn: formNisn,
                                      program: formProgram,
                                      status: "Proses Selesai"
                                    };
                                    setStudents([newStud, ...students]);
                                    setFormSuccess(true);
                                    setTimeout(() => {
                                      setFormSuccess(false);
                                      setFormName("");
                                      setFormNisn("");
                                      setFormPhone("");
                                      setStepIndex(2); // Redirect to admin table
                                    }, 1800);
                                  }}
                                  className="space-y-3"
                                >
                                  {formError && (
                                    <div className="p-2 text-rose-400 bg-rose-500/10 border border-rose-500/20 text-[10px] font-bold rounded-lg text-center">
                                      ⚠ {formError}
                                    </div>
                                  )}

                                  <div className="space-y-1">
                                    <label className="text-[9px] font-bold font-mono uppercase tracking-wider text-slate-400 block">
                                      Nama Lengkap Siswa *
                                    </label>
                                    <input 
                                      value={formName}
                                      onChange={(e) => setFormName(e.target.value)}
                                      placeholder="Contoh: Gede Indrawan" 
                                      type="text" 
                                      className="w-full text-xs font-semibold text-slate-100 p-2.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors" 
                                    />
                                  </div>

                                  <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                      <label className="text-[9px] font-bold font-mono uppercase tracking-wider text-slate-400 block">
                                        NISN *
                                      </label>
                                      <input 
                                        value={formNisn}
                                        onChange={(e) => setFormNisn(e.target.value)}
                                        placeholder="76391630" 
                                        type="number" 
                                        className="w-full text-xs font-semibold text-slate-100 p-2.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors" 
                                      />
                                    </div>

                                    <div className="space-y-1">
                                      <label className="text-[9px] font-bold font-mono uppercase tracking-wider text-slate-400 block">
                                        No. Handphone (WA)
                                      </label>
                                      <input 
                                        value={formPhone}
                                        onChange={(e) => setFormPhone(e.target.value)}
                                        placeholder="0812345678" 
                                        type="text" 
                                        className="w-full text-xs font-semibold text-slate-100 p-2.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors" 
                                      />
                                    </div>
                                  </div>

                                  <div className="space-y-1">
                                    <label className="text-[9px] font-bold font-mono uppercase tracking-wider text-slate-400 block">
                                      Pilihan Kompetensi Keahlian (Jurusan) *
                                    </label>
                                    <select
                                      value={formProgram}
                                      onChange={(e) => setFormProgram(e.target.value)}
                                      className="w-full text-xs font-semibold text-slate-100 p-2.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                                    >
                                      <option value="PPLG">PPLG - Pengembangan Perangkat Lunak & Gim</option>
                                      <option value="PERHOTELAN">PERHOTELAN - Hospitality & Tourism</option>
                                      <option value="TKC">TKC - Tata Kecantikan & Spa</option>
                                      <option value="KULINER">KULINER - Culinary & Baking Arts</option>
                                    </select>
                                  </div>

                                  <div className="flex gap-2 pt-2">
                                    <button
                                      type="button"
                                      onClick={() => setStepIndex(0)}
                                      className="flex-1 py-2.5 rounded-lg border border-slate-800 hover:bg-slate-800 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer text-center text-slate-400"
                                    >
                                      Kembali
                                    </button>
                                    <button
                                      type="submit"
                                      className="flex-1 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-black text-[10px] uppercase tracking-wider transition-colors cursor-pointer text-center shadow-lg shadow-indigo-600/30"
                                    >
                                      Simpan Data
                                    </button>
                                  </div>
                                </form>
                              )}
                            </AnimatePresence>
                          </div>
                        )}

                        {/* STEP 2: ADMIN LTE CONTROL PANEL & DATA LIST */}
                        {stepIndex === 2 && (
                          <div className="p-3 sm:p-4 space-y-4">
                            {/* Four Top Colored Status Cards */}
                            <div className="grid grid-cols-4 gap-1.5">
                              {/* Blue */}
                              <div className="bg-blue-600 p-1.5 rounded-lg flex flex-col justify-between">
                                <span className="text-[7px] text-blue-100 font-bold uppercase tracking-wide">Calon Siswa</span>
                                <span className="text-sm font-black block pt-0.5 leading-none">{students.length}</span>
                              </div>
                              {/* Green */}
                              <div className="bg-emerald-600 p-1.5 rounded-lg flex flex-col justify-between">
                                <span className="text-[7px] text-emerald-100 font-bold uppercase tracking-wide">Siswa Baru</span>
                                <span className="text-sm font-black block pt-0.5 leading-none">
                                  {students.filter(s => s.status === 'Proses Selesai').length}
                                </span>
                              </div>
                              {/* Yellow */}
                              <div className="bg-amber-500 p-1.5 rounded-lg flex flex-col justify-between text-slate-950">
                                <span className="text-[7px] text-amber-950 font-bold uppercase tracking-wide">Menunggu</span>
                                <span className="text-sm font-black block pt-0.5 leading-none">
                                  {students.filter(s => s.status === 'Menunggu Validasi').length}
                                </span>
                              </div>
                              {/* Red */}
                              <div className="bg-red-500 p-1.5 rounded-lg flex flex-col justify-between">
                                <span className="text-[7px] text-red-100 font-bold uppercase tracking-wide">Ditolak</span>
                                <span className="text-sm font-black block pt-0.5 leading-none">
                                  {students.filter(s => s.status === 'Ditolak').length}
                                </span>
                              </div>
                            </div>

                            {/* Live Search & Add Student button */}
                            <div className="flex gap-2">
                              <div className="relative flex-1">
                                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                                <input 
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  placeholder="Cari calon siswa..." 
                                  type="text" 
                                  className="w-full text-xs font-semibold p-2 pl-8 text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-all font-sans" 
                                />
                              </div>
                              <button
                                onClick={() => setStepIndex(1)}
                                className="px-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white flex items-center justify-center cursor-pointer transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Student Data Table */}
                            <div className="border border-slate-800 bg-slate-950 rounded-xl overflow-hidden max-h-[190px] overflow-y-auto">
                              <table className="w-full text-left text-[9px] border-collapse">
                                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 font-mono">
                                  <tr>
                                    <th className="p-2 font-bold uppercase">Nama / NISN</th>
                                    <th className="p-2 font-bold uppercase">Jurusan</th>
                                    <th className="p-2 font-bold uppercase">Status</th>
                                    <th className="p-2 font-bold uppercase text-right">Aksi</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {students.filter(stud => 
                                    stud.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                    stud.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                    stud.nisn.includes(searchQuery)
                                  ).map((stud, sIdx) => (
                                    <tr 
                                      key={stud.nisn + sIdx} 
                                      className="border-b border-slate-900/60 hover:bg-slate-900/50 transition-colors"
                                    >
                                      <td className="p-2 font-medium">
                                        <span className="block font-bold text-[10px] text-white truncate max-w-[120px]" title={stud.name}>
                                          {stud.name}
                                        </span>
                                        <span className="text-[8px] text-slate-500 font-mono tracking-wider block">
                                          NISN: {stud.nisn}
                                        </span>
                                      </td>
                                      <td className="p-2">
                                        <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold font-mono tracking-wide ${
                                          stud.program === "PPLG" ? "bg-blue-900/40 text-blue-300 border border-blue-800/40" :
                                          stud.program === "PERHOTELAN" ? "bg-emerald-900/40 text-emerald-300 border border-emerald-800/40" :
                                          stud.program === "TKC" ? "bg-pink-900/40 text-pink-300 border border-pink-800/40" :
                                          "bg-amber-900/40 text-amber-300 border border-amber-800/40"
                                        }`}>
                                          {stud.program}
                                        </span>
                                      </td>
                                      <td className="p-2">
                                        <span className={`px-1 rounded-[4px] py-0.5 font-bold font-mono ${
                                          stud.status === "Proses Selesai" ? "bg-emerald-500/10 text-emerald-400 text-[8px]" :
                                          stud.status === "Ditolak" ? "bg-red-500/10 text-red-400 text-[8px]" :
                                          "bg-amber-500/10 text-amber-400 text-[8px]"
                                        }`}>
                                          {stud.status}
                                        </span>
                                      </td>
                                      <td className="p-2 text-right">
                                        <div className="flex justify-end gap-1">
                                          {stud.status !== "Proses Selesai" && (
                                            <button 
                                              onClick={() => {
                                                const copy = [...students];
                                                copy[sIdx].status = "Proses Selesai";
                                                setStudents(copy);
                                              }}
                                              title="Verifikasi"
                                              className="p-1 hover:bg-slate-800 rounded text-emerald-400 cursor-pointer"
                                            >
                                              ✓
                                            </button>
                                          )}
                                          {stud.status !== "Ditolak" && (
                                            <button 
                                              onClick={() => {
                                                const copy = [...students];
                                                copy[sIdx].status = "Ditolak";
                                                setStudents(copy);
                                              }}
                                              title="Tolak"
                                              className="p-1 hover:bg-slate-800 rounded text-red-400 cursor-pointer"
                                            >
                                              ✕
                                            </button>
                                          )}
                                          <button 
                                            onClick={() => {
                                              setStudents(students.filter((_, idx) => idx !== sIdx));
                                            }}
                                            title="Hukum Hapus"
                                            className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-slate-200 cursor-pointer"
                                          >
                                            <Trash2 className="w-2.5 h-2.5" />
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Bottom Controller Info */}
                        <div className="bg-slate-950 px-4 py-2 border-t border-slate-900 flex justify-between items-center text-[8px] font-mono font-medium text-slate-500">
                          <span>Status: Online</span>
                          <span>Records: {students.length} Total</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}

                {/* 4. PYTHON FPDF REPORT GENERATION WRITER */}
                {currentProject.id === "intern-report" && (
                  <div className="space-y-5">
                    <div className="p-4 bg-slate-950 text-[#38bdf8] border border-slate-800 rounded-2xl font-mono text-xs overflow-x-auto select-none min-h-[160px] flex flex-col justify-between">
                      <div>
                        <span className="text-slate-500 block text-[9px] font-bold pb-2 border-b border-slate-900 tracking-widest font-mono uppercase">
                          Source: report_engine.py
                        </span>
                        <div className="space-y-1 text-slate-300 pt-2 text-[10px]">
                          <p><span className="text-[#f472b6]">from</span> fpdf <span className="text-[#f472b6]">import</span> FPDF</p>
                          <p><span className="text-[#38bdf8]">class</span> <span className="text-[#facc15]">PDF</span>(FPDF):</p>
                          <p className="pl-4"><span className="text-[#38bdf8]">def</span> <span className="text-[#facc15]">header</span>(self):</p>
                          <p className="pl-8">self.set_font(<span className="text-emerald-400">'Arial'</span>, <span className="text-emerald-400">'B'</span>, 15)</p>
                          <p className="pl-8">self.cell(80)</p>
                          <p className="pl-8">self.cell(30, 10, <span className="text-emerald-400">'Internship Report'</span>, 1, 0, <span className="text-emerald-400">'C'</span>)</p>
                        </div>
                      </div>
                      
                      <div className="text-[9px] text-slate-500 text-right font-bold pt-2">
                        FPDF Library v1.7 • Stable
                      </div>
                    </div>

                    {/* Report Render Sheet simulated print preview */}
                    <div className="relative pt-2">
                      <AnimatePresence>
                        {pdfGenerating && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-50/80 backdrop-blur-xs z-20 flex flex-col items-center justify-center space-y-2 rounded-xl"
                          >
                            <span className="inline-block w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                            <span className="text-xs font-bold font-mono text-indigo-700 tracking-wider">COMPILING PDF STRUCT...</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {pdfPrinted ? (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-white border-2 border-slate-300/60 p-5 rounded-xl shadow-md min-h-[140px] flex flex-col justify-between"
                        >
                          <div className="space-y-2.5">
                            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                              <span className="text-[10px] font-black text-slate-800 font-mono uppercase tracking-wider">
                                Apple Academy Intern File
                              </span>
                              <span className="text-[9px] text-[#22c55e] font-bold font-mono">PDF SUCCESS</span>
                            </div>
                            <div className="space-y-1.5 text-[11px] text-slate-500 leading-relaxed font-sans">
                              <div className="flex justify-between">
                                <span className="font-bold text-slate-700">Project:</span>
                                <span>Internship &amp; Report Automation</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-bold text-slate-700">Date:</span>
                                <span>16 June 2026</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-bold text-slate-700">Status:</span>
                                <span className="text-slate-800 font-semibold">100% Automated</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-[9px] text-slate-400 italic text-center font-mono pt-2 border-t border-slate-100">
                            Printed flawlessly with structured margins and signature blocks.
                          </div>
                        </motion.div>
                      ) : (
                        <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-xl text-center space-y-2.5">
                          <p className="text-xs text-slate-500">
                            Perform the FPDF script execution to generate highly regulated reports dynamically.
                          </p>
                          <button
                            onClick={generatePdfDemo}
                            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-bold tracking-widest uppercase cursor-pointer transition-colors"
                          >
                            RUN COMPILER &amp; PRINT
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* ABSENSI WAJAH EXPANDED CASE STUDY DIALOG OVERLAY */}
        <AnimatePresence>
          {absensiModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-10 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="bg-slate-900 border border-slate-800 text-white w-full max-w-4xl max-h-[85vh] rounded-3xl overflow-y-auto shadow-2xl flex flex-col pointer-events-auto"
              >
                {/* Modal Header */}
                <div className="bg-slate-950 px-6 py-5 border-b border-slate-800 flex items-center justify-between sticky top-0 z-20">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                    <h3 className="font-extrabold text-sm md:text-base font-mono tracking-wide uppercase text-cyan-400">
                      Case Study: Biometric Checked-In System (Absensi Wajah)
                    </h3>
                  </div>
                  <button
                    onClick={() => setAbsensiModalOpen(false)}
                    className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700/80 text-slate-400 hover:text-white rounded-xl transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 md:p-8 space-y-12 overflow-y-auto text-left">
                  
                  {/* Hero Header */}
                  <div className="text-center space-y-4 py-6 bg-radial from-cyan-950/20 via-transparent to-transparent rounded-3xl">
                    <span className="text-[10px] font-black tracking-widest text-cyan-400 uppercase font-mono bg-cyan-950/30 border border-cyan-500/20 px-4 py-1.5 rounded-full">
                      Apple Developer Academy Spec Documentation
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                      Absensi Wajah
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-sans leading-relaxed">
                      Self-initiated biometric verification system deployed for 900+ students at SMK Pariwisata Triatma Jaya Badung, Bali.
                    </p>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto pt-6 text-left">
                      <div className="bg-slate-950/60 p-3.5 border border-slate-800/80 rounded-xl space-y-1">
                        <span className="text-[9px] text-slate-500 font-mono tracking-wider block uppercase">TYPE</span>
                        <span className="text-xs font-bold text-slate-200 block">Self-Initiated</span>
                      </div>
                      <div className="bg-slate-950/60 p-3.5 border border-slate-800/80 rounded-xl space-y-1">
                        <span className="text-[9px] text-slate-500 font-mono tracking-wider block uppercase">ROLE</span>
                        <span className="text-xs font-bold text-slate-200 block">Sole Developer</span>
                      </div>
                      <div className="bg-slate-950/60 p-3.5 border border-slate-800/80 rounded-xl space-y-1">
                        <span className="text-[9px] text-slate-500 font-mono tracking-wider block uppercase">DURATION</span>
                        <span className="text-xs font-bold text-slate-200 block font-sans">~2 Months</span>
                      </div>
                      <div className="bg-slate-950/60 p-3.5 border border-slate-800/80 rounded-xl space-y-1">
                        <span className="text-[9px] text-slate-500 font-mono tracking-wider block uppercase">STACK</span>
                        <span className="text-xs font-bold text-slate-200 block font-mono text-cyan-300">PHP • MySQL • AdminLTE</span>
                      </div>
                    </div>
                  </div>

                  {/* 1. Project Overview */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black tracking-widest text-cyan-400 font-mono uppercase border-b border-slate-800 pb-2">
                      01. Project Overview &amp; Motivation
                    </h4>
                    <div className="p-6 bg-slate-950/40 border border-slate-800/50 rounded-2xl relative space-y-4">
                      <div className="absolute top-0 right-0 p-4 text-cyan-500/10 font-bold text-8xl font-serif leading-none select-none">
                        “
                      </div>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        Absensi Wajah is a web-based student attendance system built for SMK Pariwisata Triatma Jaya, Bali. It was entirely <strong>self-initiated</strong>, born out of a daily frustration with the school's slow and easily bypassed manual roll-call process. 
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        The ultimate goal was to verify identity during check-ins without bringing friction. Students enter their NIS (Student ID) and capture a real-time photo through the browser camera to confirm their attendance. Spanning 900+ active student records, the system achieved spectacular validation and was eventually adopted for off-campus internship (PKL) reporting.
                      </p>
                    </div>
                  </div>

                  {/* 2. The Problem */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black tracking-widest text-cyan-400 font-mono uppercase border-b border-slate-800 pb-2">
                      02. The Problem Statement
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Every morning, class hours were delayed by slow roll-calls where students simply answered <em>"hadir"</em> (present). It was highly susceptible to manipulation: students easily checked in for absent classmates without identity validation.
                    </p>
                    <div className="border-l-4 border-cyan-500/85 bg-cyan-950/15 p-5 rounded-r-2xl max-w-2xl font-serif italic text-base text-cyan-300 my-4 leading-relaxed">
                      "The problem wasn't that the system was old — it was that the system could be bypassed, and everyone knew it."
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Compiling paper attendance notes across three grades was an administrative nightmare. The system needed immediate modernization: providing real-time data to faculty while reinforcing absolute truth via biometric visual accountability.
                    </p>
                  </div>

                  {/* 3. My Initial Understanding */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black tracking-widest text-cyan-400 font-mono uppercase border-b border-slate-800 pb-2">
                      03. My Initial Understanding
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div className="bg-emerald-950/20 border border-emerald-500/10 p-5 rounded-2xl space-y-3">
                        <span className="text-[10px] font-bold text-emerald-400 font-mono tracking-widest uppercase block">
                          What I Knew (At Launch)
                        </span>
                        <ul className="text-xs text-slate-350 space-y-2 list-none">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 font-sans font-bold">✓</span>
                            <span>PHP &amp; MySQL core CRUD mechanics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 font-sans font-bold">✓</span>
                            <span>Standard web UI composition (HTML, CSS, JS)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-400 font-sans font-bold">✓</span>
                            <span>AdminLTE integration and configuration</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-rose-950/20 border border-rose-500/10 p-5 rounded-2xl space-y-3">
                        <span className="text-[10px] font-bold text-rose-400 font-mono tracking-widest uppercase block">
                          What I Did Not Know
                        </span>
                        <ul className="text-xs text-slate-350 space-y-2 list-none">
                          <li className="flex items-start gap-2">
                            <span className="text-rose-400 font-sans font-bold">✕</span>
                            <span>High-performance computer vision pipelines</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-rose-400 font-sans font-bold">✕</span>
                            <span>How to stream and capture device cameras over HTTPS</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-rose-400 font-sans font-bold">✕</span>
                            <span>Image compression &amp; file storage optimizations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 4. Research & Exploration */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black tracking-widest text-cyan-400 font-mono uppercase border-b border-slate-800 pb-2">
                      04. Research &amp; Architectural Discovery
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      I initially spent days researching python-based visual recognizers using <strong>OpenCV</strong> and Haar Cascade classifiers. My prototype registered faces successfully. However, bridging this Python ML pipeline dynamically to a lightweight PHP web engine within standard HTTP response cycles proved overly complex for standard sandbox deployment.
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      This technical roadblock sparked an essential design pivot: instead of relying on a fragile automated python bridge, I shifted the biometric validation flow to an <strong>interactive photo-verified ledger</strong>. By capturing real-time student check-in frames natively via browser cameras and binding them directly to database records, visual authenticity was fully met without sacrificing execution speeds.
                    </p>
                  </div>

                  {/* 5. Database Schema & Flow */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black tracking-widest text-cyan-400 font-mono uppercase border-b border-slate-800 pb-2">
                      05. System Database Schema &amp; Operations
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Database integrity was secured using standard constraints. <strong>Siswa</strong> (Students) maps directly to the <strong>Absen</strong> (Attendance) ledger through a strict foreign key relation.
                    </p>

                    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 md:p-6 overflow-x-auto">
                      <div className="flex gap-4 min-w-[580px] items-start select-none">
                        
                        {/* Table Siswa */}
                        <div className="flex-1 bg-slate-900/60 border border-slate-800/80 rounded-xl overflow-hidden">
                          <div className="bg-slate-850 px-4 py-2 text-[10px] font-bold font-mono text-cyan-300 border-b border-slate-800">
                            🔑 TABLE: siswa
                          </div>
                          <div className="p-3 font-mono text-[9px] space-y-1.5 text-slate-300">
                            <div className="flex justify-between"><span className="text-yellow-400">id_siswa (PK)</span><span>INT</span></div>
                            <div className="flex justify-between"><span>nis</span><span>VARCHAR(20)</span></div>
                            <div className="flex justify-between"><span>nama_siswa</span><span>VARCHAR(100)</span></div>
                            <div className="flex justify-between"><span>kelas</span><span>VARCHAR(20)</span></div>
                          </div>
                        </div>

                        {/* Arrow Link */}
                        <span className="text-cyan-400 self-center font-bold">➔</span>

                        {/* Table Absen */}
                        <div className="flex-1 bg-slate-900/60 border border-slate-800/80 rounded-xl overflow-hidden">
                          <div className="bg-slate-850 px-4 py-2 text-[10px] font-bold font-mono text-cyan-300 border-b border-slate-800">
                            🔑 TABLE: absen
                          </div>
                          <div className="p-3 font-mono text-[9px] space-y-1.5 text-slate-300">
                            <div className="flex justify-between"><span className="text-yellow-400">id_absen (PK)</span><span>INT</span></div>
                            <div className="flex justify-between"><span className="text-emerald-400">id_siswa (FK)</span><span>INT (FK)</span></div>
                            <div className="flex justify-between"><span>tgl_absen</span><span>DATETIME</span></div>
                            <div className="flex justify-between"><span>status</span><span>ENUM(1,2,3,4)</span></div>
                            <div className="flex justify-between"><span>foto</span><span>VARCHAR(255)</span></div>
                          </div>
                        </div>

                        {/* Arrow Link */}
                        <span className="text-cyan-400 self-center font-bold">➔</span>

                        {/* Table User */}
                        <div className="flex-1 bg-slate-900/60 border border-slate-800/80 rounded-xl overflow-hidden">
                          <div className="bg-slate-850 px-4 py-2 text-[10px] font-bold font-mono text-cyan-300 border-b border-slate-800">
                            🔑 TABLE: user
                          </div>
                          <div className="p-3 font-mono text-[9px] space-y-1.5 text-slate-300">
                            <div className="flex justify-between"><span className="text-yellow-400">id_user (PK)</span><span>INT</span></div>
                            <div className="flex justify-between"><span>nama_user</span><span>VARCHAR(100)</span></div>
                            <div className="flex justify-between"><span>username</span><span>VARCHAR(100)</span></div>
                            <div className="flex justify-between"><span>password</span><span>VARCHAR(100)</span></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* 6. Challenges (Detailed description of the 4 hurdles) */}
                  <div className="space-y-6">
                    <h4 className="text-xs font-black tracking-widest text-cyan-400 font-mono uppercase border-b border-slate-800 pb-2">
                      06. Challenges &amp; Technical Retrospectives
                    </h4>

                    {/* Challenge 1 */}
                    <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-5 md:p-6 space-y-3">
                      <span className="text-[10px] font-mono font-bold bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full uppercase">
                        HURDLE 01: Python-PHP Biometric Bridging Complexity
                      </span>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        While OpenCV face detection ran comfortably in pure Python testing, establishing real-time RPC calls or sub-processing bridges directly inside a standard web thread lifecycle suffered from latency that bogged the entire queue.
                      </p>
                      <p className="text-slate-300 text-xs leading-relaxed text-slate-400 italic">
                        <strong>My Resolution:</strong> Deployed native camera hooks over HTTPS using browser APIs and stored visually verifiable high-quality crop files aligned to NIS database records. This turned biometric checks into visual truth, immediately readable by teachers in their AdminLTE board.
                      </p>
                    </div>

                    {/* Challenge 2 */}
                    <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-5 md:p-6 space-y-3">
                      <span className="text-[10px] font-mono font-bold bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full uppercase">
                        HURDLE 02: Student Photos Filled Up Disk Space
                      </span>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        High-resolution capture requests from smartphones quickly swelled image directories. Under standard testing, multiple megabytes per file was bloating disk storage and slowing upload triggers considerably.
                      </p>
                      <p className="text-slate-300 text-xs leading-relaxed text-slate-400 italic">
                        <strong>My Resolution:</strong> Built an automated compression framework inside the PHP upload model. Captured frames are compressed for size and resized inside standard buffers via the PHP GD library before committing to disk, shrinking database and directory structures by over 85%.
                      </p>
                    </div>

                    {/* Challenge 3 */}
                    <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-5 md:p-6 space-y-3">
                      <span className="text-[10px] font-mono font-bold bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full uppercase">
                        HURDLE 03: Latency Spikes with 900 Simultaneous Users
                      </span>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        At launch, hundreds of students concurrently hit the database server, causing full table scans since there were no column indices in the attendance table. Query response times ballooned to 2.5 seconds.
                      </p>
                      <p className="text-slate-300 text-xs leading-relaxed text-slate-400 italic">
                        <strong>My Resolution:</strong> Refactored MySQL tables and introduced tailored indexing on NIS and ID columns. Latency dropped to single-digit milliseconds, protecting uptime even under peak, high-concurrency conditions.
                      </p>
                    </div>

                    {/* Challenge 4 */}
                    <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-5 md:p-6 space-y-3">
                      <span className="text-[10px] font-mono font-bold bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full uppercase">
                        HURDLE 04: Development Interusal during Examination Seasons
                      </span>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        The onset of academic examinations meant I had to suspend direct development. The product wasn't fully finished but it was stable enough to be delivered to other people.
                      </p>
                      <p className="text-slate-300 text-xs leading-relaxed text-slate-400 italic">
                        <strong>My Resolution:</strong> Rather than shelving the project, I polished the documentation and handed it off to school teachers. To my surprise, the faculty loved it and extended my code structure to facilitate off-campus internship (PKL) attendance monitoring remotely—cementing a lasting impact!
                      </p>
                    </div>
                  </div>

                  {/* 7. Impact & Outcomes */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black tracking-widest text-cyan-400 font-mono uppercase border-b border-slate-800 pb-2">
                      07. Impact &amp; Life of the Project
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Deploying this biometric system created tangible reform across the SMK's administrative workflows:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
                      <div className="bg-slate-950/50 p-5 border border-slate-800 rounded-2xl text-center">
                        <span className="text-4xl font-extrabold text-cyan-400 font-sans block mb-1">900+</span>
                        <span className="text-[9px] text-slate-400 font-mono uppercase font-bold">Students Onboarded</span>
                      </div>
                      <div className="bg-slate-950/50 p-5 border border-slate-800 rounded-2xl text-center">
                        <span className="text-4xl font-extrabold text-cyan-400 font-sans block mb-1">3</span>
                        <span className="text-[9px] text-slate-400 font-mono uppercase font-bold">Grades Tracked</span>
                      </div>
                      <div className="bg-slate-950/50 p-5 border border-slate-800 rounded-2xl text-center">
                        <span className="text-4xl font-extrabold text-cyan-400 font-sans block mb-1">0</span>
                        <span className="text-[9px] text-slate-400 font-mono uppercase font-bold">Paper Logs Needed</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      Knowing that the code has built its own path, extending to facilitate students on PKL (off-campus internship work) to report attendance from local sites, was incredibly rewarding. It showed that building modular and documented systems can allow others to scale long after you have handed them over.
                    </p>
                  </div>

                  {/* 8. Reflection of learnings */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black tracking-widest text-cyan-400 font-mono uppercase border-b border-slate-800 pb-2">
                      08. Apple Developer Academy Alignment
                    </h4>
                    <div className="space-y-3 font-sans text-sm text-slate-300 leading-relaxed">
                      <p>
                        This self-initiated engineering case study is a solid testament to how I approach challenges: being exceptionally curious, willing to pivot with resilience behind structural constraints, and designing products that offer real and scalable impact.
                      </p>
                      <p>
                        Through Absensi Wajah, I didn't just learn programming languages; I learned the vital essence of being an engineer—namely, <strong>mastering how to solve problems iteratively and shipping high-value software</strong> that impacts lives positively.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Footer Controls */}
                <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setAbsensiModalOpen(false)}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-md shadow-blue-600/10"
                  >
                    Close Document Mode
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
