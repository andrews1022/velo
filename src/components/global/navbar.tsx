import Link from "next/link";
import { Recursive } from "next/font/google";

const recursive = Recursive({ subsets: ["latin"], weight: ["800"] });

const links = [
  {
    label: "Features",
    url: "/features"
  },
  {
    label: "Pricing",
    url: "/pricing"
  },
  {
    label: "Login",
    url: "/login"
  },
  {
    label: "Privacy Policy",
    url: "/privacy-policy"
  },
  {
    label: "Terms of Service",
    url: "/terms-of-service"
  }
];

const Navbar = () => {
  return (
    <nav className="border-b-2 border-black py-2 px-4">
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/" className={`${recursive.className} text-4xl`}>
            Velo
          </Link>
        </li>

        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.url} className="text-blue-500 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
