import Link from "next/link";
import { Recursive } from "next/font/google";

const recursive = Recursive({ subsets: ["latin"], weight: ["800"] });

const VeloLogo = () => {
  return (
    <Link href="/" className={`${recursive.className} text-turquoise text-4xl uppercase`}>
      Velo
    </Link>
  );
};

export default VeloLogo;
