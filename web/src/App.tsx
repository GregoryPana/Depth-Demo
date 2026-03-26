import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { MapPin, Waves, Menu, X, ArrowRight, ShieldCheck, Users, LifeBuoy, Languages, Star, Thermometer, Wind, Calendar } from 'lucide-react';
import ScrollExpandMedia from './components/ui/scroll-expansion-hero';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Theme transitions: Light Sky Blue to Shallows Azure
  const bgColor = useTransform(smoothProgress, [0, 0.4, 0.8, 1], ["#BAE6FD", "#E0F2FE", "#7DD3FC", "#38BDF8"]);
  const depthValue = useTransform(smoothProgress, [0, 1], [0, 45]);
  const [depthDisplay, setDepthDisplay] = useState(0);

  useMotionValueEvent(depthValue, "change", (latest) => {
    setDepthDisplay(Math.round(latest));
  });

  return (
    <motion.div 
      ref={containerRef} 
      style={{ backgroundColor: bgColor }}
      className="relative w-full text-slate-900 selection:bg-accent selection:text-white overflow-x-hidden"
    >
      {/* Grainy Texture Overlay - Inline SVG Noise */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] contrast-100" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />
      
      {/* Navigation (Apple Style) */}
      <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-2xl bg-white/30 border-b border-white/20 px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
            <Waves size={22} />
          </div>
          <span className="font-display text-2xl font-black tracking-tighter uppercase">DEPTHS</span>
        </div>
        
        <div className="hidden lg:flex gap-10 items-center">
          {['Diving', 'Boat Tours', 'Water Sports', 'Fleet', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-xs font-black uppercase tracking-[0.2em] hover:text-accent transition-colors">
              {item}
            </a>
          ))}
          <button className="px-8 py-3 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-slate-800 transition-all shadow-lg shadow-black/10">
            Book Experience
          </button>
        </div>

        <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25 }}
        className="fixed inset-0 z-[110] bg-white flex flex-col p-8 lg:hidden"
      >
        <div className="flex justify-between items-center mb-16">
          <span className="font-black text-2xl">DEPTHS</span>
          <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
        </div>
        <div className="flex flex-col gap-8">
          {['Diving', 'Boat Tours', 'Water Sports', 'The Fleet', 'About Us', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-4xl font-black tracking-tighter hover:text-accent" onClick={() => setIsMenuOpen(false)}>{item}</a>
          ))}
        </div>
        <button className="mt-auto py-6 bg-slate-900 text-white rounded-3xl font-black text-xl tracking-widest uppercase">Book Now</button>
      </motion.div>

      {/* Hero Section */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/hero.mp4"
        bgImageSrc="/hero.png"
        title="THE INDIAN OCEAN IS WAITING."
        date="ARE YOU READY?"
        scrollToExpand="SCROLL TO DIVE"
        textBlend={false}
      >
        <div className="relative">
          
          {/* Trust Bar */}
          <section className="relative z-10 py-12 px-6 bg-white/10 backdrop-blur-md border-y border-white/20">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-slate-900/60">
              <span className="flex items-center gap-3"><Star size={14} className="text-accent"/> PADI 5 Star Certified</span>
              <span className="flex items-center gap-3"><Waves size={14} className="text-accent"/> 10+ Years in Seychelles Waters</span>
              <span className="flex items-center gap-3"><Calendar size={14} className="text-accent"/> Daily Departures (7:45am & 1:00pm)</span>
              <span className="flex items-center gap-3"><ShieldCheck size={14} className="text-accent"/> All Levels Welcome</span>
            </div>
          </section>

          {/* Section: What We Do (Apple Visual Spread) */}
          <section id="services" className="py-40 px-6">
            <div className="max-w-7xl mx-auto text-center mb-40">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="display-xl font-black !tracking-tighter mb-10"
              >
                Everything on, above,<br />and beneath the water.
              </motion.h2>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl font-medium text-slate-800/70">
                From your first breath underwater to private yacht island hopping — we curate the Seychelles for you.
              </p>
            </div>

            <div className="space-y-40">
              {[
                { 
                  id: 'diving',
                  title: 'Diving', 
                  desc: 'From your very first breath underwater to your Divemaster certification — we have everything you need to explore Seychelles from below.',
                  image: '/hero.png', // Placeholder for diving image
                  cta: 'Explore Diving',
                  color: 'bg-sky-100'
                },
                { 
                  id: 'boat-tours',
                  title: 'Boat Tours', 
                  desc: 'Half days, full days, private charters, sunset cruises, island hopping. The best way to see Seychelles is always from the water.',
                  image: '/hero.png', // Placeholder for boat image
                  cta: 'View Tours',
                  color: 'bg-white'
                },
                { 
                  id: 'water-sports',
                  title: 'Water Sports', 
                  desc: 'Jet skis, parasailing, kayaking, wakeboarding, banana boats. If it happens on the water, we do it.',
                  image: '/hero.png', // Placeholder for water sports image
                  cta: 'Join the Fun',
                  color: 'bg-blue-50'
                }
              ].map((service, i) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  id={service.id}
                  className={`relative w-full min-h-[80vh] rounded-[40px] md:rounded-[80px] overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-blue-900/5 ${service.color}`}
                >
                  <div className="flex-1 p-12 md:p-24 flex flex-col justify-center">
                    <span className="caption-meta text-accent mb-6 font-black tracking-[0.3em]">0{i+1} — EXPERIENCE</span>
                    <h3 className="display-l font-black mb-8 !tracking-tighter">{service.title}</h3>
                    <p className="text-xl md:text-2xl text-slate-700/80 leading-relaxed font-medium mb-12">{service.desc}</p>
                    <button className="w-fit px-10 py-5 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-4">
                      {service.cta} <ArrowRight />
                    </button>
                  </div>
                  <div className="flex-1 min-h-[400px] relative">
                    <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section: Why Depths (The Team & Trust) */}
          <section id="about" className="py-40 px-6 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                  <h2 className="display-l font-black mb-12 !tracking-tight">We know these waters better than anyone.</h2>
                  <p className="text-xl md:text-2xl text-blue-100/70 font-medium leading-relaxed mb-16">
                    This is our home. Our instructors have been diving Seychelles for years — they know where the whale sharks gather in October, and exactly when to be at Shark Bank for the best conditions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                      { icon: <ShieldCheck />, title: 'Safety First', desc: 'Every activity is conducted under professional supervision. Safety is our culture.' },
                      { icon: <Users />, title: 'Small Groups', desc: 'We cap our dive groups at 4 per guide. Real attention, not a crowd.' },
                      { icon: <LifeBuoy />, title: 'Pro Equipment', desc: 'Modern, serviced gear maintained to PADI standards. Nitrox available.' },
                      { icon: <Languages />, title: 'Multilingual', desc: 'Our instructors speak English, French, and Creole. Everyone is welcome.' }
                    ].map((point) => (
                      <div key={point.title} className="group">
                        <div className="text-accent mb-4 group-hover:scale-110 transition-transform">{point.icon}</div>
                        <h4 className="text-lg font-black mb-2 uppercase tracking-widest">{point.title}</h4>
                        <p className="text-sm text-blue-100/50 leading-relaxed font-medium">{point.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
                  <img src="/hero.png" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-12 left-12">
                    <span className="caption-meta text-accent mb-2 block">DIVE CENTRE MAHÉ</span>
                    <span className="text-4xl font-black">Local Roots.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Marine Life (Storytelling) */}
          <section className="py-40 px-6 relative overflow-hidden">
             <div className="max-w-5xl mx-auto text-center">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="display-xl block font-black text-slate-100 mix-blend-overlay absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-20 pointer-events-none"
                >
                  MARINE LIFE
                </motion.span>
                <h2 className="display-l font-black mb-8 relative z-10 !tracking-tight">In these waters, every dive is a story.</h2>
                <p className="text-2xl text-slate-700/80 font-medium leading-relaxed mb-20 relative z-10">
                   Home to over 1,000 species of fish and 150 species of coral. hawksbill turtles patrol the reefs, eagle rays glide past granite walls, and in October — the Whale Sharks arrive.
                </p>
                <div className="flex gap-4 justify-center items-center font-black uppercase tracking-widest text-[10px] text-accent">
                   <a href="#" className="flex items-center gap-2 group">See Dive Sites <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></a>
                </div>
             </div>
          </section>

          {/* Section: The Seasons */}
          <section className="py-20 px-6">
             <div className="max-w-7xl mx-auto bg-white rounded-[60px] p-12 md:p-32 shadow-xl shadow-blue-900/5">
                <div className="flex flex-col lg:flex-row gap-20">
                   <div className="lg:w-1/2">
                      <span className="caption-meta text-accent mb-6 block font-black">THE SEASONS</span>
                      <h2 className="display-l font-black mb-8">Never a bad time to dive.</h2>
                      <p className="text-xl text-slate-700/70 font-medium mb-10">
                        Seychelles waters remain between 27°C and 31°C year-round. While conditions shift, the adventure never stops.
                      </p>
                      <div className="flex items-center gap-10">
                         <div>
                            <span className="text-4xl font-black block">28°C</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Avg Temp</span>
                         </div>
                         <div className="w-[1px] h-12 bg-slate-100" />
                         <div>
                            <span className="text-4xl font-black block">20m+</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Visibility</span>
                         </div>
                      </div>
                   </div>
                   <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-8 border border-slate-100 rounded-3xl">
                         <Wind className="text-accent mb-4" />
                         <h4 className="font-black uppercase text-sm mb-4">May — October</h4>
                         <p className="text-sm text-slate-600 leading-relaxed">Southeast Trade Winds. Best visibility. Calmest on the west coast. Primetime for Whale Sharks in Oct/Nov.</p>
                      </div>
                      <div className="p-8 border border-slate-100 rounded-3xl bg-blue-50/50">
                         <Thermometer className="text-accent mb-4" />
                         <h4 className="font-black uppercase text-sm mb-4">Nov — April</h4>
                         <p className="text-sm text-slate-600 leading-relaxed">Northwest Season. Warmest waters. Peak manta ray sightings. Perfect for Sainte Anne Marine Park.</p>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Conservation Pledge */}
          <section className="py-40 px-6 text-center">
             <div className="max-w-3xl mx-auto">
                <Waves className="text-accent mx-auto mb-8 w-12 h-12" />
                <h3 className="h1-custom font-black mb-8 !tracking-tight">We are guests in this ocean.</h3>
                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 italic">
                  "Every dive, every tour, every jet ski ride is conducted with the preservation of our reefs in mind. We don't just explore the sea; we protect it."
                </p>
                <a href="#" className="font-black text-xs uppercase tracking-[0.3em] text-accent border-b-2 border-accent/20 pb-2 hover:border-accent transition-all">
                   Our Conservation Pledge
                </a>
             </div>
          </section>

          {/* Footer CTA & Contact */}
          <footer id="contact" className="pt-60 pb-20 px-6 bg-slate-900 text-white rounded-t-[80px]">
            <div className="max-w-7xl mx-auto text-center border-b border-white/5 pb-40 mb-20">
               <span className="caption-meta text-accent mb-6 block font-black">PLAN YOUR TRIP</span>
               <h2 className="display-xl font-black mb-12 !tracking-tighter">Ready to get in the water?</h2>
               <p className="max-w-2xl mx-auto text-xl text-blue-100/60 font-medium mb-16Leading-relaxed">
                  Morning departures at 7:45am. Afternoon at 1:00pm.<br />Based in Beau Vallon, Mahé. Exploring everywhere.
               </p>
               <div className="flex flex-wrap justify-center gap-6">
                  <button className="px-12 py-6 bg-accent text-white rounded-full font-black text-xl hover:scale-105 transition-all uppercase tracking-[0.2em] shadow-2xl shadow-accent/20">
                     Book Now
                  </button>
                  <button className="px-12 py-6 bg-white/5 border border-white/20 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all uppercase tracking-[0.2em]">
                     Contact Us
                  </button>
               </div>
            </div>
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-blue-100/40 text-xs font-bold uppercase tracking-widest mb-40">
               <div className="flex flex-col gap-4">
                  <span className="text-white mb-2">Location</span>
                  <span>Beau Vallon, Mahé</span>
                  <span>Seychelles Archipelago</span>
               </div>
               <div className="flex flex-col gap-4">
                  <span className="text-white mb-2">Contact</span>
                  <span>+248 4 XXX XXX</span>
                  <span className="text-accent underline">info@depths.sc</span>
               </div>
               <div className="flex flex-col gap-4">
                  <span className="text-white mb-2">Social</span>
                  <a href="#" className="hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="hover:text-white transition-colors">Vimeo</a>
               </div>
               <div className="flex flex-col gap-4 p-8 bg-white/5 rounded-3xl border border-white/10">
                  <span className="text-white mb-2">WhatsApp 24/7</span>
                  <span className="text-lg text-white font-black">+248 123 4567</span>
                  <span className="text-[10px] text-accent">Concierge Available</span>
               </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
               <span>PADI 5 Star Certified Centre</span>
               <div className="flex items-center gap-8">
                  <span className="text-white">© 2026 Depths Charters</span>
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
               </div>
            </div>
          </footer>
        </div>
      </ScrollExpandMedia>

      {/* Depth Indicator (Floating UI) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[80] hidden lg:block">
        <div className="flex flex-col items-center gap-6">
          <div className="w-px h-48 bg-slate-900/10 relative overflow-hidden">
            <motion.div 
               style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
               className="w-full bg-slate-900"
            />
          </div>
          <div className="flex flex-col items-center">
             <span className="text-[9px] font-black text-slate-900/30 uppercase tracking-[0.3em] [writing-mode:vertical-rl] mb-4">Ocean Depth</span>
             <span className="text-3xl font-black">{depthDisplay}m</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default App;
