import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronDown, MapPin, Waves, Anchor, Ship, Calendar, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import ScrollExpandMedia from './components/ui/scroll-expansion-hero';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background shifts from Sky 200 light blue to Sky 400 sea blue
  const bgColor = useTransform(smoothProgress, [0, 0.5, 1], ["#BAE6FD", "#7DD3FC", "#38BDF8"]);
  const depth = useTransform(smoothProgress, [0, 1], [0, 60]);

  return (
    <motion.div 
      ref={containerRef} 
      style={{ backgroundColor: bgColor }}
      className="relative w-full text-slate-900 selection:bg-accent selection:text-white overflow-x-hidden"
    >
      {/* Cinematic Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] contrast-125" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      {/* Sticky Top Nav (Apple Style) */}
      <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-xl bg-white/10 border-b border-black/5 px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
            <Waves size={20} />
          </div>
          <span className="font-display text-2xl font-black tracking-tighter uppercase">DEPTHS</span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          {['Expeditions', 'The Fleet', 'Seychelles', 'Concierge'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold tracking-tight hover:text-accent transition-colors">
              {item}
            </a>
          ))}
          <button className="px-6 py-2 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors uppercase tracking-widest">
            Book Vessel
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ y: "-100%" }}
        animate={{ y: isMenuOpen ? 0 : "-100%" }}
        className="fixed inset-0 z-[90] bg-white flex flex-col items-center justify-center gap-8 md:hidden p-12"
      >
        {['Expeditions', 'The Fleet', 'Seychelles', 'Concierge'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="display-l text-4xl" onClick={() => setIsMenuOpen(false)}>
            {item}
          </a>
        ))}
        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold mt-12">BOOK NOW</button>
      </motion.div>

      {/* Depth Indicator (Floating) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[80] hidden lg:block">
        <div className="flex flex-col items-center gap-6">
          <div className="w-px h-40 bg-slate-900/10 relative overflow-hidden">
            <motion.div 
               style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
               className="w-full bg-slate-900"
            />
          </div>
          <motion.div className="text-xs font-black rotate-0 flex flex-col items-center">
             <span className="text-slate-900 opacity-30 mb-2 uppercase tracking-[0.2em] [writing-mode:vertical-rl]">Ocean Depth</span>
             <motion.span className="text-2xl mt-4 font-black">
                {useTransform(depth, (v) => Math.round(v))}m
             </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Hero Expansion Wrapper */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/hero.mp4"
        bgImageSrc="/hero.png"
        title="BEYOND THE HORIZON"
        date="PRIVATE ADVENTURES"
        scrollToExpand="SCROLL DOWN TO DIVE"
        textBlend={false}
      >
        {/* Full Viewport Immersive Content Blocks */}
        <div className="relative">
          
          {/* Section 1: Introduction (Apple Typography Style) */}
          <section id="expeditions" className="min-h-screen flex flex-col items-center justify-center p-6 md:p-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <h2 className="display-xl mb-12 font-black !tracking-tight">Your gateway to the Seychelles archipelago.</h2>
              <p className="text-2xl md:text-3xl text-slate-800/80 leading-relaxed font-medium mb-16">
                Not just a charter. A curated nautical experience spanning the most remote corners of the Indian Ocean.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 shadow-xl shadow-black/10">
                  EXPLORE EXPEDITIONS <ArrowRight />
                </button>
                <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors">
                  VIEW VESSEL SPECS
                </button>
              </div>
            </motion.div>
          </section>

          {/* Section 2: Large Viewport Showcase 1 (The Fleet) */}
          <section id="the-fleet" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
             <motion.div 
               whileInView={{ scale: 1.1 }}
               transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
               className="absolute inset-0 z-0"
             >
               <img src="/hero.png" className="w-full h-full object-cover grayscale-[20%] opacity-80" />
             </motion.div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-200/40 z-[1]" />
             
             <div className="relative z-10 text-center px-6">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="display-xl block font-black text-white mix-blend-overlay opacity-40 uppercase"
                >
                  THE FLEET
                </motion.span>
                <div className="max-w-2xl mx-auto mt-[-40px]">
                   <h2 className="display-l text-slate-900 font-black mb-8">Uncompromising Engineering.</h2>
                   <p className="text-xl md:text-2xl text-slate-800 font-medium">
                      Built for the Seychellois waters, our vessels combine high-speed capability with stabilized luxury.
                   </p>
                </div>
             </div>
          </section>

          {/* Section 3: Large Viewport Showcase 2 (Seychelles) */}
          <section id="seychelles" className="relative w-full h-screen grid grid-cols-1 md:grid-cols-2">
             <div className="h-full bg-slate-900 p-12 md:p-24 flex flex-col justify-center text-white">
                <h3 className="caption-meta text-accent mb-6">REMOTE DESTINATIONS</h3>
                <h2 className="display-l font-black mb-10 leading-[0.9]">Beyond Pearl and Curieuse.</h2>
                <p className="text-xl opacity-80 leading-relaxed mb-12">
                   Our expeditions reach the outer island groups—Amirantes and Alphonse—where few dare to venture. This is the last frontier of ocean exploration.
                </p>
                <a href="#" className="w-fit flex items-center gap-4 text-accent font-bold text-lg border-b-2 border-accent/20 pb-2 hover:border-accent transition-all">
                  SEE THE MAP <MapPin size={22} />
                </a>
             </div>
             <div className="h-full relative overflow-hidden">
                <img src="/hero.png" alt="Map View" className="absolute inset-0 w-full h-full object-cover scale-125 hover:scale-100 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-accent/20 mix-blend-color" />
             </div>
          </section>

          {/* Section 4: Vertical Narrative (Concierge) */}
          <section id="concierge" className="py-40 px-6 md:px-24">
             <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-10">
                   <h2 className="display-l font-black !tracking-tighter max-w-xl">A service curated around you.</h2>
                   <p className="text-xl text-slate-600 max-w-xs font-medium">
                      From private chefs to diving experts, our crew is ready for any ambition.
                   </p>
                </div>
                
                <div className="space-y-1 bg-slate-900 rounded-[40px] overflow-hidden">
                   {[
                      { title: "Personal Concierge", desc: "Available 24/7 via WhatsApp to handle your island itinerary." },
                      { title: "Master Divers", desc: "PADI certified experts for underwater discovery beyond the reef." },
                      { title: "Culinary Arts", desc: "Fresh Seychellois flavors prepared by our on-board private chef." }
                   ].map((item, i) => (
                      <div key={i} className="group p-12 md:p-20 bg-slate-50 hover:bg-white transition-colors flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-slate-200">
                         <div className="max-w-md">
                            <span className="text-xs font-black text-accent mb-4 block">0{i+1} — EXPERIENCE</span>
                            <h3 className="h1-custom font-black mb-4">{item.title}</h3>
                            <p className="text-slate-600 font-medium">{item.desc}</p>
                         </div>
                         <div className="w-16 h-16 rounded-full border border-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all cursor-pointer">
                            <ArrowRight />
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </section>

          {/* Footer (Simplified Apple Style) */}
          <footer className="pt-40 pb-20 px-6 md:px-24 bg-white text-slate-900">
             <div className="max-w-7xl mx-auto text-center border-b border-slate-100 pb-40 mb-20">
                <h2 className="display-xl font-black mb-12 italic tracking-tighter">Own the Abyss.</h2>
                <button className="px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-accent transition-all uppercase tracking-widest">
                   START YOUR JOURNEY
                </button>
             </div>
             
             <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-xs font-bold uppercase tracking-widest text-slate-400">
                <div className="flex items-center gap-6">
                   <a href="#" className="hover:text-slate-900 transition-colors">Instagram</a>
                   <a href="#" className="hover:text-slate-900 transition-colors">Vimeo</a>
                   <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
                </div>
                <div className="flex items-center gap-8">
                   <span>© 2026 DEPTHS CHARTERS</span>
                   <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
                   <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
                </div>
             </div>
          </footer>
        </div>
      </ScrollExpandMedia>
    </motion.div>
  );
};

export default App;
