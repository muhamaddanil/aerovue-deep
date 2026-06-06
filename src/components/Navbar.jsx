import { images } from '../assets/images';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Behind The Brand', path: '/about', active: false },
  { label: 'Category', path: '/category', active: false },
  { label: 'Shop All', path: '/shop', active: false },
];

export default function Navbar() {
  return (
    <nav className="border-b border-aerovue-grey-300 border-solid flex items-center justify-between px-4 md:px-[60px] py-3 w-full bg-white">
      <Link to="/" className="h-[32px] w-[151px] relative shrink-0">
        <img
          alt="AEROVUE"
          className="absolute block inset-0 max-w-none size-full"
          src={images.logo}
        />
      </Link>

      <div className="hidden lg:flex items-center">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center justify-center px-[32px] py-[14px]"
          >
            <div className="flex items-center gap-2">
              <div className="size-[18px] relative shrink-0">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={images.iconDot}
                />
              </div>
              <span className="font-host-grotesk font-medium leading-[26px] text-[18px] whitespace-nowrap text-aerovue-grey-900">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex gap-8 items-center justify-end py-3">
        <Link to="/cart" className="h-[32px] w-[33px] relative">
          <div className="absolute inset-[-2.41%_-3.25%]">
            <img
              alt="Cart"
              className="block max-w-none size-full"
              src={images.iconCart}
            />
          </div>
          <div className="absolute flex flex-col h-[14.6px] items-center justify-center left-[9px] rounded-full top-[13px] w-[14px] bg-aerovue-primary">
            <span className="font-host-grotesk font-medium leading-[14.6px] text-[10px] text-center text-white w-full">
              3
            </span>
          </div>
        </Link>
        <button className="relative size-[32px]" aria-label="Search">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={images.iconSearch}
          />
        </button>
      </div>
    </nav>
  );
}