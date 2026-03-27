import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { Waves, Menu, X, ArrowRight, ShieldCheck, Users, LifeBuoy, Languages, ChevronRight } from 'lucide-react';
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

  // The Descent Gradient: From Surface to Abyss
  const depthValue = useTransform(smoothProgress, [0, 1], [0, 45]);
  const [depthDisplay, setDepthDisplay] = useState(0);

  useMotionValueEvent(depthValue, "change", (latest) => {
    setDepthDisplay(Math.round(latest));
  });

  return (
    <div ref={containerRef} className="relative w-full bg-abyss text-white selection:bg-lagoon selection:text-abyss overflow-x-hidden font-body">
      {/* Caustics & Texture Layers */}
      <div className="caustics-overlay" />
      <div className="fixed inset-0 pointer-events-none z-[60] bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.05)_0%,transparent_70%)]" />
      
      {/* Navigation (Dark Glassmorphism) */}
      <nav className="fixed top-0 left-0 w-full z-[100] nav-blur px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-500">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-sm bg-lagoon flex items-center justify-center text-abyss group-hover:rotate-90 transition-transform">
            <Waves size={24} />
          </div>
          <span className="font-display text-2xl font-extrabold tracking-tighter uppercase">DEPTHS</span>
        </div>
        
        <div className="hidden lg:flex gap-10 items-center">
          {['Diving', 'Boat Tours', 'Water Sports', 'Fleet', 'Conservation'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[10px] font-bold uppercase tracking-[0.3em] text-granite hover:text-lagoon transition-colors">
              {item}
            </a>
          ))}
          <button className="btn-primary py-3 px-8 text-[10px]">
            Book Now
          </button>
        </div>

        <button className="lg:hidden p-2 text-lagoon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ y: "-100%" }}
        animate={{ y: isMenuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 30 }}
        className="fixed inset-0 z-[110] bg-abyss flex flex-col p-8 lg:hidden"
      >
        <div className="flex justify-between items-center mb-16">
          <span className="font-extrabold text-2xl tracking-tighter">DEPTHS</span>
          <button onClick={() => setIsMenuOpen(false)}><X size={32} className="text-lagoon"/></button>
        </div>
        <div className="flex flex-col gap-6">
          {['Diving', 'Boat Tours', 'Water Sports', 'Fleet', 'Conservation', 'About'].map((item) => (
            <a key={item} href="#" className="display-l text-white hover:text-lagoon transition-colors" onClick={() => setIsMenuOpen(false)}>{item}</a>
          ))}
        </div>
        <button className="mt-auto btn-primary py-6 text-xl">Book Experience</button>
      </motion.div>

      {/* Hero Section (The Promise) */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/hero.mp4"
        bgImageSrc="/hero.png"
        title="THE INDIAN OCEAN IS WAITING."
        date="ARE YOU READY?"
        scrollToExpand="THE DESCENT"
        textBlend={false}
      >
        <div className="relative bg-abyss">
          
          {/* Trust Bar (Horizontal Scroll Strip) */}
          <section className="relative z-10 py-8 bg-deep-water/50 border-y border-current/20 overflow-hidden">
            <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] gap-20 items-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-20 items-center">
                  <span className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-granite">
                    PADI 5 Star Certified <div className="w-1 h-1 bg-lagoon rotate-45" />
                  </span>
                  <span className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-granite">
                    10+ Years Expertise <div className="w-1 h-1 bg-lagoon rotate-45" />
                  </span>
                  <span className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-granite">
                    Daily Departures <div className="w-1 h-1 bg-lagoon rotate-45" />
                  </span>
                  <span className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-granite">
                    Safety First Culture <div className="w-1 h-1 bg-lagoon rotate-45" />
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: What We Do (Horizontal Bands) */}
          <section id="services" className="py-20 md:py-40">
            <div className="max-w-7xl mx-auto px-6 mb-32">
              <span className="caption-meta mb-4">Exploration</span>
              <h2 className="display-l mb-8">Everything on, above,<br />and beneath the water.</h2>
            </div>

            <div className="space-y-4">
              {[
                { 
                  id: 'diving',
                  num: '01',
                  title: 'Diving', 
                  desc: 'From your first breath to professional certifications. Small groups, expert guidance, and the best sites in Seychelles.',
                  image: '/hero.png',
                  cta: 'Explore Diving'
                },
                { 
                  id: 'boat-tours',
                  num: '02',
                  title: 'Boat Tours', 
                  desc: 'Private charters, island hopping, and sunset cruises. The best way to see Seychelles is always from the water.',
                  image: '/hero.png',
                  cta: 'View Tours'
                },
                { 
                  id: 'water-sports',
                  num: '03',
                  title: 'Water Sports', 
                  desc: 'Jet skis, parasailing, and adrenaline. If it happens on the water, we do it with style.',
                  image: '/hero.png',
                  cta: 'Join the Action'
                }
              ].map((service) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="group relative w-full h-[60vh] md:h-[80vh] overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 z-0">
                    <img src={service.image} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-40 group-hover:opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/40 to-transparent z-10" />
                  </div>
                  
                  <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
                    <span className="display-xl absolute -left-20 top-1/2 -translate-y-1/2 text-white/5 font-black pointer-events-none group-hover:text-lagoon/10 transition-colors">
                      {service.num}
                    </span>
                    <div className="max-w-xl">
                      <h3 className="display-l mb-6 group-hover:bioluminescence-text transition-colors">{service.title}</h3>
                      <p className="text-xl text-granite font-medium mb-10 leading-relaxed md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {service.desc}
                      </p>
                      <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-lagoon group-hover:translate-x-2 transition-transform">
                        {service.cta} <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section: Why Depths (Stats & Trust) */}
          <section id="why-depths" className="py-40 bg-deep-water relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lagoon/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
                {[
                  { label: 'Max Per Guide', value: '4', unit: 'Divers' },
                  { label: 'Avg Water Temp', value: '28', unit: '°C' },
                  { label: 'Clear Visibility', value: '30', unit: 'M+' },
                  { label: 'Years Operating', value: '10', unit: 'Yrs' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center group">
                    <span className="display-l block bioluminescence-text mb-2 group-hover:scale-110 transition-transform">{stat.value}</span>
                    <span className="data-label block mb-1">{stat.unit}</span>
                    <span className="text-[10px] text-granite font-bold uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-12">
                  <h2 className="display-l">We know these waters better than anyone.</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: <ShieldCheck />, title: 'Safety Culture', desc: 'Managed by professionals, for professionals. No compromises.' },
                      { icon: <Users />, title: 'Small Groups', desc: 'Personal attention is our standard, not an option.' },
                      { icon: <LifeBuoy />, title: 'Pro Gear', desc: 'The latest PADI-standard equipment, serviced daily.' },
                      { icon: <Languages />, title: 'Multilingual', desc: 'English, French, and local Creole spoken fluently.' }
                    ].map((point) => (
                      <div key={point.title} className="glass-card p-8 rounded-2xl">
                        <div className="text-lagoon mb-4">{point.icon}</div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{point.title}</h4>
                        <p className="text-xs text-granite leading-relaxed">{point.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-square rounded-[40px] overflow-hidden">
                  <img src="/hero.png" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss to-transparent opacity-60" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <span className="caption-meta mb-2 block">Local Roots</span>
                    <p className="text-2xl font-bold tracking-tight">Our home. Your playground.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Marine Life Grid */}
          <section className="py-40 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
              <div className="lg:w-1/2">
                <span className="caption-meta mb-6 block">Biodiversity</span>
                <h2 className="display-l mb-10">In these waters,<br />every dive is a story.</h2>
                <p className="text-xl text-granite leading-relaxed mb-12">
                  Home to over 1,000 species of fish and 150 species of coral. From the giant granite boulders of the inner reefs to the deep plateaus where the big animals gather — we show you the raw energy of the Indian Ocean.
                </p>
                <div className="flex gap-10">
                  <button className="text-xs font-bold uppercase tracking-widest text-lagoon border-b border-lagoon pb-2 hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    Dive Sites Guide <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6">
                 {[
                   { name: 'Hawksbill Turtle', img: '/hero.png' },
                   { name: 'Manta Ray', img: '/hero.png' },
                   { name: 'Reef Shark', img: '/reef shark.jpg' },
                   { name: 'Napoleon Wrasse', img: '/hero.png' },
                   { name: 'Eagle Ray', img: '/Spotted_Eagle_Ray.jpg' },
                   { name: 'Whale Shark', img: '/whale shark.webp' }
                 ].map((item) => (
                   <div key={item.name} className="flex flex-col items-center group cursor-pointer">
                      <div className="w-full aspect-square rounded-full border-2 border-current p-2 group-hover:border-lagoon transition-colors duration-500 mb-4 overflow-hidden">
                        <img src={item.img} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700" title={item.name} />
                      </div>
                      <span className="data-label text-center !text-[8px] group-hover:bioluminescence-text transition-colors">{item.name}</span>
                   </div>
                 ))}
              </div>
            </div>
          </section>

          {/* The Seasons */}
          <section className="py-20 px-6 bg-ocean-floor/30">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row border border-current/20 rounded-[40px] overflow-hidden">
               <div className="lg:w-1/2 p-12 md:p-24 bg-gradient-to-br from-[#020B18] to-[#041E35]">
                 <span className="caption-meta mb-6 block">The Rhythm</span>
                 <h3 className="display-l mb-8">Southeast Trade Winds</h3>
                 <span className="data-label mb-4 block">May — October</span>
                 <p className="text-granite leading-relaxed">Excellent visibility up to 30m+. Calmer on the west coast of Mahé. Primetime for the deep-water plateaus and shark sightings.</p>
               </div>
               <div className="lg:w-1/2 p-12 md:p-24 bg-gradient-to-br from-[#041E35] to-[#0A3254] relative">
                 <div className="absolute top-0 bottom-0 left-0 w-px bg-current/20 hidden lg:block" />
                 <span className="caption-meta mb-6 block text-sand">The Calm</span>
                 <h3 className="display-l mb-8">Northwest Season</h3>
                 <span className="data-label mb-4 block text-sand">Nov — April</span>
                 <p className="text-granite leading-relaxed">Mirror-calm water across the archipelago. Warmest temperatures (up to 31°C). Peak season for manta rays and the Marine Park tours.</p>
               </div>
            </div>
          </section>

          {/* Footer & CTA */}
          <footer className="pt-40 pb-12 bg-abyss relative border-t border-current/20">
             <div className="max-w-7xl mx-auto px-6 text-center mb-40">
                <span className="caption-meta mb-6 block">Ready to Descend?</span>
                <h2 className="display-xl mb-16">The Indian Ocean is calling.</h2>
                <div className="flex flex-wrap justify-center gap-6">
                   <button className="btn-primary">Book Experience</button>
                   <button className="btn-ghost">Talk to a Guide</button>
                </div>
             </div>

             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-granite text-xs font-bold uppercase tracking-widest mb-32">
                <div className="space-y-4">
                  <span className="text-white block">Location</span>
                  <span>Beau Vallon, Mahé</span>
                  <span>Seychelles Archipelago</span>
                  <span className="data-label block pt-4 text-white/20">4°37'S 55°27'E</span>
                </div>
                <div className="space-y-4">
                  <span className="text-white block">Connect</span>
                  <span className="block">+248 4 XXX XXX</span>
                  <span className="text-lagoon cursor-pointer">WhatsApp 24/7</span>
                  <span className="block lowercase font-normal">info@depths.sc</span>
                </div>
                <div className="space-y-4">
                  <span className="text-white block">Sitemap</span>
                  <a href="#" className="block hover:text-lagoon transition-colors">Diving</a>
                  <a href="#" className="block hover:text-lagoon transition-colors">Fleet</a>
                  <a href="#" className="block hover:text-lagoon transition-colors">Conservation</a>
                </div>
                <div className="glass-card p-10 rounded-3xl flex flex-col justify-between">
                   <span className="text-white">PADI 5 Star Certified Dive Centre</span>
                   <Waves className="text-lagoon mt-10" />
                </div>
             </div>

             <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.4em] text-white/10">
                <span>© 2026 DEPTHS CHARTERS</span>
                <div className="flex gap-10">
                   <a href="#" className="hover:text-white transition-colors">Privacy</a>
                   <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
             </div>
          </footer>
        </div>
      </ScrollExpandMedia>

      {/* Cinematic Depth Gauge (Floating UI) */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-[150] hidden lg:block group">
        <div className="flex flex-col items-center gap-8">
           <div className="relative">
              <span className="display-l bioluminescence-text tabular-nums">{depthDisplay}</span>
              <span className="absolute -right-6 bottom-2 font-mono text-xs text-lagoon">M</span>
           </div>
           <div className="w-1.5 h-60 bg-current/20 rounded-full relative overflow-hidden group-hover:h-80 transition-all duration-700">
              <motion.div 
                 style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                 className="w-full bg-lagoon shadow-[0_0_20px_rgba(0,212,255,0.8)]"
              />
              <div className="absolute top-0 left-0 w-full flex flex-col gap-4 opacity-30 mt-4 px-0.5">
                 {[...Array(10)].map((_, i) => <div key={i} className="w-full h-[1px] bg-white/50" />)}
              </div>
           </div>
           <span className="caption-meta [writing-mode:vertical-rl] text-white/20">Descent Progress</span>
        </div>
      </div>
    </div>
  );
};

export default App;
