import { useState } from 'react';
import { images } from '../assets/images';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsletterSection';
import ProductCard, { CategoryCard, ReviewCard, FaqItem } from '../components/ProductCard';
import { Label, Button } from '../components/SectionTitle';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const categories = [
  { title: 'AEROVUE RUN', description: 'Built for speed, clarity, and outdoor endurance. See the path. Stay in motion.', image: images.categoryRun },
  { title: 'AEROVUE SWIM', description: 'Hydra-coat clarity for pool and open-water domination. Cut through water with confidence.', image: images.categorySwim },
  { title: 'AEROVUE FISH', description: 'Polarized precision for glare-free visibility on the water. Spot every detail. Master the conditions.', image: images.categoryFish },
];

const allProducts = [
  { title: 'PolarEdge™', price: '95.99', variants: 2, tag: 'Best Seller', image: images.productPolarEdge, category: 'run' },
  { title: 'AquaPulse™', price: '65.99', variants: 4, tag: 'Top Pick', image: images.productAquaPulse, category: 'swim' },
  { title: 'AeroDash™', price: '89.99', variants: 3, tag: 'Brand Choose', image: images.productAeroDash, category: 'run' },
  { title: 'PolarEdge™', price: '95.99', variants: 2, tag: 'Best Seller', image: images.productPolarEdge, category: 'fish' },
  { title: 'AquaPulse™', price: '65.99', variants: 4, tag: 'Top Pick', image: images.productAquaPulse, category: 'swim' },
  { title: 'AeroDash™', price: '89.99', variants: 3, tag: 'Brand Choose', image: images.productAeroDash, category: 'run' },
];

const reviews = [
  { text: 'TideMaster\'s polarized lens cuts through glare better than anything I\'ve used.', name: 'Ryan Cooper', role: 'Fishing Community Member', avatar: images.avatarRyan },
  { text: 'As a triathlete, eyewear must survive running, water, and speed. AEROVUE delivers.', name: 'Horge Lorzen', role: 'Triathlete', avatar: images.avatarHorge },
  { text: 'The AeroDash makes everything look sharper and feels super lightweight.', name: 'Sofia Martinez', role: 'Outdoor Enthusiast', avatar: images.avatarSofia },
  { text: 'The visibility underwater is insane. AquaPulse stays comfortable.', name: 'Elena Brooks', role: 'Open Water Swimmer', avatar: images.avatarElena },
  { text: 'I use AEROVUE daily. Lightweight, comfy, and keeps my eyes protected.', name: 'Mark Lewis', role: 'Everyday User', avatar: images.avatarMark },
  { text: 'AEROVUE RunStrike gives me clarity during long-distance runs.', name: 'Maya Rinaldi', role: 'Marathon Runner', avatar: images.avatarMaya },
];

const faqs = [
  { question: 'Are AEROVUE sports glasses suitable for all outdoor conditions?', answer: 'Yes. Every pair is engineered with weather-resistant coatings, anti-glare lenses, and durable frames designed to perform in bright sun, rain, or changing environments.' },
  { question: 'Do the lenses fog up during intense activity?', answer: 'Our lenses feature advanced anti-fog technology that prevents condensation even during high-intensity activities.' },
  { question: 'Can I use the running glasses for cycling or daily wear?', answer: 'Absolutely. Our versatile designs are engineered to perform across multiple sports and everyday activities.' },
  { question: 'Are the frames flexible and impact-resistant?', answer: 'Yes, our frames are crafted from lightweight, flexible materials that offer exceptional impact resistance.' },
  { question: 'Do you offer prescription lens options?', answer: 'We offer prescription-compatible designs for select models. Contact our support team.' },
  { question: 'How do I choose the right model for my sport?', answer: 'Consider your primary activity, environment, and lens needs. Our sport-specific series are optimized for different conditions.' },
];

const filters = ['All', 'Running', 'Swim', 'Fishing'];

export default function Category() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const heroRef = useScrollReveal({ direction: 'fade' });
  const heroTitleRef = useScrollReveal({ direction: 'up', delay: 100 });
  const categoryRef = useScrollReveal({ direction: 'fade' });
  const categoryCardsRef = useStaggerReveal(3, { staggerDelay: 150, baseDelay: 100 });
  const searchRef = useScrollReveal({ direction: 'up', delay: 100 });
  const productGridRef = useStaggerReveal(6, { staggerDelay: 100, baseDelay: 100 });
  const reviewCardsRef = useStaggerReveal(6, { staggerDelay: 100, baseDelay: 100 });
  const faqLeftRef = useScrollReveal({ direction: 'left', distance: 40 });
  const faqRightRef = useScrollReveal({ direction: 'right', distance: 40 });

  const filteredProducts = allProducts.filter(product => {
    const matchesFilter = activeFilter === 'All' || product.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-aerovue-grey-white flex flex-col items-start w-full overflow-x-hidden">
      {/* Hero */}
      <header className="w-full" ref={heroRef}>
        <div className="flex flex-col items-start w-full">
          <Navbar />
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col lg:flex-row gap-[64px] items-start w-full">
              <div className="flex-1 flex flex-col items-start justify-between min-w-px pl-4 md:pl-[60px] pt-[60px] self-stretch">
                <div className="flex flex-col gap-6 items-start w-full">
                  <h1 ref={heroTitleRef} className="font-host-grotesk font-semibold leading-none text-[40px] md:text-[48px] lg:text-heading-1 text-aerovue-secondary uppercase">
                    Enhance Your Vision for Every Moment
                  </h1>
                  <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 w-full max-w-[485px]">
                    Introducing our precision engineered sport eyewear, crafted to enhance your visual clarity, boost performance, and offer unmatched protection.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary">Explore Shop</Button>
                    <Button variant="secondary">Colaborate</Button>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start mt-8 lg:mt-0 w-[291px]">
                  <div className="flex gap-3 items-start">
                    <div className="h-[48px] w-[132px]">
                      <img alt="12k+ customers" className="block size-full" src={images.avatarGroup} />
                    </div>
                    <span className="font-host-grotesk font-semibold leading-none text-[48px] tracking-[-0.96px] uppercase text-neutral-100">12k+</span>
                  </div>
                  <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700">Whether you&rsquo;re on the trails, riding the waves, or competing</p>
                </div>
              </div>
              <div className="flex flex-col gap-8 items-start shrink-0 w-full lg:w-auto">
                <div className="h-[400px] md:h-[783px] w-full lg:w-[903px] overflow-hidden">
                  <img alt="AEROVUE Category" className="w-full h-full object-cover" src={images.heroBg} />
                </div>
                <div className="flex flex-col md:flex-row items-end justify-between pr-4 md:pr-[60px] w-full gap-4">
                  <div className="flex gap-0">
                    <div className="bg-aerovue-primary h-[13px] w-[86px]" />
                    <div className="bg-aerovue-secondary h-[13px] w-[86px]" />
                    <div className="bg-aerovue-light h-[13px] w-[86px]" />
                  </div>
                  <div className="flex gap-[53px] items-center">
                    <div className="flex flex-col gap-3 items-start">
                      <span className="font-host-grotesk font-semibold leading-none text-[32px] md:text-[48px] tracking-[-0.96px] uppercase text-aerovue-grey-900">50,000+</span>
                      <span className="font-host-grotesk font-medium leading-[24px] text-[16px] text-aerovue-grey-700">units sold globally</span>
                    </div>
                    <div className="flex flex-col gap-3 items-start w-[154px]">
                      <span className="font-host-grotesk font-semibold leading-none text-[32px] md:text-[48px] tracking-[-0.96px] uppercase text-aerovue-grey-900">4.8/5</span>
                      <span className="font-host-grotesk font-medium leading-[24px] text-[16px] text-aerovue-grey-700">from 8,500+ reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Category Grid */}
      <section className="w-full" ref={categoryRef}>
        <div className="flex flex-col gap-[100px] items-center pt-[100px] px-4 md:px-[60px] w-full">
          <div className="flex flex-col gap-[64px] items-center justify-center w-full">
            <div className="flex flex-col gap-8 items-center w-full">
              <div className="h-[200px] md:h-[402px] overflow-clip w-full max-w-[1052px]">
                <img alt="Sport Series" className="w-full h-full object-cover" src={images.categoryBanner} />
              </div>
              <div className="flex flex-col lg:flex-row gap-[48px] items-end w-full">
                <div className="flex-1 flex flex-col gap-3 items-start">
                  <Label>category</Label>
                  <div className="flex flex-col lg:flex-row gap-6 items-end justify-between w-full">
                    <h2 className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-3 text-aerovue-secondary uppercase max-w-[517px]">Explore Our<br />Sport Series</h2>
                    <p className="flex-1 font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 min-w-px max-w-[569px]">
                      Discover performance eyewear built for your world&mdash;whether you&rsquo;re racing on the track, cutting through open water, or scanning the horizon on your next fishing trip.
                    </p>
                  </div>
                </div>
                <Button variant="primary" className="hidden lg:flex">Shop The Series</Button>
              </div>
            </div>
            <div ref={categoryCardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] w-full">
              {categories.map((cat, i) => (
                <CategoryCard key={i} category={cat} />
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-aerovue-grey-100 to-transparent" />
        </div>
      </section>

      {/* Product Grid with Filters */}
      <section className="w-full py-[60px] px-4 md:px-[60px]" ref={searchRef}>
        <div className="max-w-[1392px] mx-auto">
          <div className="mb-8">
            <div className="relative max-w-[556px]">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-aerovue-grey-100 border-solid pl-4 pr-12 py-3 font-host-grotesk font-normal text-[18px] text-aerovue-grey-900 bg-white focus:outline-none focus:border-aerovue-secondary transition-colors"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 size-[24px]">
                <img alt="Search" className="block size-full" src={images.iconSearch} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 font-host-grotesk font-medium text-[16px] transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-aerovue-secondary text-aerovue-light'
                    : 'bg-aerovue-grey-border text-aerovue-grey-700 hover:bg-aerovue-grey-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div ref={productGridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="font-host-grotesk text-[24px] text-aerovue-grey-700">No products found matching your criteria.</p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button className="px-4 py-2 border border-aerovue-grey-100 text-aerovue-grey-700 hover:bg-aerovue-grey-border transition-colors">Previous</button>
            {[1, 2, 3].map((page) => (
              <button key={page} className={`px-4 py-2 border border-aerovue-grey-100 transition-colors ${page === 1 ? 'bg-aerovue-secondary text-aerovue-light' : 'text-aerovue-grey-700 hover:bg-aerovue-grey-border'}`}>
                {page}
              </button>
            ))}
            <button className="px-4 py-2 border border-aerovue-grey-100 text-aerovue-grey-700 hover:bg-aerovue-grey-border transition-colors">Next</button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="w-full">
        <div className="flex flex-col gap-[64px] items-center pt-[100px] px-4 md:px-[60px] w-full">
          <div className="flex flex-col gap-6 items-center max-w-[1112px]">
            <div className="flex items-center">
              {[images.avatarSm1, images.avatarSm2, images.avatarSm3, images.avatarSm4].map((src, i) => (
                <div key={i} className={`size-[55px] ${i < 3 ? 'mr-[-20px]' : ''}`}>
                  <img alt="" className="block size-full rounded-full border-2 border-white" src={src} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-8 items-center text-center w-full">
              <h2 className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-3 text-aerovue-secondary uppercase">Trusted by Athletes. Built for Performance.</h2>
              <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 max-w-[621px]">This is where clarity meets speed, precision meets adrenaline, and performance becomes a lifestyle.</p>
            </div>
          </div>
          <div ref={reviewCardsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-[1392px]">
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-aerovue-grey-100 to-transparent" />
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row gap-[64px] items-start px-4 md:px-[60px] py-[100px] w-full max-w-[1512px] mx-auto">
          <div ref={faqLeftRef} className="flex flex-col items-start justify-between self-stretch w-full lg:w-[492px]">
            <div className="flex flex-col gap-6 items-start w-full">
              <div className="flex flex-col gap-4 items-start">
                <Label>FAQ</Label>
                <h2 className="font-host-grotesk font-semibold leading-none text-[32px] md:text-heading-4 text-aerovue-secondary uppercase max-w-[443px]">Questions About Aerovue</h2>
              </div>
              <p className="font-host-grotesk font-normal leading-[26px] text-body-large text-aerovue-grey-700 max-w-[443px]">Everything you need to know before choosing your AEROVUE gear.</p>
            </div>
            <div className="flex flex-col gap-6 items-start mt-8 lg:mt-0 w-full">
              <div className="flex gap-6 items-center">
                <div className="size-[32px]"><img alt="" className="block size-full" src={images.iconMail} /></div>
                <a href="mailto:support@aerovue.com" className="font-host-grotesk font-semibold leading-[32px] text-[20px] md:text-[24px] tracking-[-0.48px] text-aerovue-grey-900 hover:text-aerovue-primary transition-colors">support@aerovue.com</a>
              </div>
              <div className="flex gap-6 items-center">
                <div className="size-[32px]"><img alt="" className="block size-full" src={images.iconPhone} /></div>
                <a href="tel:+62891034648" className="font-host-grotesk font-semibold leading-[32px] text-[20px] md:text-[24px] tracking-[-0.48px] text-aerovue-grey-900 hover:text-aerovue-primary transition-colors">+62891034648</a>
              </div>
            </div>
          </div>
          <div ref={faqRightRef} className="flex-1 flex flex-col gap-[48px] items-start min-w-px w-full">
            {faqs.map((faq, i) => (
              <FaqItem key={i} number={i + 1} question={faq.question} answer={faq.answer} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}