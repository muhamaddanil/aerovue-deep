import { images } from '../assets/images';

export default function NewsletterSection() {
  return (
    <section className="w-full">
      <div className="w-full px-4 md:px-[60px] pb-[48px] pt-0">
        <div className="bg-aerovue-grey-border border border-aerovue-grey-100 p-6 w-full">
          <div className="bg-aerovue-grey-white flex flex-col items-center gap-12 md:gap-[60px] p-8 md:p-10 w-full">
            {/* Logo & Title */}
            <div className="flex flex-col items-center gap-6 w-full">
              <div className="h-[64px] w-[248.5px] mx-auto">
                <img alt="AEROVUE" className="block w-full h-full object-contain" src={images.logoAlt} />
              </div>
              <h2 className="font-host-grotesk font-semibold leading-none text-[28px] md:text-[48px] lg:text-heading-3 text-aerovue-secondary text-center tracking-[-1.12px] uppercase">
                Stay Sharp. Stay Updated.
              </h2>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-8 w-full max-w-[1080px] mx-auto">
              <p className="font-host-grotesk font-semibold leading-[1.3] text-center text-[20px] md:text-[28px] lg:text-[32px] tracking-[-0.64px] text-aerovue-grey-700 w-full">
                Get the latest drops, performance tips, athlete stories, and exclusive AEROVUE deals. Be the first to know&mdash;because winners move fast.
              </p>

              {/* Email Input */}
              <div className="w-full max-w-[556px]">
                <div className="border border-aerovue-grey-100 flex items-center justify-between overflow-hidden w-full pl-4 pr-2 py-2 bg-white">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="font-host-grotesk font-normal leading-[26px] text-aerovue-grey-900 text-[16px] md:text-[18px] bg-transparent outline-none border-none flex-1 min-w-0 placeholder:text-aerovue-grey-500 placeholder:opacity-60"
                  />
                  <button
                    className="bg-aerovue-dark flex items-center justify-center size-[44px] shrink-0 hover:bg-aerovue-primary transition-colors duration-300"
                    aria-label="Subscribe"
                  >
                    <span className="font-inter font-semibold leading-[24px] not-italic text-aerovue-light text-[16px] tracking-[0.16px]">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>

              <p className="font-host-grotesk font-medium leading-[24px] opacity-70 text-aerovue-secondary text-[14px] md:text-[16px] text-center">
                &ldquo;Fuel your performance with every update.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}