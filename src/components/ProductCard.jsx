import { images } from '../assets/images';

export default function ProductCard({ product, className = '' }) {
  return (
    <div className={`h-[403px] relative overflow-hidden group cursor-pointer ${className}`}>
      <img
        alt={product.title}
        className="absolute block inset-0 max-w-none size-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={product.image}
      />
      <div className="absolute inset-0 flex flex-col gap-[258px] items-end justify-center px-6">
        <div className="bg-white flex items-center justify-center px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-host-grotesk font-bold leading-[24px] text-[16px] text-black tracking-[1.28px] uppercase whitespace-nowrap">
            {product.tag}
          </span>
        </div>
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col items-start">
            <div className="flex flex-col gap-[6px] items-start">
              <div className="h-[10px] w-[47px]">
                <img alt="AEROVUE" className="block size-full" src={images.aerovueText} />
              </div>
              <p className="font-host-grotesk font-medium leading-[26px] text-[18px] text-neutral-90">
                {product.title}
              </p>
            </div>
            <p className="font-host-grotesk font-medium leading-[26px] text-[18px] text-neutral-100">
              Price: ${product.price}
            </p>
          </div>
          <div className="flex gap-[25px] items-end">
            <p className="font-host-grotesk font-normal leading-[26px] text-[18px] text-black tracking-[-0.36px]">
              {product.variants} Variants
            </p>
            <div className="size-[25px]">
              <img alt="" className="block size-full" src={images.iconExpand} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CategoryCard({ category, className = '' }) {
  return (
    <div className={`bg-aerovue-grey-border border border-aerovue-grey-100 border-solid flex flex-col gap-6 items-start justify-center overflow-clip pl-[220px] pr-8 py-8 relative w-[556px] max-w-full cursor-pointer hover:shadow-lg transition-all duration-300 ${className}`}>
      <h3 className="font-host-grotesk font-semibold italic leading-[1.2] text-[32px] tracking-[-0.64px] text-aerovue-grey-900 w-[315px]">
        {category.title}
      </h3>
      <p className="font-host-grotesk font-normal leading-[26px] text-[18px] tracking-[-0.36px] text-aerovue-grey-700 w-[315px]">
        {category.description}
      </p>
      <div className="absolute flex h-[228.6px] items-center justify-center left-[-80px] top-[-10px] w-[312px]">
        <div className="flex-none rotate-[-11.2deg]">
          <div className="h-[177px] rounded-[4px] w-[283px]">
            <img
              alt={category.title}
              className="absolute inset-0 max-w-none object-cover rounded-[4px] size-full"
              src={category.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReviewCard({ review, className = '' }) {
  return (
    <div className={`flex flex-col items-start rounded-[16px] w-[442px] max-w-full ${className}`}>
      <div className="bg-aerovue-grey-border flex gap-[30px] items-start mb-[-12px] p-8 rounded-[16px] w-full">
        <div className="h-[28px] w-[42px] shrink-0">
          <img alt="" className="block size-full" src={images.iconQuote} />
        </div>
        <div className="flex flex-col gap-2 min-w-px">
          <div className="h-[17.5px] w-[116px]">
            <img alt="5 stars" className="block size-full" src={images.iconStars} />
          </div>
          <p className="font-host-grotesk font-normal leading-[26px] text-[18px] tracking-[-0.36px] text-aerovue-grey-900">
            &ldquo;{review.text}&rdquo;
          </p>
        </div>
      </div>
      <div className="flex gap-[9px] items-end px-4 w-full">
        <div className="size-[71px] shrink-0">
          <img alt={review.name} className="block size-full rounded-full" src={review.avatar} />
        </div>
        <div className="flex flex-col gap-[2px] items-start">
          <p className="font-host-grotesk font-medium leading-[24px] text-[16px] text-aerovue-secondary">
            {review.name}
          </p>
          <p className="font-host-grotesk font-normal leading-[24px] text-[14px] tracking-[1.12px] uppercase text-aerovue-grey-700">
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
      className={`border border-neutral-30 border-solid flex flex-col items-start p-3 w-full cursor-pointer transition-all duration-300 ${isOpen ? 'gap-6' : ''}`}
      onClick={onToggle}
    >
      <div className="flex gap-5 items-center w-full">
        <span className="font-host-grotesk font-semibold leading-none text-[48px] tracking-[-0.96px] uppercase text-aerovue-grey-500 shrink-0">
          {String(number).padStart(2, '0')}
        </span>
        <p className="flex-1 font-host-grotesk font-semibold leading-[32px] text-[24px] tracking-[-0.48px] text-aerovue-grey-900">
          {question}
        </p>
        <div className="size-[22px] shrink-0 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
          <img
            alt=""
            className="block size-full"
            src={isOpen ? images.iconOpen : images.iconClose}
          />
        </div>
      </div>
      {isOpen && answer && (
        <p className="font-host-grotesk font-normal leading-[26px] text-[18px] tracking-[-0.36px] text-aerovue-grey-700 w-full">
          {answer}
        </p>
      )}
    </div>
  );
}