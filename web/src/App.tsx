import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronDown, MapPin, Waves, Anchor, Ship, Calendar, MessageSquare, Menu, X } from 'lucide-react';

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

  const depth = useTransform(smoothProgress, [0, 1], [0, 40]);
  const bgColor = useTransform(smoothProgress, [0, 0.5, 1], ["#05070A", "#030A12", "#010408"]);

  return (
    <motion.div 
      ref={containerRef} 
      style={{ backgroundColor: bgColor }}
      className="relative w-full min-h-[500vh] text-white selection:bg-accent selection:text-black overflow-x-hidden"
    >
      {/* Cinematic Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] contrast-150 brightness-150" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      {/* Custom Cursor */}
      <motion.div 
        className="fixed w-6 h-6 border border-accent rounded-full pointer-events-none z-[101] hidden md:block"
        style={{ x: mouseX, y: mouseY, left: -12, top: -12 }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-8 mix-blend-difference">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight">DEPTHS</span>
        </div>
        
        <div className="hidden md:flex gap-12 items-center">
          {['Charters', 'Vessels', 'Destinations', 'Crew', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="caption-meta hover:text-accent transition-colors">
              {item}
            </a>
          ))}
          <button className="px-6 py-2 bg-accent text-black rounded-pill font-medium text-sm hover:scale-105 transition-transform">
            BOOK NOW
          </button>
        </div>

        <button className="md:hidden text-white z-[60]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {['Charters', 'Vessels', 'Destinations', 'Crew', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="display-l text-2xl hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="px-8 py-3 bg-accent text-black rounded-pill font-bold mt-8">
            BOOK NOW
          </button>
        </motion.div>
      </nav>

      {/* Depth Gauge - Floating Side Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4">
        <div className="caption-meta rotate-90 mb-12 origin-center whitespace-nowrap opacity-40">DESCENT DEPTH</div>
        <div className="h-64 w-[1px] bg-white/10 relative">
          <motion.div 
            style={{ top: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent cyan-glow"
          />
        </div>
        <div className="flex flex-col items-center">
          <motion.span className="text-3xl font-display font-bold text-accent">
            {useTransform(depth, (v) => v.toFixed(0))}
          </motion.span>
          <span className="caption-meta text-[10px] opacity-40">METERS</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-60 grayscale-[0.2]"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl"
        >
          <span className="caption-meta text-accent mb-6 block tracking-widest">SEYCHELLES PREMIUM DIVE & CHARTER</span>
          <h1 className="display-xl mb-8">
            Experience the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Ultimate Abyss</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-400 text-lg mb-10">
            Unrivaled access to the most pristine dive sites and luxury yacht charters in the heart of the Indian Ocean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-white text-black rounded-lg font-bold hover:bg-accent transition-colors h2-custom !text-lg !tracking-normal">
              Explore Charters
            </button>
            <button className="px-10 py-4 border border-white/20 rounded-lg font-bold hover:bg-white/5 backdrop-blur-sm transition-colors text-lg">
              Watch Film
            </button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Grid Features / Charter Types */}
      <section className="relative z-10 pt-32 px-6 md:px-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Day Charters", icon: <Ship />, desc: "Private island excursions, snorkeling & BBQ." },
            { title: "Dive Courses", icon: <Anchor />, desc: "PADI certified courses for all skill levels." },
            { title: "Sunset Cruises", icon: <Waves />, desc: "Romantic champagne sessions at sea." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-card hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="h3-custom mb-4">{item.title}</h3>
              <p className="text-zinc-500 mb-8">{item.desc}</p>
              <a href="#" className="flex items-center gap-2 text-sm font-bold text-accent">
                VIEW DETAILS <ChevronDown className="-rotate-90" size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating Image Section - "The Vessel" */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-accent/10 blur-[100px] rounded-full" />
            <img src="/hero.png" alt="Vessel" className="rounded-card shadow-2xl relative z-10" />
            <div className="absolute top-10 -right-10 glass p-6 rounded-xl z-20 hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-accent/20 rounded-lg text-accent"><Ship size={20}/></div>
                <div>
                  <div className="text-xs opacity-50 uppercase tracking-widest">Fleet Active</div>
                  <div className="font-bold">Princess V55</div>
                </div>
              </div>
            </div>
          </motion.div>
          <div>
            <span className="caption-meta text-accent mb-4 block">THE FLEET</span>
            <h2 className="display-l mb-8">Uncompromising Luxury</h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Our fleet represents the pinnacle of nautical engineering. From high-speed chase boats to stabilized luxury yachts, every vessel is curated for the Seychellois waters.
            </p>
            <div className="space-y-6">
              {[
                "Stabilized Gyro Navigation",
                "PADI Certified On-board Equipment",
                "Gourmet Catering Options",
                "Professional Multi-lingual Crew"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border border-accent flex items-center justify-center">
                    <div className="w-1 h-1 bg-accent rounded-full" />
                  </div>
                  <span className="text-zinc-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Itineraries / Map Section */}
      <section className="relative z-10 py-32 bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center px-6 mb-20">
          <span className="caption-meta text-accent mb-4 block">DESTINATIONS</span>
          <h2 className="display-l mb-6">Explore the Archipelago</h2>
          <p className="text-zinc-500">Curated routes between the inner and outer islands of Seychelles.</p>
        </div>
        
        <div className="flex overflow-x-auto pb-20 px-6 gap-8 no-scrollbar scroll-smooth">
          {[
            "Mahé to Praslin",
            "La Digue Escape",
            "Curieuse Sanctuary",
            "Outer Islands Exploration"
          ].map((route, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="min-w-[300px] md:min-w-[400px] h-[500px] relative rounded-card overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
              <img src="/hero.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
              <div className="absolute bottom-8 left-8 z-20">
                <h4 className="h3-custom mb-2">{route}</h4>
                <div className="flex items-center gap-2 opacity-60 text-sm mb-4">
                  <MapPin size={14} /> 4 Islands • 3 Days
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-accent font-bold">
                  VIEW EXPEDITION <ChevronDown className="-rotate-90" size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <footer className="relative z-10 pt-60 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="display-xl mb-12">Ready to <span className="text-accent">Dive?</span></h2>
          <p className="text-zinc-500 max-w-xl mb-12">
            Contact our concierge team to build your tailor-made Seychelles experience.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-32">
            {[
              { icon: <MessageSquare />, label: "WhatsApp Concierge", sub: "+248 123 4567" },
              { icon: <Calendar />, label: "Online Booking", sub: "Fast & Secure" },
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-2xl flex flex-col items-center min-w-[280px] hover:border-accent transition-colors cursor-pointer">
                <div className="mb-4 text-accent">{item.icon}</div>
                <div className="font-bold mb-1">{item.label}</div>
                <div className="text-zinc-500 text-sm">{item.sub}</div>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-20 border-t border-white/5 gap-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border border-accent flex items-center justify-center">
                <div className="w-1 h-1 bg-accent rounded-full" />
              </div>
              <span className="font-display font-bold">DEPTHS</span>
            </div>
            <div className="flex gap-8 caption-meta text-[10px] opacity-40">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <span>© 2026 Depths Charters Ltd.</span>
            </div>
            <div className="flex gap-6">
              {/* Social icons would go here */}
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default App;
