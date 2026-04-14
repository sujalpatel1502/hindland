import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Projects | HINDLAND Infrastructure" };

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Civil engineering project"
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/art-docs/projects.png"
            width={1920}
            height={1080}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
          <span className="inline-block py-1 px-3 mb-6 bg-primary-container text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm">
            Excellence in Execution
          </span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter max-w-4xl">
            Our Global Footprint & Key Projects
          </h1>
          <div className="mt-8 flex gap-4">
            <div className="h-1 w-24 bg-primary-container"></div>
            <p className="text-white/80 max-w-xl font-light text-lg">
              Engineering landmarks that define modern infrastructure. From
              intercontinental refineries to record-breaking suspension bridges.
            </p>
          </div>
        </div>
      </section>
      {/* Featured Project */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-0 monolith-shadow rounded-xl overflow-hidden bg-white">
            <div className="lg:w-3/5 h-[500px] lg:h-auto overflow-hidden">
              <Image
                alt="Featured Refinery Project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOB1p9Cu9piK9LX5EpmDZBGgoC-9GphUu7IO3GlHNuRy7w6pcjRe8MZMtR4ThLl2KZCLkIOZ4J-OIsY31D3HB81GNSFTpGccaxGeO2dB20Jrvp5JWmTdhlFvzSpLkTeYU_wpusmb9UVIrhjFBm37W9X6VjmIlrzLy1n6s1wv0nanyYv25PhlB_1XnLdlKJyZkltwrS1zQoOE6qdWYInYln_YX5_ysU-uO-nLMG4GChp9ATY_nRoAaqdDUdgJjMVbjhR5qXJEwCXHO5"
                width={1280}
                height={720}
                unoptimized
              />
            </div>
            <div className="lg:w-2/5 p-12 flex flex-col justify-center bg-white">
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4">
                Featured Excellence
              </span>
              <h2 className="font-headline text-4xl font-extrabold text-primary mb-6 leading-tight">
                The Al-Zour Integrated Refinery Expansion
              </h2>
              <div className="space-y-6 text-on-surface-variant mb-10">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    location_on
                  </span>
                  <div>
                    <p className="font-bold text-on-surface">Location</p>
                    <p className="text-sm">Ahmadi Governorate, Kuwait</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    calendar_today
                  </span>
                  <div>
                    <p className="font-bold text-on-surface">Completion</p>
                    <p className="text-sm">Q4 2023</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">
                  A multi-billion dollar project delivering one of the largest
                  refineries in the Middle East, setting new benchmarks for
                  environmental compliance and production efficiency.
                </p>
              </div>
              <Link
                href="/projects/al-zour-integrated-refinery"
                className="w-fit flex items-center gap-3 text-primary font-bold uppercase text-xs tracking-widest group"
              >
                Full Case Study{" "}
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Filter & Grid */}
      <section className="bg-surface py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="font-headline text-5xl font-black text-primary tracking-tighter">
                Project Portfolio
              </h2>
              <p className="text-on-surface-variant mt-4 max-w-md">
                Filter our extensive history of engineering triumphs by sector.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="px-6 py-2 bg-primary-container text-white font-bold text-xs uppercase tracking-widest rounded-lg"
              >
                All
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-surface-container text-on-surface-variant hover:bg-surface-container-highest font-bold text-xs uppercase tracking-widest rounded-lg transition-colors"
              >
                Roads
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-surface-container text-on-surface-variant hover:bg-surface-container-highest font-bold text-xs uppercase tracking-widest rounded-lg transition-colors"
              >
                Bridges
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-surface-container text-on-surface-variant hover:bg-surface-container-highest font-bold text-xs uppercase tracking-widest rounded-lg transition-colors"
              >
                Refineries
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative bg-white overflow-hidden monolith-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  alt="Suspension Bridge"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO45fmOlBu8r4Yv-0ZRy6zZNiZ5RGcTqj_0EvfE7M4kIj1FVGC7WhBYyDgMT8lwsWnjt1ILG6sVYpqwwCtgimp8lFfNmV-Xiy-J0dHQFECJOP7oP8zBAHkgx6WcUd3z1rbdsVeG4dszdAN-T58691qvDvjcf3_H6u8M0QGMcZP-XJD7ELnOuccgil6il-p4xzAVeu1LF6zarjGC7U_bRfpuUW5UE1Pl2CygRwskONt4A4AQ2hT5V8FaC3UTIPQ8DYTuzWjhFnN_tCy"
                  width={800}
                  height={1000}
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 glass-panel border-t border-white/20">
                <span className="text-[10px] font-bold text-primary-container tracking-widest uppercase mb-1 block">
                  Bridges
                </span>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  Silverstone Crossing
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>{" "}
                    Oslo, Norway
                  </span>
                  <Link
                    href="/projects/silverstone-crossing"
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-container hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="group relative bg-white overflow-hidden monolith-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  alt="Smart Highway"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNBpcdIUOTrPFucUt_WZPEaQkMHPYWQuJE7ONvIA5ONIQnFLBi4BazJu78PWMMDGy-ESF9EtAdjZk4hLrczrb8LYavsICaiOHpdnQ3Fwmhsp4c7jEy4rJmRAXT-_523D2tfcpw7W2Orz_lgN4MNH-63bhiZKNbtPKER0aK9SypcjLSvtaGm_fMzvcFCIfH3ms97ndsTso1G-gywqjjMEn9nwMMN36_Q5LuX7pUfBRKygLi4IaqDBGSNP3xH8Q6aByo55hY3hbMOL-g"
                  width={800}
                  height={1000}
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 glass-panel border-t border-white/20">
                <span className="text-[10px] font-bold text-primary-container tracking-widest uppercase mb-1 block">
                  Roads
                </span>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  Interstate-95 Smart Corridor
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>{" "}
                    New Jersey, USA
                  </span>
                  <Link
                    href="/projects/interstate-95-smart-corridor"
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-container hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="group relative bg-white overflow-hidden monolith-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  alt="Energy Plant"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBgTkBaGYHndu4p1eirgNjb5-5PsZ-CUKf9Eeu8ijtw7U-9aOw5RkUqsLElDQkOX30rU8KC2-nZXwr6GF2FexIr8N2-llSIP5HfJnGHeFhZNs3hsvAG99_x637_Cm9zTzyhdeiukvySINSjKwy4BhPSj1fudGR66MASGBLlC3zwRJNSd9khJ1s4CFiPRZp_Qc5NGngkMTA6a21_tVfXx1bYuqUNzimYxq5qp0AD79qDn_PS7h0qbt5B-gzFmvhsWu7N6E9GiXTqEy_"
                  width={800}
                  height={1000}
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 glass-panel border-t border-white/20">
                <span className="text-[10px] font-bold text-primary-container tracking-widest uppercase mb-1 block">
                  Refineries
                </span>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  Blue Sky Gas Plant
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>{" "}
                    Doha, Qatar
                  </span>
                  <Link
                    href="/projects/blue-sky-gas-plant"
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-container hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map View Section */}
      <section className="bg-surface-container-low py-24 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="font-headline text-5xl font-black text-primary tracking-tighter leading-tight mb-6">
                Global Impact. Local Presence.
              </h2>
              <p className="text-on-surface-variant text-lg mb-8">
                We operate across 4 continents, bringing specialized engineering
                expertise to the world's most challenging environments.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg monolith-shadow border-l-4 border-primary-container">
                  <span className="text-primary font-black text-2xl">42+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Active Global Projects
                  </span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg monolith-shadow border-l-4 border-primary-container">
                  <span className="text-primary font-black text-2xl">18</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Country Operations
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 relative h-[500px] bg-surface-container-highest rounded-2xl overflow-hidden monolith-shadow">
              <div className="absolute inset-0 opacity-40 grayscale">
                <Image
                  alt="Map background"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFLIxWqXh7aCX7Xe11XA_dbjDXRp5hFOdR9QVuHOTtu7EggrwDNNDB4pKTRn1h-dK5iLPHPl7O-d3cv2WHVucSR0loZId9EvvohdZWeCr0mQsSb7RIUUL-BwImjLgQdSM6Y0SdKJWISo_SORFnBt2ccN_stwh2mWn2vESv7eQ-ncho6_uYA0XP9AY7jqB-Ni3g2eD22IpILgBMV5H4RuccThyHVD5i2E0GvcL-0aAjBi53cbef-PilA7rVm5HrmVPPEQOBv-yH-JCO"
                  width={1280}
                  height={720}
                  unoptimized
                />
              </div>
              <div className="absolute top-1/4 left-1/4 group cursor-pointer">
                <div className="w-4 h-4 bg-primary-container rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-white"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block w-32 p-2 bg-white text-[10px] font-bold text-center monolith-shadow rounded">
                  NA Operations Center
                </div>
              </div>
              <div className="absolute bottom-1/3 left-1/2 group cursor-pointer">
                <div className="w-4 h-4 bg-primary-container rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-white"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block w-32 p-2 bg-white text-[10px] font-bold text-center monolith-shadow rounded">
                  MEA Headquarters
                </div>
              </div>
              <div className="absolute top-1/2 right-1/4 group cursor-pointer">
                <div className="w-4 h-4 bg-primary-container rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-white"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block w-32 p-2 bg-white text-[10px] font-bold text-center monolith-shadow rounded">
                  APAC Engineering Hub
                </div>
              </div>
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur px-6 py-4 rounded-lg monolith-shadow">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.2em]">
                  Operational Status
                </p>
                <p className="text-sm font-medium text-green-700 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                  100% Systems Online
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
