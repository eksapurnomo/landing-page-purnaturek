import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Quality & Documentation', href: '#quality' },
  { label: 'Wholesale Partnership', href: '#partnership' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isLightHeader = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightHeader
          ? 'bg-[#F7F4EC]/95 backdrop-blur-md border-b border-botanical-800/15 py-3 shadow-sm'
          : 'bg-gradient-to-b from-[#0C1A13]/85 via-[#0C1A13]/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Official PurNatureK Bulk Logo */}
        <a
          href="#home"
          className={`group inline-flex items-center focus:outline-none transition-all duration-200 ${
            isLightHeader
              ? 'py-0.5'
              : 'bg-[#F7F4EC]/95 hover:bg-[#FCFBF8] px-3.5 py-1.5 rounded-sm shadow-sm border border-[#1B3B2B]/15'
          }`}
          aria-label="PurNatureK Bulk — Purnature Khatulistiwa LLC Home"
        >
          <img
            src="/images/logo-purnaturek-transparent.png"
            alt="PurNatureK Bulk Official Logo"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain select-none"
          />
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs font-medium tracking-[0.1em] uppercase transition-colors ${
                isLightHeader
                  ? 'text-botanical-800 hover:text-botanical-950'
                  : 'text-cream-100/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA: Wholesale Member Portal */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://members.purnaturekbulk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase rounded-sm border transition-all duration-200 ${
              isLightHeader
                ? 'bg-botanical-800 hover:bg-botanical-900 text-cream-50 border-botanical-800'
                : 'bg-cream-100 hover:bg-white text-botanical-900 border-cream-100'
            }`}
          >
            <span>Wholesale Member Portal</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={`lg:hidden p-2 rounded-sm border transition-colors ${
            isLightHeader
              ? 'border-botanical-800/20 text-botanical-900 hover:bg-botanical-800/10'
              : 'border-cream-100/30 text-cream-50 hover:bg-cream-100/10'
          }`}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F4EC] border-t border-botanical-800/15 px-4 pt-4 pb-6 shadow-editorial">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 text-xs font-semibold tracking-[0.14em] uppercase text-botanical-900 hover:bg-botanical-800/8 rounded-sm"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-botanical-800/15">
              <a
                href="https://members.purnaturekbulk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-botanical-800 hover:bg-botanical-900 text-cream-50 text-xs font-semibold tracking-[0.14em] uppercase rounded-sm"
              >
                <span>Wholesale Member Portal</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
