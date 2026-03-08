import Link from "next/link";

const footerLinks = {
  Products: [
    { href: "/supplements", label: "All Supplements" },
    { href: "/supplements/daily-foundation", label: "Daily Foundation" },
    { href: "/supplements/longevity-formula", label: "Longevity Formula" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/science", label: "Our Science" },
    { href: "/assessment", label: "Take Assessment" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-serif text-xl font-semibold text-neutral-900">
              InYoung <span className="text-brand-600">Labs</span>
            </span>
            <p className="mt-3 text-sm text-neutral-500 max-w-xs leading-relaxed">
              Physician-designed supplements informed by science for health through your 30s, 40s, and beyond.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} InYoung Labs. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            These statements have not been evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
