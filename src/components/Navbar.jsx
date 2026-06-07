import { useState } from 'react';
import { images } from '../assets/images';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Behind The Brand', path: '/about' },
  { label: 'Category', path: '/category' },
  { label: 'Shop All', path: '/shop' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="border-b border-aerovue-grey-300 flex items-center justify-between px-4 md:px-[60px] py-3 w-full bg-white relative z-50">
      <Link to="/" className="h-[28px] md:h-[32px] w-[120px] md:w-[151px] shrink-0">
        <img alt="AEROVUE" className="block w-full h-full object-contain" src={images.logo} />
      </Link>

      {/* Desktop menu */}
      <div className="hidden lg:flex items-center">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center justify-center px-5 xl:px-8 py-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-[18px] h-[18px] shrink-0">
                <img alt="" className="block w-full h-full" src={images.iconDot} />
              </div>
              <span className="font-host-grotesk font-medium leading-[26px] text-sm xl:text-[18px] whitespace-nowrap text-aerovue-grey-900">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/cart" className="relative w-[28px] h-[28px] md:w-[33px] md:h-[32px] shrink-0 flex items-center justify-center">
          <img alt="Cart" className="block w-full h-full object-contain" src={images.iconCart} />
          <div className="absolute top-0 right-0 flex items-center justify-center w-[14px] h-[14px] md:w-[15px] md:h-[15px] rounded-full bg-aerovue-primary">
            <span className="font-host-grotesk font-medium leading-none text-[9px] md:text-[10px] text-white">3</span>
          </div>
        </Link>
        <button className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] shrink-0 flex items-center justify-center" aria-label="Search">
          <img alt="" className="block w-full h-full object-contain" src={images.iconSearch} />
        </button>
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-aerovue-grey-900 transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-[2px] bg-aerovue-grey-900 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-aerovue-grey-900 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-aerovue-grey-300 shadow-lg lg:hidden">
          <div className="flex flex-col py-4 px-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-3 py-3 px-2 hover:bg-aerovue-grey-border rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <div className="w-[18px] h-[18px] shrink-0">
                  <img alt="" className="block w-full h-full" src={images.iconDot} />
                </div>
                <span className="font-host-grotesk font-medium text-[18px] text-aerovue-grey-900">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}