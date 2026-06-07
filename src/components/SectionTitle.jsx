import { images } from '../assets/images';

export function Label({ children, className = '' }) {
  return (
    <div className={`inline-flex flex-col items-center relative ${className}`}>
      <span className="font-host-grotesk font-bold leading-[24px] mb-[-8px] relative text-aerovue-primary text-sm md:text-base text-center tracking-[1.28px] uppercase whitespace-nowrap z-[2]">
        {children}
      </span>
      <div className="bg-aerovue-light h-[9px] w-full z-[1]" />
    </div>
  );
}

export function Button({ children, className = '', variant = 'primary', as: Component = 'button' }) {
  const theme = variant === 'primary'
    ? { bg: 'bg-aerovue-secondary', hover: 'hover:bg-aerovue-secondary/90' }
    : { bg: 'bg-aerovue-primary', hover: 'hover:bg-aerovue-primary/90' };

  return (
    <Component
      className={`inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 ${theme.bg} ${theme.hover} text-aerovue-light text-sm md:text-base leading-relaxed font-medium transition-all duration-300 cursor-pointer select-none whitespace-nowrap ${className}`}
    >
      {children}
    </Component>
  );
}

export function SectionHeader({ label, title, description, className = '' }) {
  return (
    <div className={`flex flex-col gap-4 md:gap-6 items-center text-center max-w-[1112px] mx-auto ${className}`}>
      {label && <Label>{label}</Label>}
      <div className="flex flex-col gap-4 md:gap-6 items-center px-4">
        {typeof title === 'string' ? (
          <h2 className="font-host-grotesk font-semibold leading-tight text-[28px] md:text-[40px] lg:text-[52px] text-aerovue-secondary uppercase">
            {title}
          </h2>
        ) : title}
        {description && (
          <p className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base lg:text-lg text-aerovue-grey-700 max-w-[621px]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}