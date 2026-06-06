import { images } from '../assets/images';

export function Label({ children, className = '' }) {
  return (
    <div className={`flex flex-col isolate items-center relative ${className}`}>
      <span className="font-host-grotesk font-bold leading-[24px] mb-[-8px] relative shrink-0 text-aerovue-primary text-[16px] text-center tracking-[1.28px] uppercase whitespace-nowrap z-[2]">
        {children}
      </span>
      <div className="bg-aerovue-light h-[9px] relative w-full z-[1]" />
    </div>
  );
}

export function Button({ children, className = '', variant = 'primary' }) {
  const theme = variant === 'primary'
    ? { bg: 'bg-aerovue-secondary', sideL: images.buttonSide, sideR: images.buttonSideReverse }
    : { bg: 'bg-aerovue-primary', sideL: images.buttonSideOrange, sideR: images.buttonSideOrangeReverse };

  return (
    <div className={`flex items-center justify-center overflow-clip relative ${className}`}>
      <div className="flex flex-row items-stretch h-full">
        <div className="h-full relative w-[12px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={theme.sideL} />
        </div>
      </div>
      <div className={`${theme.bg} flex items-center justify-center px-[38px] py-[16px]`}>
        <span className="font-host-grotesk font-medium leading-[26px] text-aerovue-light text-[18px] whitespace-nowrap">
          {children}
        </span>
      </div>
      <div className="flex flex-row items-stretch h-full">
        <div className="flex h-full items-center justify-center">
          <div className="h-full rotate-180">
            <div className="h-full relative w-[12px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={theme.sideR} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionHeader({ label, title, description, className = '' }) {
  return (
    <div className={`flex flex-col gap-[16px] items-center text-center ${className}`}>
      {label && (
        <div className="flex flex-col isolate items-center py-px">
          <Label>{label}</Label>
        </div>
      )}
      <div className="flex flex-col gap-[24px] items-center">
        <h2 className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-3 text-aerovue-secondary uppercase">
          {title}
        </h2>
        {description && (
          <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 max-w-[621px]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}