import { images } from '../assets/images';

export default function NewsletterSection() {
  return (
    <div className="h-[604px] relative w-full">
      <div className="absolute inset-0 flex flex-col items-start pb-[48px] px-4 md:px-[60px]">
        <div className="bg-aerovue-grey-border border border-aerovue-grey-100 border-solid flex flex-col items-start p-6 w-full">
          <div className="bg-aerovue-grey-white flex flex-col gap-[60px] items-center p-10 w-full">
            <div className="flex flex-col gap-6 items-center w-full">
              <div className="h-[64px] w-[248.5px]">
                <img alt="AEROVUE" className="block size-full" src={images.logoAlt} />
              </div>
              <h2 className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-3 text-aerovue-secondary text-center tracking-[-1.12px] uppercase">
                Stay Sharp. Stay Updated.
              </h2>
            </div>
            <div className="flex flex-col gap-8 items-center justify-center">
              <p className="font-host-grotesk font-semibold leading-[1.2] text-[20px] md:text-[32px] tracking-[-0.64px] text-aerovue-grey-700 text-center max-w-[1080px]">
                Get the latest drops, performance tips, athlete stories, and exclusive AEROVUE deals. Be the first to know&mdash;because winners move fast.
              </p>
              <div className="border border-aerovue-grey-100 border-solid flex items-center justify-between overflow-clip pl-4 pr-2 py-2 w-full max-w-[556px]">
                <span className="font-host-grotesk font-normal leading-[26px] opacity-60 text-aerovue-grey-700 text-[18px] tracking-[-0.36px]">
                  Enter your email
                </span>
                <button className="bg-aerovue-dark flex items-center justify-center overflow-clip px-6 py-4 size-[44px]" aria-label="Subscribe">
                  <span className="font-inter font-semibold leading-[24px] not-italic text-aerovue-light text-[16px] tracking-[0.16px]">
                    &rarr;
                  </span>
                </button>
              </div>
              <p className="font-host-grotesk font-medium leading-[24px] opacity-70 text-aerovue-secondary text-[16px] text-center max-w-[530px]">
                &ldquo;Fuel your performance with every update.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}