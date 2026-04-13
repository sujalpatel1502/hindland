import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
        <div>
          <Link
            href="/"
            className="text-xl font-bold text-primary mb-4 block font-headline uppercase tracking-tighter"
          >
            HINDLAND
          </Link>
          <p className="text-sm leading-relaxed text-stone-500 mb-6">
            Pioneering excellence in infrastructure development and heavy-duty
            industrial supply across the globe.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 bg-stone-200 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-stone-200 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-sm">
                alternate_email
              </span>
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
            Sustainability
          </h5>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="text-stone-500 hover:underline decoration-primary underline-offset-4"
              >
                Sustainability Reports
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-stone-500 hover:underline decoration-primary underline-offset-4"
              >
                Safety Protocols
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-stone-500 hover:underline decoration-primary underline-offset-4"
              >
                Green Initiatives
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline font-bold text-xs uppercase tracking-widest text-primary mb-6">
            Contact
          </h5>
          <p className="text-sm text-stone-500 leading-relaxed">
            102 Industrial Avenue,
            <br />
            Heavy Engineering District,
            <br />
            HQ - 400101
          </p>
          <p className="text-sm text-primary-container font-bold mt-4">
            +1 (800) HINDLAND
          </p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-stone-500">
          &copy; {new Date().getFullYear()} Hindland Infrastructure. All Rights
          Reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-xs text-stone-500 hover:text-primary-container">
            LinkedIn
          </a>
          <a href="#" className="text-xs text-stone-500 hover:text-primary-container">
            Twitter
          </a>
          <a href="#" className="text-xs text-stone-500 hover:text-primary-container">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
