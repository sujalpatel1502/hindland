"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FadeInUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  CountUp,
  ScaleIn,
} from "../components/MotionWrappers";

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
            <FadeInUp>
              <span className="inline-block bg-primary-container text-white px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                About Us
              </span>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <h1 className="text-6xl md:text-8xl font-headline font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
                Engineering Infrastructure That Powers India&apos;s Growth
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="w-24 h-2 bg-white"></div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Our Story / Overview */}
      <section className="py-24 bg-surface px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <SlideInLeft className="lg:col-span-5">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight leading-tight mb-8">
              Multidisciplinary EPC & Industrial Expertise
            </h2>
          </SlideInLeft>
          <SlideInRight className="lg:col-span-7 space-y-6">
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              Hindland Infrastructure Pvt. Ltd. is a multidisciplinary
              engineering and infrastructure company specializing in CHP (Coal
              Handling Plant) Fabrication & Erection, CW & Utility Piping, and
              Solar EPC Projects.
            </p>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              We are committed to delivering world-class industrial and renewable
              energy solutions with a focus on quality, precision, and safety.
              From concept to commissioning, we ensure every project is executed
              on time, within budget, and to the highest standards of engineering
              excellence.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
              <div>
                <CountUp
                  end={1000}
                  suffix="+"
                  className="block text-4xl font-headline font-black text-primary"
                />
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                  Skilled Workforce
                </span>
              </div>
              <div>
                <CountUp
                  end={50}
                  suffix="+"
                  className="block text-4xl font-headline font-black text-primary"
                />
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                  Engineers & Leaders
                </span>
              </div>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-24 bg-surface-container-low px-8">
        <div className="max-w-screen-2xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/30 overflow-hidden rounded-lg monolith-shadow">
            <StaggerItem className="bg-surface p-12 flex flex-col items-start gap-6">
              <span className="material-symbols-outlined text-4xl text-primary-container">
                account_balance
              </span>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">
                Our Mission
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                To deliver high-quality and reliable project execution through
                innovation and teamwork. To strengthen India&apos;s
                infrastructure and energy growth by contributing to both thermal
                and renewable sectors.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-surface p-12 flex flex-col items-start gap-6">
              <span className="material-symbols-outlined text-4xl text-primary-container">
                visibility
              </span>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">
                Our Vision
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                To become a leading and trusted EPC company in India providing
                integrated solutions for power, infrastructure, and renewable
                energy projects, while promoting sustainable and safe engineering
                practices.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-surface p-12 flex flex-col items-start gap-6">
              <span className="material-symbols-outlined text-4xl text-primary-container">
                verified_user
              </span>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">
                Core Values
              </h3>
              <ul className="space-y-3 text-on-surface-variant font-medium">
                {["Quality", "Integrity", "Safety", "Innovation", "Teamwork"].map(
                  (v) => (
                    <li key={v} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>
                      {v}
                    </li>
                  )
                )}
              </ul>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-surface px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <FadeInUp className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
                Board of Directors
              </p>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight leading-tight">
                Visionary Leadership
              </h2>
            </div>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <StaggerItem className="group text-center">
              <div className="relative h-[400px] overflow-hidden mb-6 bg-surface-container-low flex items-center justify-center">
                <Image
                  className="w-full h-full object-cover"
                  alt="S. K. Singh"
                  src="https://storage.googleapis.com/art-docs/user_dummy.png"
                  width={600}
                  height={750}
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs leading-relaxed italic">
                    {`"It gives me immense pride to introduce Hindland Infrastructure — a company built on strong values of integrity, innovation, and engineering excellence."`}
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-headline font-bold uppercase text-on-surface">
                S. K. Singh
              </h4>
              <p className="text-xs uppercase tracking-widest text-primary-container font-bold mt-1">
                Co-Founder & Managing Director
              </p>
            </StaggerItem>
            <StaggerItem className="group text-center">
              <div className="relative h-[400px] overflow-hidden mb-6 bg-surface-container-low flex items-center justify-center">
                <Image
                  className="w-full h-full object-cover"
                  alt="Ashish Singh"
                  src="https://storage.googleapis.com/art-docs/user_dummy.png"
                  width={600}
                  height={750}
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs leading-relaxed italic">
                    {`"With over 12 years of hands-on experience in thermal power projects, I have learned that success lies in precision, teamwork, and commitment."`}
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-headline font-bold uppercase text-on-surface">
                Ashish Singh
              </h4>
              <p className="text-xs uppercase tracking-widest text-primary-container font-bold mt-1">
                Director – Projects, B.Tech (Mechanical Engineering)
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="py-24 bg-surface-container-high px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <SlideInLeft className="lg:w-1/2">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Quality Assurance
            </p>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight leading-tight mb-8">
              Uncompromising Standards
            </h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-8">
              {`Our operations are strictly aligned with international safety and quality benchmarks. We don't just build; we certify every stage of development through rigorous independent auditing.`}
            </p>
            <StaggerContainer className="grid grid-cols-2 gap-4">
              <StaggerItem className="bg-surface p-6 flex items-center gap-4 rounded monolith-shadow">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-primary text-xl">
                    high_quality
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface uppercase text-xs">
                    ISO 9001:2015
                  </p>
                  <p className="text-[10px] text-on-surface-variant">
                    Quality Management
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem className="bg-surface p-6 flex items-center gap-4 rounded monolith-shadow">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-primary text-xl">
                    health_and_safety
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface uppercase text-xs">
                    ISO 45001
                  </p>
                  <p className="text-[10px] text-on-surface-variant">
                    OH&S Standard
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </SlideInLeft>
          <ScaleIn className="lg:w-1/2">
            <div className="relative p-12 bg-white rounded-lg monolith-shadow border-l-8 border-primary-container">
              <span className="material-symbols-outlined text-primary/10 text-9xl absolute -top-4 -right-4">
                military_tech
              </span>
              <h3 className="text-3xl font-headline font-black text-primary mb-4">
                Zero Harm Initiative
              </h3>
              <p className="text-on-surface-variant italic mb-6">
                {`"Rigorous safety practices, trained manpower, and site discipline to reduce risk and ensure compliance on every Hindland site."`}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px bg-outline-variant flex-grow"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">
                  Safety & Quality Team
                </span>
              </div>
            </div>
          </ScaleIn>
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
        <FadeInUp className="relative z-10 max-w-screen-2xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter mb-8 max-w-4xl">
            Let&apos;s Build Reliable Infrastructure Together
          </h2>
          <p className="text-xl text-primary-fixed max-w-2xl font-light mb-12">
            Need EPC execution, O&M support, or industrial trading supply? Share
            your requirement and our team will connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/contact"
              className="bg-primary-container text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm shadow-2xl hover:bg-white hover:text-primary transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/projects"
              className="border border-white/30 text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm backdrop-blur-md hover:bg-white/10 transition-all"
            >
              Download Brochure
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
