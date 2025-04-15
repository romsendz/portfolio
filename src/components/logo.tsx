import Link from "next/link";

const Logo = () => {
  return (
    <Link
      className="text-lg lg:text-4xl p-2 lg:p-4 font-audiowide hover:text-blue-300 transition-colors whitespace-nowrap"
      href="/"
    >
      R | S
    </Link>
  );
};

export default Logo;
