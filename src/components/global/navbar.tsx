import Link from "next/link";

import VeloLogo from "@/components/global/velo-logo";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" }
];

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="w-full max-w-[1728px] mx-auto">
        <ul className="flex items-center gap-10 py-3 px-16">
          <li>
            <VeloLogo />
          </li>

          {navLinks.map((link) => {
            return (
              <li key={link.label}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li className="ml-auto">
            <Link
              href="/login"
              className="
                border border-slate-400 
                text-sm font-semibold text-slate-800 
                min-h-10 py-1.5 px-6 rounded block
                transition-colors
                hover:bg-slate-200
              "
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };

// background-color: #d3d1cd
// color: #2b2b2b;
// font-weight: 600;
// padding: 6px 24px;
// min-height: 40px;
// border-radius: 4px;
