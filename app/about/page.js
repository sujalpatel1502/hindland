import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | HINDLAND Infrastructure",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Infrastructure Project"
            className="w-full h-full object-cover grayscale"
            src="https://storage.googleapis.com/art-docs/Why_Choose_Us.png"
            width={1920}
            height={1080}
            unoptimized
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 px-8 max-w-screen-2xl mx-auto w-full">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary-container text-white px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Established 1992
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
              Who We Are
            </h1>
            <div className="w-24 h-2 bg-white"></div>
          </div>
        </div>
      </section>
      {/* Our Story / Overview */}
      <section className="py-24 bg-surface px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Our Heritage
            </p>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight leading-tight mb-8">
              Architecting the Foundations of Tomorrow
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              HINDLAND Infrastructure has been at the forefront of monumental civil
              engineering for over three decades. From complex urban transportation
              networks to large-scale renewable energy hubs, our footprint is etched
              into the very core of modern progress.
            </p>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              Our journey began with a single vision: to bridge the gap between
              engineering possibility and structural reality. Today, we stand as a
              beacon of reliability in the EPC sector, recognized for our ability to
              navigate the most challenging terrains and complex logistical hurdles
              with precision and poise.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
              <div>
                <span className="block text-4xl font-headline font-black text-primary">
                  350+
                </span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                  Projects Completed
                </span>
              </div>
              <div>
                <span className="block text-4xl font-headline font-black text-primary">
                  25+
                </span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                  Global Awards
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission, Vision & Values */}
      <section className="py-24 bg-surface-container-low px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/30 overflow-hidden rounded-lg monolith-shadow">
            <div className="bg-surface p-12 flex flex-col items-start gap-6">
              <span className="material-symbols-outlined text-4xl text-primary-container">
                account_balance
              </span>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">
                Our Mission
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                To deliver sustainable, high-impact infrastructure solutions that
                enhance human connectivity and drive economic resilience.
              </p>
            </div>
            <div className="bg-surface p-12 flex flex-col items-start gap-6">
              <span className="material-symbols-outlined text-4xl text-primary-container">
                visibility
              </span>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">
                Our Vision
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                To be the global benchmark for excellence in engineering procurement
                and construction, setting the standard for technical innovation.
              </p>
            </div>
            <div className="bg-surface p-12 flex flex-col items-start gap-6">
              <span className="material-symbols-outlined text-4xl text-primary-container">
                verified_user
              </span>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">
                Core Values
              </h3>
              <ul className="space-y-3 text-on-surface-variant font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-container"></span>
                  Integrity in Execution
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-container"></span>
                  Safety as a Mandate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-container"></span>
                  Technical Superiority
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Leadership Team */}
      <section className="py-24 bg-surface px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
                Board of Directors
              </p>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight leading-tight">
                Visionary Leadership
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="relative h-[400px] overflow-hidden mb-6">
                <Image
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt="Rajiv Malhotra"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaaA9BaxdegMSVO6c6mpemtBzBRlmIKMyL-Ne8A1uLt4x6t2HwbKjiPwIZlPLwNSmLf0yprmcAACsjZju0BTqTp7Gcyfp_GT7HYaIdmorxGFXV4Nj-wm44hEYLy2G-8vAnRFUcln1Swcdkm_cJ0ToNbzbrFfLlF4dTmBjS8MOsShFKJS5lsb4HBN8Nx_EjUsGsEqAXnNV5uSXLjOJB4aI2kvZPMxzhtituKZrzSHpKzLTn0wdd0KbYO1RMDZIc1yl8YHSaEg_tEClg"
                  width={600}
                  height={750}
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs leading-relaxed italic">
                    {`"Infrastructure is the silent rhythm of a thriving society."`}
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-headline font-bold uppercase text-on-surface">
                Rajiv Malhotra
              </h4>
              <p className="text-xs uppercase tracking-widest text-primary-container font-bold mt-1">
                Chief Executive Officer
              </p>
            </div>
            <div className="group">
              <div className="relative h-[400px] overflow-hidden mb-6">
                <Image
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt="Elena Rodriguez"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA81UbBgb66wy_TUiMJ-QljkY1TkiSYDlsv42H4AIq1VtXc-mC3r_rBqrJ-jfQXYXgmtUrRxOfyUMJh1EQ-N-SfLf_S4rQd-Avtck6nv5oYDCQFcDoMgwavAOz-bBUHOoCEf4GvsTwli2vufvJzgBRO0OWr8unWfSVaMV-0jX8YOjaJmnMXy8xJ4HQ4PAt8CsPHjzIbdZGJZj53-KOap5JCPEeGmFLP8pIJM4deq902CFEo40-z3pHyq6aslTf2jbPsLSa9xx3n8wFS"
                  width={600}
                  height={750}
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs leading-relaxed italic">
                    {`"Engineering excellence is non-negotiable."`}
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-headline font-bold uppercase text-on-surface">
                Elena Rodriguez
              </h4>
              <p className="text-xs uppercase tracking-widest text-primary-container font-bold mt-1">
                Chief Technical Officer
              </p>
            </div>
            <div className="group">
              <div className="relative h-[400px] overflow-hidden mb-6">
                <Image
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt="Arthur Vance"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1kOXPr0GY4EEUk889H0eevCMGi6TWyuYZyyqasInYgK5JpRuj79zmhuwCUBDgNqpIg8zxhMNqWuTRWA3327lvBU8OVEIxYPzE9_Lo3O1TJTnIhbkpqsO0bAb-mXxXtAbeyYcl4SUPF60du6EqE8bpoJN1VBzvhESCMksbQR2OLGI4y-9wSqQbT4HxGD4oaXigwowjbswNV2gFg7Lz0VTipQMpQelVKW_1C1nD6uDTLyjkS3iGYW-8y7tj0494zxnrOWnuGIHK_nx2"
                  width={600}
                  height={750}
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs leading-relaxed italic">
                    {`"Global reach, local accountability."`}
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-headline font-bold uppercase text-on-surface">
                Arthur Vance
              </h4>
              <p className="text-xs uppercase tracking-widest text-primary-container font-bold mt-1">
                Director of Operations
              </p>
            </div>
            <div className="group">
              <div className="relative h-[400px] overflow-hidden mb-6">
                <Image
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt="Sarah Chen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR8YUDOuYv-R9VeBekcd9jRgCBxdKzCtHwlCwNwK0Hhjkg480oY6Ui4C6m-P5C0JchsnwS0HMdLgZ0I26PEdiQu2eQOtZhGaPr035cggliMJV-7pCdSkUhriGEGINp9FD7Z2qIhD7DxuGvP_r-xm6vH3QvoVW_24JGRk2HJr-bs2PpQSETLMCaObS96e_f3IYfIjV9Q1P9xlBGfTqx8dj0v5ZB04MHxfE0VYjQhHD3ko7mfaWPHQLJzQBSVMBVqX9uqaZ4EmdwODvF"
                  width={600}
                  height={750}
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs leading-relaxed italic">
                    {`"Fiscal integrity drives project longevity."`}
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-headline font-bold uppercase text-on-surface">
                Sarah Chen
              </h4>
              <p className="text-xs uppercase tracking-widest text-primary-container font-bold mt-1">
                Chief Financial Officer
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications & Quality */}
      <section className="py-24 bg-surface-container-high px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Quality Assurance
            </p>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight leading-tight mb-8">
              Uncompromising Standards
            </h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-8">
              {`Our operations are strictly aligned with international safety and quality benchmarks. We don't just build; we certify every stage of development through rigorous independent auditing.`}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface p-6 flex items-center gap-4 rounded monolith-shadow">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-primary text-xl">
                    high_quality
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface uppercase text-xs">
                    ISO 9001:2015
                  </p>
                  <p className="text-[10px] text-on-surface-variant">Quality Management</p>
                </div>
              </div>
              <div className="bg-surface p-6 flex items-center gap-4 rounded monolith-shadow">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-primary text-xl">
                    health_and_safety
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface uppercase text-xs">ISO 45001</p>
                  <p className="text-[10px] text-on-surface-variant">OH&S Standard</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative p-12 bg-white rounded-lg monolith-shadow border-l-8 border-primary-container">
              <span className="material-symbols-outlined text-primary/10 text-9xl absolute -top-4 -right-4">
                military_tech
              </span>
              <h3 className="text-3xl font-headline font-black text-primary mb-4">
                Zero Harm Initiative
              </h3>
              <p className="text-on-surface-variant italic mb-6">
                {`"Our commitment to safety transcends corporate policy. It is a fundamental human promise to every worker on every Hindland site."`}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px bg-outline-variant flex-grow"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">
                  Safety Council
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 bg-primary text-white px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            alt="Engineering background"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNxNWQXNJl9ViDRBwtERCtSGs79xIx-ix5bFzH5a25DS8_2B5assxQmpBYp2y2LVSgj1xi61CwR9GGH37jyCsEwoYa84dXHznJ_Mq-7yhM0QAxLpqwkgx-bUl3bUFAOi6cHwhFIdirLlnyQEMeX5zWKOsgIoE4rpdCg_wIdnEGW5YIHktuX0o3r6_9za24KMh3bH07T6zzEjRKC3Ym7mElizgjfpFeDX79iQ4cRp3fzEjaU8eShnTfRoi7DffOw5doOfxj1jiVJBsY"
            width={1920}
            height={1080}
            unoptimized
          />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter mb-8 max-w-4xl">
            Ready to Build the Future Together?
          </h2>
          <p className="text-xl text-primary-fixed max-w-2xl font-light mb-12">
            Partner with a team that values precision, safety, and architectural
            integrity above all else.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/contact"
              className="bg-primary-container text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm shadow-2xl hover:bg-white hover:text-primary transition-all"
            >
              Consult Our Experts
            </Link>
            <Link
              href="/projects"
              className="border border-white/30 text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm backdrop-blur-md hover:bg-white/10 transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
