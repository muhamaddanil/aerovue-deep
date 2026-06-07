import { images } from '../assets/images';

export default function ProductCard({ product, className = '' }) {
  return (
    <div className={`relative overflow-hidden group cursor-pointer ${className}`} style={{ aspectRatio: '432/403' }}>
      <img
        alt={product.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={product.image}
      />
      <div className="absolute inset-0 flex flex-col justify-between items-end p-4 md:p-6">
        <div className="bg-white flex items-center justify-center px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-host-grotesk font-bold leading-[24px] text-xs md:text-sm text-black tracking-[1.28px] uppercase whitespace-nowrap">
            {product.tag}
          </span>
        </div>
        <div className="flex items-end justify-between w-full gap-2">
          <div className="flex flex-col items-start">
            <div className="flex flex-col gap-1 items-start">
              <div className="h-[10px] w-[47px]">
                <img alt="AEROVUE" className="block h-full w-auto" src={images.aerovueText} />
              </div>
              <p className="font-host-grotesk font-medium leading-relaxed text-sm md:text-base text-neutral-90">
                {product.title}
              </p>
            </div>
            <p className="font-host-grotesk font-medium leading-relaxed text-sm md:text-base text-neutral-100">
              Price: ${product.price}
            </p>
          </div>
          <div className="flex gap-2 md:gap-4 items-end shrink-0">
            <p className="font-host-grotesk font-normal leading-relaxed text-xs md:text-sm text-black">
              {product.variants} Variants
            </p>
            <div className="w-4 md:w-[25px] h-auto">
              <img alt="" className="block w-full" src={images.iconExpand} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CategoryCard({ category, className = '' }) {
  return (
    <div className={`bg-aerovue-grey-border border border-aerovue-grey-100 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 overflow-hidden p-4 md:pl-[180px] md:pr-8 md:py-8 relative min-h-[200px] md:min-h-[204px] cursor-pointer hover:shadow-lg transition-all duration-300 ${className}`}>
      {/* Image - repositioned for mobile */}
      <div className="relative md:absolute md:left-[-80px] md:top-[-10px] w-28 h-28 md:w-[312px] md:h-[228px] shrink-0 md:shrink-0 overflow-hidden rounded-lg md:rounded-none">
        <div className="w-full h-full md:rotate-[-11.2deg] md:scale-100">
          <img
            alt={category.title}
            className="w-full h-full object-cover rounded-lg md:rounded-none"
            src={category.image}
          />
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col gap-2 md:gap-6 items-start justify-center z-10">
        <h3 className="font-host-grotesk font-semibold italic leading-tight text-xl md:text-[32px] tracking-[-0.64px] text-aerovue-grey-900 max-w-[315px]">
          {category.title}
        </h3>
        <p className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base text-aerovue-grey-700 max-w-[315px]">
          {category.description}
        </p>
      </div>
    </div>
  );
}

export function ReviewCard({ review, className = '' }) {
  return (
    <div className={`flex flex-col items-start rounded-[16px] w-full ${className}`}>
      <div className="bg-aerovue-grey-border flex gap-4 md:gap-[30px] items-start mb-[-12px] p-4 md:p-8 rounded-[16px] w-full">
        <div className="h-6 md:h-[28px] w-9 md:w-[42px] shrink-0">
          <img alt="" className="block w-full h-full" src={images.iconQuote} />
        </div>
        <div className="flex flex-col gap-2 min-w-0 flex-1">
          <div className="h-4 md:h-[17.5px] w-20 md:w-[116px]">
            <img alt="5 stars" className="block w-full h-full" src={images.iconStars} />
          </div>
          <p className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base text-aerovue-grey-900">
            &ldquo;{review.text}&rdquo;
          </p>
        </div>
      </div>
      <div className="flex gap-2 md:gap-[9px] items-end px-4 w-full mt-2">
        <div className="w-12 md:w-[71px] h-12 md:h-[71px] shrink-0">
          <img alt={review.name} className="block w-full h-full rounded-full object-cover" src={review.avatar} />
        </div>
        <div className="flex flex-col gap-[2px] items-start min-w-0">
          <p className="font-host-grotesk font-medium leading-relaxed text-xs md:text-sm text-aerovue-secondary">
            {review.name}
          </p>
          <p className="font-host-grotesk font-normal leading-relaxed text-[10px] md:text-xs tracking-[1.12px] uppercase text-aerovue-grey-700">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqItem({ number, question, answer, isOpen = false, onToggle }) {
  return (
    <div
      className={`border border-neutral-30 flex flex-col items-start p-3 w-full cursor-pointer transition-all duration-300 ${isOpen ? 'gap-3 md:gap-6' : ''}`}
      onClick={onToggle}
    >
      <div className="flex gap-3 md:gap-5 items-center w-full">
        <span className="font-host-grotesk font-semibold leading-none text-2xl md:text-[48px] tracking-[-0.96px] uppercase text-aerovue-grey-500 shrink-0">
          {String(number).padStart(2, '0')}
        </span>
        <p className="flex-1 font-host-grotesk font-semibold leading-snug text-sm md:text-[24px] md:leading-[32px] tracking-[-0.48px] text-aerovue-grey-900 min-w-0">
          {question}
        </p>
        <div className="w-4 md:w-[22px] h-4 md:h-[22px] shrink-0 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
          <img alt="" className="block w-full h-full" src={isOpen ? images.iconOpen : images.iconClose} />
        </div>
      </div>
      {isOpen && answer && (
        <p className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base text-aerovue-grey-700 w-full">
          {answer}
        </p>
      )}
    </div>
  );
}