import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          AkalloverServices
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <Link href="/contact" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">
          Get in touch
        </Link>
      </div>
    </nav>
  );
}
