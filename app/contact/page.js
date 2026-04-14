import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | HINDLAND Infrastructure",
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Modern architectural skyscraper"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmW2RegH32IaHK6ZD70cgvrybUQIwilt9lGX1YcNzFCZ7h1-hB_maqZrfJO8hhg6gb1rn1ztM20y7oJPqlpOlcQdkaABYTRyDcmdPk0KudFlEq-6773w6lS85iTYGv159dmAsqjT45VHQ3EXASJohc-3oKQMh9rCKelZSacnE-_oaqTgdi2QiTgFnhf7uBThoXQONtytvUS95qJdpi4IFs3BmjrkRsdk2nbbW28mujoSBvaJBe8ETcXfhgnJV_kJ21wir7k2TtDhtQ"
            width={1920}
            height={1080}
            unoptimized
          />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary-container text-on-primary font-label text-[10px] tracking-[0.2em] uppercase mb-6">
              Contact Us
            </span>
            <h1 className="text-white font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              Let&apos;s Discuss Your Project Requirements
            </h1>
            <p className="text-surface-container-highest font-body text-xl md:text-2xl leading-relaxed max-w-2xl">
              Share your requirement for EPC execution, O&amp;M support,
              piping/structural work, CHP systems, or industrial trading
              supply. Our team will connect with you with the right technical
              approach.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-primary-container"></div>
      </section>
      {/* Contact Grid: Form & Info */}
      <section className="max-w-screen-2xl mx-auto px-8 -mt-20 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl overflow-hidden">
          <div className="lg:col-span-7 bg-white p-10 md:p-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary mb-10">
              Send a Message
            </h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-4 text-on-surface placeholder:text-stone-400 transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-4 text-on-surface placeholder:text-stone-400 transition-all"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-4 text-on-surface placeholder:text-stone-400 transition-all"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
                    Project Type
                  </label>
                  <select className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-4 text-on-surface transition-all">
                    <option>EPC / Fabrication &amp; Erection</option>
                    <option>O&amp;M Services</option>
                    <option>Solar EPC</option>
                    <option>B2B Material Supply</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
                  Your Message
                </label>
                <textarea
                  className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-4 text-on-surface placeholder:text-stone-400 transition-all"
                  placeholder="Describe your project requirements, location, timeline, and scope..."
                  rows={5}
                ></textarea>
              </div>
              <button
                className="w-full md:w-auto bg-primary-container text-on-primary px-12 py-5 rounded-lg font-headline font-bold uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-3"
                type="submit"
              >
                Submit Now{" "}
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </form>
          </div>
          <div className="lg:col-span-5 bg-primary-container p-10 md:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight mb-12">
                Get in Touch
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-on-primary-container text-3xl">
                    location_on
                  </span>
                  <div>
                    <h4 className="font-headline text-xs uppercase tracking-[0.2em] mb-2 text-on-primary-container font-bold">
                      Registered Office
                    </h4>
                    <p className="text-surface-container-lowest font-body leading-relaxed text-lg">
                      Level 10, Plot 18-20,
                      <br />
                      Hindustan Times House,
                      <br />
                      Kasturba Gandhi Marg,
                      <br />
                      Connaught Place, Delhi – 110001
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-on-primary-container text-3xl">
                    call
                  </span>
                  <div>
                    <h4 className="font-headline text-xs uppercase tracking-[0.2em] mb-2 text-on-primary-container font-bold">
                      Direct Line
                    </h4>
                    <p className="text-surface-container-lowest font-body text-xl font-medium">
                      +91 99530 07178
                    </p>
                    <p className="text-surface-container-lowest font-body opacity-60 text-sm">
                      Mon - Sat: 9am - 6pm IST
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-on-primary-container text-3xl">
                    mail
                  </span>
                  <div>
                    <h4 className="font-headline text-xs uppercase tracking-[0.2em] mb-2 text-on-primary-container font-bold">
                      Electronic Mail
                    </h4>
                    <p className="text-surface-container-lowest font-body text-xl font-medium">
                      <Link
                        href="mailto:info@hindland.in"
                        className="text-inherit hover:underline"
                      >
                        info@hindland.in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-10 border-t border-white/10">
              <p className="font-label text-xs uppercase tracking-widest opacity-60">
                For urgent project requirements, WhatsApp us with your
                scope.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
              <h3 className="font-headline text-4xl font-black tracking-tighter text-primary mb-6">
                Find Us
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Our office is located in the heart of New Delhi, near major
                industrial coordination centers.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-primary">
                  <p className="font-headline font-bold text-primary">
                    Delhi Office
                  </p>
                  <p className="text-sm text-stone-500">
                    Registered &amp; Corporate Office
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 h-[500px] bg-stone-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
              <div className="absolute inset-0 bg-stone-300 flex items-center justify-center">
                <Image
                  className="w-full h-full object-cover"
                  alt="Map of Manhattan"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvp4fruFfNixhvG5cQDgbdxPBRDbImbj14orfIq-htk55JpcyI50iIariMkvVhl5CJ0_A9BFlgha2F3K4yeFX4LyQXg6R-njtOW2ICEVRAnDUQLsKxwzGbo0MhZK0IsCSAwrUPRddV0UDAkX3yhf-EtAg7Y0TFT0b5cKBbXkkFEyjosRQn455oI-Pf_kWqjsiTs8WiMspVwSPXvJPE5JEY54BoReGqcmyGABMciD9niowk5D6YjyxeG1OgmjQXGjCMiX8iB8evPz9g"
                  width={1600}
                  height={900}
                  unoptimized
                />
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    location_on
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-screen-2xl mx-auto px-8 text-center">
          <h2 className="text-white font-headline text-4xl md:text-5xl font-black tracking-tight mb-8">
            Ready to Start Your Project?
          </h2>
          <button
            className="bg-surface text-primary px-16 py-6 rounded-lg font-headline font-bold uppercase tracking-widest text-lg hover:bg-on-primary-container transition-all hover:text-white"
            type="button"
          >
            Request a Quote
          </button>
        </div>
      </section>
    </main>
  );
}
