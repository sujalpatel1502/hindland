"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from "../components/MotionWrappers";

const EQUIPMENT_INVENTORY = [
  { sr: 1, item: "Hydra (16 Ton Capacity) SB", category: "Lifting & Material Handling", icon: "precision_manufacturing" },
  { sr: 2, item: "Hydra (14 Ton Capacity) SB", category: "Lifting & Material Handling", icon: "precision_manufacturing" },
  { sr: 3, item: "Hydra (12 Ton Capacity)", category: "Lifting & Material Handling", icon: "precision_manufacturing" },
  { sr: 4, item: "Hydra (11 Ton Capacity)", category: "Lifting & Material Handling", icon: "precision_manufacturing" },
  { sr: 5, item: "Trailer with 40 ft. long Trolley", category: "Vehicles & Transport", icon: "local_shipping" },
  { sr: 6, item: "Water Tanker (12000 Ltr. Capacity)", category: "Vehicles & Transport", icon: "local_shipping" },
  { sr: 7, item: "Tractor with Trolley", category: "Vehicles & Transport", icon: "agriculture" },
  { sr: 8, item: "Pickup Vehicle", category: "Vehicles & Transport", icon: "local_shipping" },
  { sr: 9, item: "Rectifier Welding M/c.", category: "Welding & Cutting", icon: "bolt" },
  { sr: 10, item: "Transformer / Oil Cool Welding M/c.", category: "Welding & Cutting", icon: "bolt" },
  { sr: 11, item: "Co2 - Mig Welding M/c.", category: "Welding & Cutting", icon: "bolt" },
  { sr: 12, item: "Container 20' ft (Office)", category: "Site Infrastructure", icon: "warehouse" },
  { sr: 13, item: "Container 20' ft (Store)", category: "Site Infrastructure", icon: "warehouse" },
  { sr: 14, item: "Drill M/c", category: "Fabrication & Machining", icon: "handyman" },
  { sr: 15, item: "Cutting Set", category: "Welding & Cutting", icon: "content_cut" },
  { sr: 16, item: "Pug Cutting M/c", category: "Welding & Cutting", icon: "content_cut" },
  { sr: 17, item: "Grinding M/c", category: "Fabrication & Machining", icon: "construction" },
  { sr: 18, item: "Scaffolding Materials", category: "Lifting & Material Handling", icon: "stacks" },
  { sr: 19, item: "Lifting Tools & Tackles as slings, D-Shackles etc.", category: "Lifting & Material Handling", icon: "link" },
  { sr: 20, item: "Electrode Mother Oven / Portable Oven", category: "Welding & Cutting", icon: "local_fire_department" },
  { sr: 21, item: "Hydraulic / Screw Jacks up to 250 ton capacity", category: "Lifting & Material Handling", icon: "settings_input_component" },
  { sr: 22, item: "Compressor 300 with CFM with Blasting Hopper", category: "Power & Utilities", icon: "air" },
  { sr: 23, item: "Power winches up to 12 ton capacity", category: "Lifting & Material Handling", icon: "settings_input_component" },
  { sr: 24, item: "Chain Pulley Block up to 10 ton capacity", category: "Lifting & Material Handling", icon: "link" },
  { sr: 25, item: "M/W hand tools as dial gauge, straight edge vernier etc. set", category: "Testing & Measurement", icon: "straighten" },
  { sr: 26, item: "Dewatering Pumps", category: "Power & Utilities", icon: "water_drop" },
  { sr: 27, item: "Concrete Mixture", category: "Power & Utilities", icon: "blender" },
  { sr: 28, item: "Vibrator (Petrol & Electrical)", category: "Power & Utilities", icon: "vibration" },
  { sr: 29, item: "Tata Hitachi Ex-70 Excavators", category: "Heavy Equipment", icon: "engineering" },
  { sr: 30, item: "Diesel Generator 7.5 kva", category: "Power & Utilities", icon: "electric_bolt" },
  { sr: 31, item: "Dumpy Level", category: "Testing & Measurement", icon: "straighten" },
  { sr: 32, item: "Shuttering Material", category: "Site Infrastructure", icon: "stacks" },
  { sr: 33, item: "Tools & Tackles for Excavation, masonry, plastering, flooring, painting etc.", category: "Site Infrastructure", icon: "handyman" },
  { sr: 34, item: "Earth Tester", category: "Testing & Measurement", icon: "speed" },
  { sr: 35, item: "Clamp Meter", category: "Testing & Measurement", icon: "speed" },
  { sr: 36, item: "Multi Meter", category: "Testing & Measurement", icon: "speed" },
  { sr: 37, item: "Hydraulic Crimping Tools", category: "Fabrication & Machining", icon: "construction" },
  { sr: 38, item: "Holiday Test M/c.", category: "Testing & Measurement", icon: "science" },
  { sr: 39, item: "Heating Oven HDPE Piping", category: "Fabrication & Machining", icon: "local_fire_department" },
  { sr: 40, item: "Plate Bending M/c. up to 32 mm with 2600mm span capacity", category: "Fabrication & Machining", icon: "construction" },
  { sr: 41, item: 'Plate Bending M/c. up to 8" pipe capacity', category: "Fabrication & Machining", icon: "construction" },
  { sr: 42, item: "Plasma Cutting M/c.", category: "Welding & Cutting", icon: "content_cut" },
  { sr: 43, item: "Tube Expander Machine Capacity 38.1 to 76.2", category: "Fabrication & Machining", icon: "settings" },
  { sr: 44, item: "V-Beveling Machine Capacity 25.4 to 76.2", category: "Fabrication & Machining", icon: "settings" },
];

const STATS = [
  { end: 44, suffix: "+", label: "Machinery & equipment categories" },
  { end: 76, suffix: "", label: "Rectifier welding machines" },
  { end: 107, suffix: "", label: "Grinding machines available" },
  { end: 55, suffix: "", label: "Chain pulley blocks up to 10 ton" },
];

export default function MachineryEquipmentsPage() {
  const [activeStat, setActiveStat] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % STATS.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="pt-20">
      {/* Stats Strip */}
      <section className="bg-surface border-b border-outline-variant/30">
        <div className="max-w-screen-2xl mx-auto px-8 py-16">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/30 overflow-hidden">
            {STATS.map((stat, idx) => (
              <StaggerItem
                key={stat.label}
                className={`group relative p-6 md:p-10 flex flex-col items-start gap-2 md:gap-3 transition-colors duration-500 ${
                  activeStat === idx
                    ? "bg-primary text-white md:bg-surface md:text-inherit"
                    : "bg-surface"
                } md:hover:bg-primary md:hover:text-white`}
              >
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                    activeStat === idx
                      ? "text-white/70 md:text-primary-container"
                      : "text-primary-container"
                  } md:group-hover:text-white/70`}
                >
                  0{idx + 1}
                </span>
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  className={`block font-headline text-4xl md:text-6xl font-black tracking-tighter transition-colors ${
                    activeStat === idx
                      ? "text-white md:text-primary"
                      : "text-primary"
                  } md:group-hover:text-white`}
                />
                <p
                  className={`text-xs md:text-sm leading-snug font-medium ${
                    activeStat === idx
                      ? "text-white/80 md:text-on-surface-variant"
                      : "text-on-surface-variant"
                  } md:group-hover:text-white/80`}
                >
                  {stat.label}
                </p>
                <span
                  className={`absolute bottom-0 left-0 w-full h-1 bg-primary-container origin-left transition-transform duration-500 ${
                    activeStat === idx
                      ? "scale-x-100 md:scale-x-0"
                      : "scale-x-0"
                  } md:group-hover:scale-x-100`}
                ></span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <SlideInLeft className="lg:col-span-5">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Equipment Inventory
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-black text-primary tracking-tighter leading-tight uppercase">
              Equipments & Machinery
            </h2>
          </SlideInLeft>
          <SlideInRight className="lg:col-span-7">
            <p className="text-on-surface-variant text-lg leading-relaxed mb-4">
              A curated, site-ready fleet spanning lifting, welding, fabrication,
              transport, and testing disciplines. Every asset is maintained to
              project-grade standards and deployed across our EPC, O&M, and
              turnkey engagements.
            </p>
            <p className="text-on-surface-variant text-base leading-relaxed">
              From heavy lifting to precision fabrication and on-site execution,
              our assets are mobilized for speed, safety, and efficiency.
            </p>
          </SlideInRight>
        </div>
      </section>

      {/* Inventory */}
      <section id="inventory" className="py-20 bg-surface scroll-mt-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeInUp className="mb-10">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-container text-3xl">
                inventory_2
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-container mb-1">
                  Equipment Inventory
                </p>
                <h3 className="font-headline text-2xl font-black text-primary uppercase tracking-tight">
                  {EQUIPMENT_INVENTORY.length} Assets
                </h3>
              </div>
            </div>
          </FadeInUp>

          {/* Inventory Table / Cards */}
          <>
            {/* Desktop Table */}
            <div className="hidden md:block bg-surface border border-outline-variant/40 monolith-shadow overflow-hidden">
              <div className="grid grid-cols-12 bg-primary text-white px-6 py-4 font-headline text-[11px] font-bold uppercase tracking-[0.2em]">
                <div className="col-span-1">Sr. No.</div>
                <div className="col-span-7">Item Description</div>
                <div className="col-span-4">Category</div>
              </div>
              <StaggerContainer className="divide-y divide-outline-variant/30">
                {EQUIPMENT_INVENTORY.map((row) => (
                  <StaggerItem
                    key={row.sr}
                    className="grid grid-cols-12 px-6 py-5 items-center hover:bg-surface-container-low transition-colors group"
                  >
                    <div className="col-span-1">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-surface-container-high group-hover:bg-primary-container group-hover:text-white font-headline font-black text-sm text-primary transition-colors">
                        {String(row.sr).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="col-span-7 flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary-container text-xl shrink-0">
                        {row.icon}
                      </span>
                      <span className="text-on-surface font-medium text-[15px] leading-snug">
                        {row.item}
                      </span>
                    </div>
                    <div className="col-span-4">
                      <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary-container bg-primary/5 px-3 py-1.5 border border-primary-container/20">
                        {row.category}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden">
              <StaggerContainer className="grid grid-cols-1 gap-3">
                {EQUIPMENT_INVENTORY.map((row) => (
                  <StaggerItem
                    key={row.sr}
                    className="bg-surface border border-outline-variant/40 p-5 flex items-start gap-4"
                  >
                    <span className="inline-flex shrink-0 items-center justify-center w-10 h-10 bg-primary-container text-white font-headline font-black text-sm">
                      {String(row.sr).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary-container text-lg">
                          {row.icon}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-container">
                          {row.category}
                        </span>
                      </div>
                      <p className="text-on-surface font-medium text-sm leading-snug">
                        {row.item}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </>
        </div>
      </section>

      {/* Capability Highlights */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeInUp className="mb-16">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Fleet capabilities
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-black text-primary tracking-tighter uppercase leading-tight max-w-3xl">
              Built for high-stakes execution
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              {
                icon: "precision_manufacturing",
                title: "Heavy Lifting",
                desc: "Hydras up to 16 Ton, hydraulic jacks up to 250 Ton, and 12 Ton winches for structural erection.",
              },
              {
                icon: "bolt",
                title: "Welding Fleet",
                desc: "Rectifier, transformer, and Co2-MIG welding machines with portable electrode ovens for field work.",
              },
              {
                icon: "construction",
                title: "Fabrication",
                desc: "Plate bending up to 32 mm, plasma cutting, tube expanders, and V-beveling for piping workstreams.",
              },
              {
                icon: "engineering",
                title: "Site Readiness",
                desc: "Excavators, generators, dewatering pumps, and containerized offices for rapid mobilization.",
              },
            ].map((cap) => (
              <StaggerItem
                key={cap.title}
                className="group bg-surface border border-outline-variant/30 p-10 hover:bg-primary hover:border-primary transition-colors duration-500 relative overflow-hidden"
              >
                <span className="material-symbols-outlined text-4xl text-primary-container group-hover:text-white mb-8 block transition-colors">
                  {cap.icon}
                </span>
                <h3 className="font-headline text-xl font-bold text-primary group-hover:text-white uppercase tracking-tight mb-3 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-on-surface-variant group-hover:text-white/80 leading-relaxed transition-colors">
                  {cap.desc}
                </p>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-container scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <FadeInUp className="max-w-screen-2xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-6">
              NEED A CUSTOM MOBILIZATION PLAN?
            </h2>
            <p className="text-white/75 text-lg">
              Share your project scope and we&apos;ll recommend the right
              machinery mix, crew, and timeline — tailored to your site.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 font-headline font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all text-center"
            >
              Talk to our Team
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-10 py-4 font-headline font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center"
            >
              Explore Services
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
