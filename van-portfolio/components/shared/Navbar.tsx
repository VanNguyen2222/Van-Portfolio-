import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold italic tracking-tighter">
          DEV.PORTFOLIO
        </Link>
        
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.key} 
              href={link.href}
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <button className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-full text-sm font-semibold">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;