import { images } from '../assets/images';

export default function NewsletterSection() {
  return (
    <div className="w-full px-4 md:px-[60px] pt-12 pb-12 md:pb-20">
      <div className="bg-aerovue-grey-border border border-aerovue-grey-100 p-3 md:p-6 w-full">
        <div className="bg-white flex flex-col items-center gap-8 md:gap-14 p-8 md:p-12 w-full">
          {/* Logo */}
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="h-12 md:h-14 w-auto">
              <img alt="AEROVUE" className="block h-full w-auto mx-auto" src={images.logoAlt} />
            </div>
            <h2 className="font-host-grotesk font-semibold leading-none text-[28px] md:text-[44px] lg:text-[52px] text-aerovue-secondary text-center tracking-[-1.12px] uppercase">
              Stay Sharp. Stay Updated.
            </h2>
          </div>

          {/* Form */}
          <div className="flex flex-col items-center gap-6 w-full max-w-[660px] mx-auto">
            <p className="font-host-grotesk font-semibold leading-[1.3] text-center text-lg md:text-xl lg:text-2xl text-aerovue-grey-700 w-full">
              Get the latest drops, performance tips, athlete stories, and exclusive AEROVUE deals. Be the first to know&mdash;because winners move fast.
            </p>

            <div className="w-full max-w-[520px]">
              <div className="border border-aerovue-grey-100 flex items-center w-full bg-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="font-host-grotesk text-base md:text-lg leading-relaxed text-aerovue-grey-900 bg-transparent outline-none border-none flex-1 min-w-0 px-4 py-3 placeholder:text-aerovue-grey-500 placeholder:opacity-60"
                />
                <button
                  className="bg-aerovue-dark flex items-center justify-center w-11 h-11 shrink-0 mr-1 hover:bg-aerovue-primary transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <span className="font-inter font-semibold leading-none not-italic text-white text-base">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>

            <p className="font-host-grotesk font-medium leading-relaxed text-aerovue-secondary text-sm md:text-base text-center opacity-70">
              &ldquo;Fuel your performance with every update.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}