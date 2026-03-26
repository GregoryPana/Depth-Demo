Here's everything — the full colour system, typography direction, and the complete Variant prompt.

COLOUR PALETTE — DEPTHS
The Philosophy
The palette must feel like being underwater in Seychelles at different times of day. Deep navy at depth. Electric cyan at the surface. Warm coral and gold for the life that lives on the reef. Granite white for the islands. Never cold. Never clinical. Always alive.

PRIMARY PALETTE
NameHexUsageAbyss#020B18Primary background. The deep ocean at night.Deep Water#041E35Secondary background. Dark navy panels.Ocean Floor#0A3254Card backgrounds, elevated surfaces.Current#0E5F8AMid-tone blue. Borders, dividers, subtle UI.Surface#1A9BC4Interactive elements, hover states, links.Lagoon#00D4FFPrimary accent. CTAs, highlights, active states.Bioluminescence#7EEEFFGlow effects, shimmer, text on dark backgrounds.

SECONDARY PALETTE
NameHexUsageCoral#FF6B4ADanger states, urgency CTAs, warm accents.Reef Gold#E8A84CPremium touches, pricing, special callouts.Sand#F5EDD8Light text on very dark sections.Granite#B8C8D4Body text, secondary information.Sea Foam#E8F6FALight backgrounds on white sections.White Water#FFFFFFHeadlines on dark backgrounds.

GRADIENT SYSTEM
These gradients are used throughout the site to create depth and movement:
The Descent — Hero backgrounds and full-bleed sections
linear-gradient(180deg, #020B18 0%, #041E35 40%, #0A3254 100%)
The Surface Break — Where dark meets light sections
linear-gradient(180deg, #020B18 0%, #0E5F8A 60%, #00D4FF 100%)
The Reef — Card and panel backgrounds
linear-gradient(135deg, #041E35 0%, #0A3254 50%, #0E5F8A 100%)
Bioluminescence Glow — Accent glows behind CTAs and hero elements
radial-gradient(ellipse at center, rgba(0,212,255,0.25) 0%, transparent 70%)
Coral Sunrise — Used sparingly for sunset cruise and warm experience pages
linear-gradient(135deg, #041E35 0%, #7B2D1E 50%, #E8A84C 100%)
Golden Hour — Sunset cruise hero specifically
linear-gradient(180deg, #020B18 0%, #3D1F0A 40%, #E8A84C 70%, #FF6B4A 100%)

TYPOGRAPHY
Display / Headlines
Clash Display or Cabinet Grotesk — bold, geometric, modern. Large, confident, editorial.
Fallback: Syne or Space Grotesk
Body
Inter or DM Sans — clean, readable, neutral. Never competes with the imagery.
Accent / Labels / Eyebrows
Space Mono or JetBrains Mono — monospaced, technical feel for dive depth callouts, coordinates, stats.
Type scale on dark backgrounds:

Headlines: #FFFFFF or #7EEEFF for glowing effect
Body: #B8C8D4 (Granite)
Muted / secondary: #6B8FA3
Accent labels: #00D4FF (Lagoon)

TEXTURE & EFFECTS SYSTEM
Water caustics overlay — A subtle animated light pattern (CSS or canvas) that mimics the way sunlight refracts through moving water. Used on hero sections at low opacity (8–12%).
Bubble particles — Tiny rising white particles on scroll transitions between sections. Subtle. Creates genuine underwater feel.
Frosted glass cards — backdrop-filter: blur(12px) with background: rgba(10, 50, 84, 0.4) and border: 1px solid rgba(0, 212, 255, 0.15).
Depth shadow — box-shadow: 0 8px 40px rgba(0, 212, 255, 0.12), 0 2px 8px rgba(0, 0, 0, 0.4)
Glow on CTAs — box-shadow: 0 0 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.15)

THE COMPLETE VARIANT PROMPT
Copy this entire prompt into Variant:

DEPTHS — Complete Website Design Brief
Brand Overview
Design a complete multi-page website for Depths — a premium dive centre, guided boat tour operator, and water sports company based in Mahé, Seychelles. The brand is professional, passionate, locally rooted, and deeply connected to the Indian Ocean. The design should feel like being underwater in Seychelles — cinematic, immersive, alive with colour and movement. Think National Geographic meets a premium adventure brand. The overall ambition is Apple-level polish with the raw energy of the ocean.

Design Principles — Read These First

1. Consistent Identity, Unique Page Personalities
   Every page shares the same design DNA — colour palette, typography, component style — but each page has its own visual personality that reflects its content. The dive sites page feels different from the sunset cruise page. The conservation page feels different from the jet ski page. Same brand. Different soul on each page.
2. Depth Through Layers
   Every section should have foreground, midground, and background layers. Nothing sits flat. Glassmorphism cards float above gradient backgrounds. Text sits above imagery with gradient masks. Elements cast glows. The whole site should feel three-dimensional.
3. The Ocean is Always Present
   Even on pages with no underwater imagery, the ocean is felt — through colour, through the gradient system, through subtle water-effect textures and animations. The user should never forget where they are.
4. Motion with Purpose
   Every animation should feel like water — fluid, never jarring, never mechanical. Scroll-driven reveals, parallax depth on images, elements that drift rather than snap. Nothing should animate just for the sake of animating. Every motion tells you something about the brand.
5. Typography as Architecture
   Headlines are enormous and confident. Body text is airy and readable. Monospaced font for data — depths, coordinates, temperatures, durations — gives a technical, specialist credibility. Pull quotes are large and editorial.

Colour System
--abyss: #020B18 /_ Primary dark background _/
--deep-water: #041E35 /_ Secondary dark background _/
--ocean-floor: #0A3254 /_ Card/panel backgrounds _/
--current: #0E5F8A /_ Borders, dividers _/
--surface: #1A9BC4 /_ Interactive mid-tone _/
--lagoon: #00D4FF /_ Primary accent — CTAs, highlights _/
--bioluminescence: #7EEEFF /_ Glow text, shimmer effects _/
--coral: #FF6B4A /_ Warm accent, urgency _/
--reef-gold: #E8A84C /_ Premium, pricing, special _/
--sand: #F5EDD8 /_ Light text _/
--granite: #B8C8D4 /_ Body text _/
--white-water: #FFFFFF /_ Headlines _/
Primary gradient — The Descent:
linear-gradient(180deg, #020B18 0%, #041E35 40%, #0A3254 100%)
Surface Break gradient:
linear-gradient(180deg, #020B18 0%, #0E5F8A 60%, #00D4FF 100%)
Bioluminescence glow:
radial-gradient(ellipse at center, rgba(0,212,255,0.25) 0%, transparent 70%)
Sunset/warm pages only:
linear-gradient(180deg, #020B18 0%, #3D1F0A 40%, #E8A84C 70%, #FF6B4A 100%)

Typography

Display: Clash Display or Cabinet Grotesk — bold, large, editorial
Body: Inter or DM Sans — clean and readable
Data/Labels: Space Mono — for depths, temps, durations, coordinates
Headlines on dark: #FFFFFF or #7EEEFF with glow
Body text: #B8C8D4
Accent labels: #00D4FF

Shared Components — Used Across All Pages
Navigation:
Fixed top navbar. Dark glassmorphism — rgba(2,11,24,0.85) with backdrop-filter: blur(20px) and a subtle #00D4FF bottom border. Logo left. Navigation links centre or right. "Book Now" CTA button glowing in #00D4FF. On scroll, navbar compresses slightly. Mobile: full-screen dark menu with animated open/close.
Footer:
Deep #020B18 background. Three columns — navigation links, contact details, social media. Subtle animated wave or water texture across the top edge of the footer. A coordinates line in Space Mono: 4°37'S 55°27'E — Mahé, Seychelles. Copyright line. The footer should feel like sinking to the ocean floor — calm, final, peaceful.
CTA Buttons:
Primary: #00D4FF background, #020B18 text, border-radius: 6px, glow shadow 0 0 30px rgba(0,212,255,0.4). On hover: brightness increases, glow expands. Secondary/ghost: transparent background, #00D4FF border and text, same glow on hover.
Cards:
Glassmorphism — background: rgba(10,50,84,0.4), backdrop-filter: blur(12px), border: 1px solid rgba(0,212,255,0.15), border-radius: 16px. On hover: border brightens to rgba(0,212,255,0.4), subtle upward translation, glow increases.
Section transitions:
Pages do not have hard edges between sections. Sections bleed into each other using gradient fades. The illusion is of one continuous, deep scroll — like descending through water.
Eyebrow labels:
All caps, Space Mono, #00D4FF, letter-spacing: 0.3em, small size. Always sits above section headings.
Stat/data callouts:
Numbers in large Clash Display, value in #7EEEFF or #00D4FF, label beneath in Space Mono granite. Used for: 27°C water temp, 30m visibility, 150+ species, 10+ years operating.

PAGE 1 — HOME
Visual personality: Epic. The full promise of the brand in one scroll.
Hero:
Full viewport. Video background — underwater coral transitioning to breaking surface to aerial drone over turquoise Seychelles water. Gradient overlay: linear-gradient(180deg, rgba(2,11,24,0.3) 0%, rgba(2,11,24,0.7) 100%). Headline: "The Indian Ocean is waiting. Are you ready?" — enormous white display font, 7EEEFF glow. Sub-headline beneath in granite. Two CTAs side by side — primary "Book an Experience" and ghost "Explore What We Do". Animated scroll indicator at bottom — a small diving figure descending with a dashed line beneath it.
Trust bar: Horizontal scrolling strip — PADI 5 Star · 10+ Years · Morning & Afternoon Daily · All Levels Welcome — separated by #00D4FF diamond separators.
What We Do: Three full-width horizontal bands — Diving, Boat Tours, Water Sports. Each band: image left, text right (alternating). Image has parallax scroll. Text has large number (01, 02, 03) in very large transparent display font as a background element. On hover, the band expands slightly, image saturates.
Why Depths: Dark section, #041E35 background, bioluminescence glow in centre. Four stat callouts — 4 divers per guide, 27°C water, 15–30m visibility, 10+ years. Below the stats, four trust point cards in glassmorphism style.
Featured Experiences: Three cards in a horizontal row — most popular experiences. Each card: full bleed image, gradient overlay from bottom, title, one line description, "From SCR X" price, Book button. On hover card expands upward slightly, glow appears on border.
Marine Life: Split section. Left: large editorial paragraph about Seychelles marine life. Right: a grid of six circular marine life images — turtle, reef shark, manta ray, eagle ray, napoleon wrasse, clownfish — each with a label beneath in Space Mono. Subtle #00D4FF ring border on circles. On hover: circles scale up, label glows.
Testimonials: Dark band. Three testimonial cards side by side. Stars in #E8A84C. Quote in large italic granite. Name and country in Space Mono lagoon.
The Seasons: Two-column split. Southeast season left, Northwest season right. Each side has a subtle background tint — cooler blue left, slightly warmer right. Animated temperature gauge or wave icon in the centre divider.
Conservation Pledge: Full-width section with an underwater photography background at very low opacity. Large centred headline. Short paragraph. CTA linking to conservation page.
Footer CTA: #041E35 background, large centred headline, two CTAs, coordinates line.

PAGE 2 — DIVING OVERVIEW
Visual personality: Expert and awe-inspiring. This page is for people standing at the edge of something life-changing.
Hero: Video — diver descending alongside a granite boulder wall, rays of sunlight filtering down from above. Headline: "Discover what 97% of visitors to Seychelles never see." In enormous display font, white, with a faint #7EEEFF text-shadow glow. Sub-headline in granite below. Single CTA.
Intro section: Large centred editorial paragraph on #020B18. Behind the text, very subtle caustics light animation at 8% opacity. The text should feel like it is being read underwater.
Sub-page navigation cards: Five cards in a 2-2-1 grid layout — Try a Dive, Fun Dives, PADI Courses, Freediving, Dive Sites. Each card: dark glassmorphism, full-bleed background image, title in large display, one-line description, arrow CTA. On hover: image parallaxes, border glows #00D4FF.
Practical info block: Horizontal strip — dark #041E35 background. Six data points in a row: Departures 7:45am & 1pm · Water 27–31°C · Visibility 15–30m · Groups max 4 · Nitrox Available · All agencies accepted. Each in Space Mono with a small #00D4FF icon.
What you will see: Full-width section. Dark background. Headline left. Six marine life circles right (same component as home, so it feels like a linked system). A paragraph about the specific marine life at Seychelles dive sites.

PAGE 3 — TRY A DIVE
Visual personality: Warm, reassuring, exciting. For someone nervous but curious.
Hero: Image — two people in shallow, sunlit water with a divemaster between them, all smiling above the surface, tropical reef visible beneath. Warm overlay. Headline: "You don't need experience. You just need to show up." The tone of this page shifts slightly — warmer, more human, less technical.
The three steps: A horizontal three-step timeline — Pool Session → Ocean Briefing → First Dive. Each step: large step number in transparent display font background, icon, heading, paragraph. Animated connector line between steps that draws on scroll.
What happens on the day: Vertical timeline with five time-stamped moments — Arrival & Briefing, Equipment Fitting, Pool Session, Boat to Reef, First Ocean Dive. Each with an icon, time, heading, and paragraph. Animated #00D4FF line that fills as you scroll down.
What's included: Icon grid — eight items. Each item: small glow icon, label. #00D4FF accent colour.
Reassurance block: Three glassmorphism cards — Safety, Small Groups, Equipment. Gentle tone. This page should never feel intimidating.
CTA section: Split — left: "Ready to try?" with primary CTA. Right: "Have a question first?" with secondary contact CTA. Background has a warm underwater photo at low opacity.
Crosslinks at bottom: "Already certified? See Fun Dives →" and "Want to get certified? See PADI Open Water →"

PAGE 4 — FUN DIVES
Visual personality: Bold and active. This is for divers who know what they want.
Hero: Video — diver moving through a school of silver fish, reef below, surface light above. Fast, confident energy. Headline: "You're certified. The rest of Seychelles is waiting."
Three dive options: Three horizontally arranged cards — Single Dive, Twin Tank, Long Range. Each card: dark glassmorphism, large title, description, what's included, price. Long Range card highlighted with #E8A84C gold accent — premium option.
What's always included: Clean horizontal strip with icons.
Equipment hire: Accordion-style list — each item expands to show price and description.
Dive site preview: A teaser row — three dive site cards with dramatic underwater photography and depth/level callouts in Space Mono. "View all dive sites →" CTA.
What you'll see: Species grid — same circular component, different species featured for dive-level encounters — whale shark, grey reef shark, manta ray, eagle ray, hawksbill turtle, giant grouper.
Crosslinks: "Want to go deeper? See Advanced Open Water →" and "Explore the sites → Dive Sites Guide"

PAGE 5 — PADI COURSES OVERVIEW
Visual personality: Authoritative and aspirational. A career ladder made beautiful.
Hero: Image — a divemaster leading a group of four students underwater, all in perfect buoyancy, coral wall beside them. Headline: "Learn to dive in one of the most beautiful places on Earth."
Course progression path: A visual vertical journey — a stunning illustrated or CSS-animated pathway from sea surface to depth. At each depth marker, a course card branches off: Open Water at 18m, Advanced at 30m, Rescue Diver, Divemaster at depth. The visual metaphor is descending deeper the more you learn. This is the hero design element of this page — unique, memorable, completely specific to this business.
Why train with us: Six points. Icon, heading, one line. In a 3-column grid. Dark glassmorphism cards.
Crosslinks: Each course card links to its individual page. Bottom of page: "Not sure where to start? Talk to us →"

PAGE 6 — OPEN WATER DIVER
Visual personality: Milestone. Life-changing. The beginning of everything.
Hero: Image — a student diver looking up toward the surface from 5 metres, sunlight streaming down, expression of pure wonder. Headline: "Your first certification. Your diving life begins here."
Three-component breakdown: Pool/theory/open water shown as three visual chapters with full-bleed imagery per chapter. Chapter transition uses a wave-dissolve or fade-through animation.
Course details block: Clean data table in Space Mono — Duration, Min Age, Prerequisites, Group Size, Certification.
What's included: Icon checklist — #00D4FF tick icons.
Crosslinks: "Already done Open Water? See Advanced Open Water →" and "Not ready to commit? Try a Dive first →"

PAGE 7 — ADVANCED OPEN WATER
Visual personality: Deeper, more serious, more dramatic. For divers ready to push.
Hero: Image — diver at depth beside a large granite formation, deep blue water behind, sunlight barely reaching. Headline: "You know how to dive. Now learn how to dive better."
The five adventure dives: Five large horizontal cards — each representing one dive. Mandatory dives (Deep, Navigation) have a #00D4FF left border accent. Elective dives have a #0E5F8A border. Each card: dive name, what you learn, image thumbnail, duration.
Depth callout: A large centred graphic — a depth gauge illustration in Space Mono showing 18m (Open Water), 30m (Advanced). A single animated line drops from 18m to 30m as the page loads. Simple, dramatic, immediately communicates the upgrade.
Crosslinks: "Next step: Rescue Diver →" and "Back to: All PADI Courses →"

PAGE 8 — RESCUE DIVER
Visual personality: Serious, empowering. The course that changes divers.
Hero: Dark, dramatic. Image of a diver helping another at the surface, strong side lighting, ocean background. Headline: "The course that changes how you think about diving." Deep #020B18 background, cool tones throughout.
What you learn: Six scenario cards — each showing a rescue situation. Bold icons. Clear headings. Concise descriptions. These cards use #FF6B4A coral accent sparingly to signal the serious nature of the content.
EFR section: A distinct visual block within the page — slightly different background tint, #041E35. Explains the Emergency First Response component clearly.
Pull quote: Large centred italic quote — "Ask any experienced diver which course made the biggest difference. Most say Rescue Diver." — in #7EEEFF on dark background.

PAGE 9 — DIVEMASTER
Visual personality: Professional, aspirational, cinematic. A career, not just a course.
Hero: Video — a divemaster leading a group through a dramatic granite arch underwater, confident and fluid. Headline: "Turn your passion into your profession." Full viewport, maximum drama.
What the programme covers: Vertical timeline — eight programme components. Each has a large number, heading, and description. The #00D4FF timeline line animates on scroll.
The Seychelles advantage block: Full-width dark section. Large italic editorial paragraph about training in these specific waters. Behind it, a very subtle underwater map or topographic illustration of the dive sites at 6% opacity.
Internship CTA: A distinct full-width band — #041E35 background, #E8A84C gold accent. "This is a three-month commitment. We take it seriously. So should you." Direct, honest, differentiating. Enquiry button.

PAGE 10 — SPECIALITY COURSES
Visual personality: Creative and diverse. Each speciality feels like its own world.
Hero: A grid of six dramatic images — one for each speciality — arranged in an asymmetric editorial layout. Animated on load — each image fades in with a slight stagger. Headline overlaid across the grid: "Take your diving further."
Speciality cards: Six cards in a 3-column grid. Each card has a distinct accent colour that nods to the speciality — #7EEEFF for Nitrox, warm amber for Photography, dark coral for Night Diving, etc. Within the consistent glassmorphism card system, each feels individual.
Nitrox callout: A distinct highlighted block — "The only dive centre in Seychelles offering Nitrox." Bold. Centred. #00D4FF accent border.

PAGE 11 — FREEDIVING
Visual personality: Meditative, minimal, breathtaking. The most different page on the site.
Design direction: This page is calmer and more minimal than the rest. More white space. Slower animations. The palette leans toward the lighter end of the ocean colours — #7EEEFF, soft gradients, barely-there textures. It should feel like holding your breath.
Hero: Full viewport image — a freediver descending vertically, arms at sides, a single beam of surface light above, deep blue below. No video. Static. Powerful. Headline: "One breath. A different kind of underwater world." Text centred, minimal, serene.
Intro paragraph: Large, centred, generous line height. The most poetic writing on the site. Laid over a barely-there underwater background.
Session options: Two clean cards — Beginner Session and Guided Ocean Freediving. Minimal. Almost spa-like in their restraint. White text, very subtle border, lots of breathing room.
Safety section: Treated with care. Not alarming. A calm, quiet block — dark background, measured tone, clear information.
Crosslinks: "Prefer tanks? See Try a Dive →" and "Explore the reef at your own pace → Snorkelling"

PAGE 12 — DIVE SITES GUIDE
Visual personality: Expansive, encyclopaedic, adventurous. The most content-rich page on the site.
Hero: Aerial drone shot of Seychelles — multiple islands visible, deep blue ocean between them. Headline: "Some of the most spectacular dive sites in the Indian Ocean. All within reach." Large and confident.
Interactive site selector: A stylised illustrated map of the waters around Mahé showing dive site locations as glowing #00D4FF pin markers. On hover, each pin expands to show site name, depth, and level. On click, page scrolls to or navigates to the site's section/page. This is the signature design element of this page.
Site cards: Below the map, each dive site has a card — dramatic underwater photography, site name in large display, depth in Space Mono, difficulty level indicator (#00D4FF dots — 1 to 3), one-paragraph description, "View Site" CTA.
Season strip: A horizontal timeline showing the best months for each category of dive — long range, inner reef, whale shark, manta ray. Visual, clear, immediately useful.

INDIVIDUAL DIVE SITE PAGES (e.g. SHARK BANK, ENNERDALE)
Visual personality: Each site page is a world unto itself — same template structure but unique photography and colour temperature per site.
Shark Bank: Hero image — grey reef sharks circling a submerged rock formation in open blue water. Colour temperature: cool, deep blue. Stats bar: 25–45m depth, Advanced level, Long Range, Best May–Oct.
Ennerdale Wreck: Hero image — the encrusted hull of the wreck disappearing into dark water below, dense with marine life. Colour temperature: deeper, darker, more dramatic. Stats bar: 20–32m, Advanced, Long Range.
Template per site page:
Hero full-bleed image · Stats bar (depth, level, range, season) in Space Mono · Extended editorial description · What you will see — species list with small circular photos · Best conditions block · Difficulty rating visual · "Book Fun Dives" CTA · "View all dive sites" back link · Related sites at bottom.

PAGE 13 — BOAT TOURS & DAY TRIPS OVERVIEW
Visual personality: Bright, joyful, accessible. The most welcoming page on the site. Broader audience.
Palette shift: This page is deliberately lighter and warmer than the diving pages. The deep #020B18 background gives way to slightly warmer, lighter sections — #041E35 to #0A3254 — with more use of #E8A84C reef gold as an accent. The ocean is still present but the mood is holiday, not expedition.
Hero: Video — a catamaran sailing across turquoise water toward a tropical island, passengers on deck, golden afternoon light. Headline: "The best way to see Seychelles is always from the water."
Tour cards: Six cards in an asymmetric masonry grid — different card heights and widths creating an editorial, magazine-style layout. Each card: full-bleed image, tour name, duration, price from, and one-line description. The Sainte Anne Day Trip card is the largest — the hero card of the grid.
"Not sure which tour?" section: A simple interactive selector — "How long do you have?" (Half Day / Full Day / Sunset / Multi-Day) filters the visible tour cards. Clean, useful, conversion-focused.

PAGE 14 — SAINTE ANNE MARINE PARK DAY TRIP
Visual personality: Warm, celebratory, richly detailed. The flagship experience page.
Hero: Video — the glass-bottom boat moving over the marine park, coral and fish visible through the hull. Headline: "The best day you'll have in Seychelles. No exaggeration."
The Day — Timeline: A horizontal scrolling timeline showing each moment of the day — 9:00am Departure → Snorkelling Stop → Fish Feeding → BBQ Lunch → Moyenne Island → Cocktail Return. Each stop: time in Space Mono, icon, heading, description, and a small image. The timeline scrolls horizontally with arrow navigation. Animated boat icon moves along the timeline as you progress.
Moyenne Island feature section: This deserves its own moment — a full-width dark section with a lush image of the island and tortoise, telling Brendon Grimshaw's story. Emotionally engaging. Sets Depths apart from operators who skip the storytelling.
Included/not included: Clean two-column checklist. #00D4FF ticks for included. #FF6B4A crosses for not included.
Practical info: Dark card block — minimum passengers, transfers, cancellation policy, meeting point.
Image gallery strip: Horizontal scroll of six trip photos — on-board, snorkelling, tortoise, BBQ, sunset return.

PAGE 15 — SUNSET CRUISE
Visual personality: Romantic, warm, golden. The most emotionally different page on the site.
Palette: This page fully activates the warm palette — the #E8A84C Reef Gold and #FF6B4A Coral colours take prominence. The gradient used is the Golden Hour gradient. The page should feel warm and glowing, like the light itself.
Hero: Full viewport video — the sun dropping toward the horizon over the Indian Ocean, shot from a moving boat, warm amber reflections on the water. Headline: "Two hours. Champagne. The most beautiful light you have ever seen." Text in warm #F5EDD8 sand colour rather than cold white.
What's included: Icon strip — warm gold icons on dark background.
Perfect for: Three small warm-toned cards — Couples, Honeymoons, Groups. Gentle imagery.
Private hire upsell: A distinct call-out block — "Want the boat entirely to yourselves? See Private Charter →" — with a subtle gold border.

PAGE 16 — PRIVATE BOAT CHARTER
Visual personality: Premium, exclusive, unhurried. The most luxurious page on the site.
Hero: Image — a sleek boat anchored off a completely empty beach, one couple on the deck, water impossibly clear. Headline: "Your boat. Your itinerary. Your day." Generous white space. Unhurried feel.
Half Day vs Full Day: Two large cards side by side. Clean. Not cluttered. Premium restraint.
Popular combinations: Four scenario cards — each showing a different combination (Dive + Beach, Fishing + Sunset, Island Hop + BBQ, Romantic Proposal). The proposal card uses #E8A84C gold accent — special, discreet, memorable.
What can be added: An elegant add-on menu — catering, champagne, fishing gear, dive equipment. Presented like a concierge menu, not a price list.

PAGE 17 — WATER SPORTS OVERVIEW
Visual personality: High energy, bold, fun. The most dynamic page on the site.
Palette: This page uses the full colour range more freely. #00D4FF is everywhere. Motion and energy. This page should feel like it's moving even when the user isn't scrolling.
Hero: Fast-cut video — 10-second montage of jet ski spray, parasailer launching, wakeboarder landing a jump, banana boat riders screaming with laughter. Energetic music implied by the cut pace. Headline: "Not everything in the ocean needs to go slow."
Activity grid: Six activities in a 3-column grid. Each card auto-plays a short looping video clip on hover — jet ski spray, parachute rising, kayak gliding. Card: title, one-line description, duration, price from, Book button.
Energy bar: A pulsing horizontal strip — "Based at Beau Vallon Beach · Open Daily 8:00am–6:00pm · Walk-ins Welcome · All Equipment Provided"

INDIVIDUAL WATER SPORTS PAGES
Each page follows a consistent but personality-distinct template:
Jet Ski: Dark, fast, adrenaline. Speed stat callout "60km/h" in enormous Space Mono. Action video hero. Hire vs Tour options clearly split.
Parasailing: Vast and serene. Hero image — parasailer very high, ocean and islands below, sky above. The opposite energy of the jet ski page — quiet, elevated, almost meditative. "90 metres above the Indian Ocean. Completely silent. Completely unforgettable."
Wakeboarding & Water Skiing: Split personality — beginner friendly left panel, advanced right panel. Before/after implied — first attempt vs confident ride.
Kayaking & SUP: Calm and exploratory. Warm morning light. Coastal imagery. Crystal kayak feature gets its own visual callout — a dramatic shot through the transparent hull.
Banana Boat & Donut: Intentionally fun and loose. Bright imagery. Laughing faces. Less formal tone. "Nobody stays serious for long on a banana boat." This page is allowed to have a lighter visual energy than the rest of the site.
Snorkelling: Bridge between water sports and diving sections. Calm, clear, family-friendly imagery. Tips section styled as handwritten-feel cards.

PAGE 18 — OUR FLEET
Visual personality: Technical credibility meets visual pride. These boats are trusted tools.
Hero: Aerial drone shot of all three vessels anchored together in a turquoise bay. Headline: "Built for this ocean. Maintained to the highest standard."
Vessel pages: Each vessel gets a full feature treatment — hero image exterior, interior gallery, spec table in Space Mono (length, capacity, engines, equipment), what experiences it operates. The vessels are named and feel like characters, not just equipment.
Fleet stats strip: Total dives completed · Years in operation · Safety record · Certified captains.

PAGE 19 — CONSERVATION
Visual personality: Serious, beautiful, emotionally resonant. The brand's soul on display.
Design direction: This page is more editorial than any other. More white space. Larger photography. The colour palette shifts — less UI chrome, more pure photography and text. #00D4FF is used sparingly and meaningfully.
Hero: Stunning split image — healthy coral reef left side, bleached coral right side, a razor-sharp dividing line between them. No text overlay. Just the image. Then below: "We are guests in this ocean. We act like it."
Our commitments: Six full-width horizontal sections — each commitment gets a heading, a paragraph, and a wide-format image. They are separated by thin #00D4FF divider lines. The sections stack like chapters in a report.
Data that matters: Coral health monitoring results (example data), turtle sightings logged, kilograms of marine debris collected. Real numbers. Space Mono. Credible.
Partner logos: Seychelles Marine Conservation Society, PADI AWARE, Association of Professional Divers. Clean, respected, aligned.

PAGE 20 — ABOUT US
Visual personality: Human, honest, personal. Where the brand becomes people.
Hero: A candid team photo — instructors on the boat deck at golden hour, relaxed, genuine. Not a posed corporate shot. Headline: "We grew up on this island. We built this around it."
The Story: Editorial long-form text layout — large initial cap, comfortable line length, generous leading. One large full-bleed image mid-story. The writing is personal and direct.
Team profiles: Four profile cards. Each: large portrait, name in display font, role in Space Mono, certifications as small tags, one genuine personal sentence — "Favourite dive site: Shark Bank. The sharks don't care who you are. That's why I love it." Real personality.
Certifications block: PADI 5 Star badge, Coast Guard certification, APDS membership. Clean, trusted, authoritative.

PAGE 21 — GALLERY
Visual personality: Pure visual immersion. The least text-heavy page on the site.
Design direction: Full-bleed masonry grid. No cards. No borders. Images breathe into each other. Category filter tabs at the top — Underwater · Boat Tours · Water Sports · Marine Life · The Team. Filter transition is a smooth crossfade. On hover, images darken slightly and a #00D4FF label appears with the activity name. Lightbox on click — dark overlay, full-size image, left/right navigation.

PAGE 22 — CONTACT & BOOKING
Visual personality: Clear, efficient, reassuring. Every question answered before it's asked.
Hero: Minimal. Dark background. Headline: "Ready to get in the water? So are we." Sub-line with phone number and WhatsApp link prominently displayed. No video. The page should be fast to understand and easy to act on.
Booking form: Left column, full width on mobile. Experience type dropdown (all 20+ activities), date, group size, level, name, email, phone, hotel, notes. Primary CTA button full width on submit.
Contact details: Right column on desktop. All contact information clearly laid out. Opening hours. Location with embedded map. WhatsApp button with #25D366 green accent — the one deliberate off-palette colour, because everyone knows the WhatsApp colour.
FAQ accordion: Six questions. Smooth expand/collapse. Dark glassmorphism container. #00D4FF arrow icons rotate on open.
Coordinates footer: 4°37'S 55°27'E in Space Mono, centred, small, beautiful.

INTERNAL LINKING RULES — APPLY TO EVERY PAGE
Every page must include:

A "Related Experiences" section at the bottom — three cards linking to logically connected pages
A "Next Step" CTA block above the footer — always linking to either Contact & Booking or the next logical page in the user journey
The main navigation always visible — with Diving, Boat Tours, and Water Sports as dropdown menus
Breadcrumb navigation on all sub-pages — e.g. Home > Diving > PADI Courses > Open Water Diver
The course progression path (Open Water → Advanced → Rescue → Divemaster) is signposted on every PADI course page
Every dive site page links back to Fun Dives and the Dive Sites Guide overview
Every boat tour page links to Private Charter as an upsell
Every water sports page links to the Water Sports overview and Contact & Booking

ANIMATION PRINCIPLES — APPLY GLOBALLY

Scroll reveals: Elements enter from below with a gentle translateY(30px) to translateY(0) and opacity: 0 to opacity: 1. Duration 0.6s. Ease: cubic-bezier(0.16, 1, 0.3, 1). Never jarring.
Parallax: Hero images and background layers move at 0.4x scroll speed. Creates genuine depth.
Water caustics: Subtle animated light pattern on hero sections. CSS or canvas. Opacity 8%. Never distracting.
Glow pulse: CTA buttons have a slow, repeating glow pulse animation — box-shadow breathing from 0 0 20px rgba(0,212,255,0.3) to 0 0 40px rgba(0,212,255,0.6) and back. Duration 3s. Infinite.
Hover states: Cards lift translateY(-4px), border brightens, glow appears. 0.3s ease. Consistent across all cards.
Page transitions: A brief underwater blur/fade between pages — as if passing through the water's surface.
Number counters: Stat numbers count up from zero when they enter the viewport.
The navigation: On scroll past 80px, navbar background solidifies from transparent to rgba(2,11,24,0.92). Smooth transition.
