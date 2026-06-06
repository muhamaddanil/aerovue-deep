import { images } from '../assets/images';

export default function Footer() {
  return (
    <footer className="h-[1033px] overflow-clip relative w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute max-w-none object-cover size-full"
          src={images.footerBg}
        />
        <div className="absolute bg-[rgba(0,13,47,0.55)] inset-0" />
      </div>

      <div className="absolute h-[211.5px] left-[-62px] top-[858px] w-[1597px] opacity-50">
        <div className="absolute inset-[-1.89%_-0.25%]">
          <img alt="" className="block max-w-none size-full" src={images.seeFurther} />
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-[60px] items-start px-4 md:px-[60px] top-[60px] w-full max-w-[1512px]">
        <div className="flex flex-col gap-[100px] items-start relative w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 w-full">
            <div className="flex flex-col gap-6 text-[#fcfcef] max-w-[611px]">
              <h2 className="font-host-grotesk font-medium leading-none text-[40px] md:text-[64px] tracking-[-1.28px] uppercase">
                See Further. Move Smarter. Perform Better.
              </h2>
              <p className="font-host-grotesk font-normal leading-[26px] text-[18px] tracking-[-0.36px]">
                With ultra-light materials, durable frames, and lenses engineered for visibility and protection, AEROVUE does more than shield your eyes— it empowers your performance.
              </p>
            </div>

            <div className="flex flex-col gap-[60px] items-end max-w-[468px]">
              <p className="font-neue-montreal leading-none not-italic text-[#f5ebe1] text-right tracking-[-19.2px]">
                <span className="text-[64px] md:text-[96px]">AERO</span>
                <span className="text-aerovue-primary text-[64px] md:text-[96px]">VU</span>
                <span className="text-[64px] md:text-[96px]">E</span>
              </p>

              <div className="flex flex-wrap font-host-grotesk font-medium gap-[10px_73px] items-start justify-end leading-[24px] text-[#f5ebe1] text-[16px] text-right w-full">
                <a href="/shop" className="w-[141px] hover:text-aerovue-primary transition-colors">Shop All</a>
                <a href="/about" className="w-[141px] hover:text-aerovue-primary transition-colors">Colaborate</a>
                <a href="/about" className="w-[141px] hover:text-aerovue-primary transition-colors">About Us</a>
                <a href="/category" className="w-[141px] hover:text-aerovue-primary transition-colors">Motion</a>
                <a href="/about" className="w-[141px] hover:text-aerovue-primary transition-colors">Testimonial</a>
              </div>

              <div className="backdrop-blur-[4.45px] bg-[rgba(249,249,249,0.14)] flex gap-[10px] items-center justify-center px-6 py-3 cursor-pointer hover:bg-[rgba(249,249,249,0.25)] transition-all">
                <span className="font-host-grotesk font-semibold leading-[32px] text-[#fcfcef] text-[20px] md:text-[24px] tracking-[-0.48px] whitespace-nowrap">
                  Join the AEROVUE Community
                </span>
                <div className="relative size-[35px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={images.iconArrow} />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px relative w-full bg-[#fcfcef]/20" />
        </div>

        <div className="flex flex-wrap gap-x-[64px] gap-y-4 items-center">
          <div className="flex flex-col gap-1 w-[414px] max-w-full">
            <p className="font-host-grotesk font-normal leading-[26px] text-[#fcfcef] text-[18px] tracking-[-0.36px]">
              2247 Station Street, Oakland, CA, California 94612
            </p>
            <p className="font-host-grotesk font-bold leading-[24px] text-aerovue-primary text-[16px] tracking-[1.28px] uppercase">
              ADDRESS
            </p>
          </div>
          <div className="flex flex-col gap-1 w-[136px]">
            <p className="font-host-grotesk font-normal leading-[26px] text-[#fcfcef] text-[18px] tracking-[-0.36px]">
              +62891034648
            </p>
            <p className="font-host-grotesk font-bold leading-[24px] text-aerovue-primary text-[16px] tracking-[1.28px] uppercase">
              PHONE
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-host-grotesk font-normal leading-[26px] text-[#fcfcef] text-[18px] tracking-[-0.36px]">
              support@aerovue.com
            </p>
            <p className="font-host-grotesk font-bold leading-[24px] text-aerovue-primary text-[16px] tracking-[1.28px] uppercase">
              EMAIL
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row font-host-grotesk font-medium items-center justify-between gap-4 text-[#fcfcef] w-full">
          <p className="text-[16px] leading-[24px]">
            Aerovue &copy;2026 All rights reserved.
          </p>
          <div className="flex gap-6 items-center text-[16px] leading-[24px]">
            <a href="/terms" className="hover:text-aerovue-primary transition-colors">Privacy Policy</a>
            <a href="/about" className="hover:text-aerovue-primary transition-colors">Testimonial</a>
          </div>
        </div>
      </div>

      <div className="absolute backdrop-blur-[12px] bg-[rgba(19,19,19,0.14)] h-[123px] left-0 top-[910px] w-full" />
    </footer>
  );
}