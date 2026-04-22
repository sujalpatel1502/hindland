import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
        <div>
          <Link
            href="/"
            className="inline-flex items-center mb-4"
            aria-label="Hindland Infrastructure Home"
          >
            <Image
              src="/assets/Hindland_Logo_Transparent.png"
              alt="Hindland Infrastructure"
              width={220}
              height={66}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed text-stone-500 mb-6">
            Hindland Infrastructure Pvt. Ltd. is a trusted engineering and EPC
            company delivering excellence in CHP/AHP systems, piping,
            structural works, and O&amp;M support across India.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/hindlandinfra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hindland Infrastructure on Facebook"
              className="w-9 h-9 bg-stone-200 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M13.5 8.5V6.8c0-.6.4-1 1-1h1.5V3h-2.6C10.9 3 9.5 4.5 9.5 7v1.5H7V12h2.5v9h4v-9H16l.5-3.5h-3z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/hindland-infrastructure/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hindland Infrastructure on LinkedIn"
              className="w-9 h-9 bg-stone-200 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M6.9 8.7H3.6V20h3.3zM5.3 3.4a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.4 12.8c0-3.1-1.7-4.5-4-4.5-1.8 0-2.6 1-3 1.7V8.7h-3.2V20h3.3v-5.6c0-1.5.3-2.9 2.1-2.9s1.8 1.7 1.8 3V20H21v-7.2z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/hindland_infrastructure"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hindland Infrastructure on Instagram"
              className="w-9 h-9 bg-stone-200 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M7.5 3h9A4.5 4.5 0 0121 7.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3zm0 1.8a2.7 2.7 0 00-2.7 2.7v9a2.7 2.7 0 002.7 2.7h9a2.7 2.7 0 002.7-2.7v-9a2.7 2.7 0 00-2.7-2.7h-9zm9.5 1.4a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2zM12 8a4 4 0 110 8 4 4 0 010-8zm0 1.8a2.2 2.2 0 100 4.4 2.2 2.2 0 000-4.4z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-headline font-bold text-xs uppercase tracking-widest text-primary mb-6">
            Quick Links
          </h5>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                href="/about"
                className="text-stone-500 hover:underline decoration-primary underline-offset-4"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-stone-500 hover:underline decoration-primary underline-offset-4"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-stone-500 hover:underline decoration-primary underline-offset-4"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-stone-500 hover:underline decoration-primary underline-offset-4"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline font-bold text-xs uppercase tracking-widest text-primary mb-6">
            Our Services
          </h5>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                href="/services"
                className="text-stone-500 hover:underline decoration-primary underline-offset-4"
              >
                EPC &amp; Fabrication
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-stone-500 hover:underline decoration-primary underline-offset-4"
              >
                O&amp;M Services
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-stone-500 hover:underline decoration-primary underline-offset-4"
              >
                Solar EPC
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline font-bold text-xs uppercase tracking-widest text-primary mb-6">
            Contact
          </h5>
          <p className="text-sm text-stone-500 leading-relaxed">
            Level 10, Plot 18-20,
            <br />
            Hindustan Times House,
            <br />
            Connaught Place, Delhi – 110001
          </p>
          <p className="text-sm text-primary-container font-bold mt-4">
            +91 99530 07178
          </p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-stone-500">
          &copy; {new Date().getFullYear()} Hindland Infrastructure Pvt. Ltd.
          All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/company/hindland-infrastructure/" target="_blank" rel="noopener noreferrer" className="text-xs text-stone-500 hover:text-primary-container">
            LinkedIn
          </a>
          <a href="https://www.facebook.com/hindlandinfra/" target="_blank" rel="noopener noreferrer" className="text-xs text-stone-500 hover:text-primary-container">
            Facebook
          </a>
          <a href="https://www.instagram.com/hindland_infrastructure" target="_blank" rel="noopener noreferrer" className="text-xs text-stone-500 hover:text-primary-container">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
