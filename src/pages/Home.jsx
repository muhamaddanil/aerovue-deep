import { useState } from 'react';
import { images } from '../assets/images';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsletterSection';
import ProductCard, { CategoryCard, ReviewCard, FaqItem } from '../components/ProductCard';
import { Label, Button, SectionHeader } from '../components/SectionTitle';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const categories = [
  { title: 'AEROVUE RUN', description: 'Built for speed, clarity, and outdoor endurance. See the path. Stay in motion.', image: images.categoryRun },
  { title: 'AEROVUE SWIM', description: 'Hydra-coat clarity for pool and open-water domination. Cut through water with confidence.', image: images.categorySwim },
  { title: 'AEROVUE FISH', description: 'Polarized precision for glare-free visibility on the water. Spot every detail. Master the conditions.', image: images.categoryFish },
];

const products = [
  { title: 'PolarEdge™', price: '95.99', variants: 2, tag: 'Best Seller', image: images.productPolarEdge },
  { title: 'AquaPulse™', price: '65.99', variants: 4, tag: 'Top Pick', image: images.productAquaPulse },
  { title: 'AeroDash™', price: '89.99', variants: 3, tag: 'Brand Choose', image: images.productAeroDash },
];

const reviews = [
  { text: 'TideMaster\'s polarized lens cuts through glare better than anything I\'ve used.', name: 'Ryan Cooper', role: 'Fishing Community Member', avatar: images.avatarRyan },
  { text: 'As a triathlete, eyewear must survive running, water, and speed. AEROVUE delivers.', name: 'Horge Lorzen', role: 'Triathlete', avatar: images.avatarHorge },
  { text: 'The AeroDash makes everything look sharper and feels super lightweight.', name: 'Sofia Martinez', role: 'Casual Outdoor Enthusiast', avatar: images.avatarSofia },
  { text: 'The visibility underwater is insane. AquaPulse stays comfortable.', name: 'Elena Brooks', role: 'Open Water Swimmer', avatar: images.avatarElena },
  { text: 'I use AEROVUE daily. Lightweight, comfy, and keeps my eyes protected.', name: 'Mark Lewis', role: 'Everyday User', avatar: images.avatarMark },
  { text: 'AEROVUE RunStrike gives me the clarity I need during long-distance runs.', name: 'Maya Rinaldi', role: 'Marathon Runner', avatar: images.avatarMaya },
];

const faqs = [
  { question: 'Are AEROVUE sports glasses suitable for all outdoor conditions?', answer: 'Yes. Every pair is engineered with weather-resistant coatings, anti-glare lenses, and durable frames designed to perform in bright sun, rain, or changing environments.' },
  { question: 'Do the lenses fog up during intense activity?', answer: 'Our lenses feature advanced anti-fog technology that prevents condensation even during high-intensity activities in varying temperatures.' },
  { question: 'Can I use the running glasses for cycling or daily wear?', answer: 'Absolutely. Our versatile designs are engineered to perform across multiple sports and everyday activities with equal comfort and clarity.' },
  { question: 'Are the frames flexible and impact-resistant?', answer: 'Yes, our frames are crafted from lightweight, flexible materials that offer exceptional impact resistance without compromising on comfort.' },
  { question: 'Do you offer prescription lens options?', answer: 'We offer prescription-compatible designs for select models. Contact our support team to learn more about customization options.' },
  { question: 'How do I choose the right model for my sport?', answer: 'Consider your primary activity, environment, and lens needs. Our sport-specific series are optimized for different conditions.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const heroRef = useScrollReveal({ direction: 'fade' });
  const heroTitleRef = useScrollReveal({ direction: 'up', delay: 100 });
  const heroTextRef = useScrollReveal({ direction: 'up', delay: 200 });
  const heroCtaRef = useScrollReveal({ direction: 'up', delay: 300 });

  const categoryRef = useScrollReveal({ direction: 'fade' });
  const categoryCardsRef = useStaggerReveal(3, { staggerDelay: 150 });

  const highlightRef = useScrollReveal({ direction: 'fade' });
  const highlightProductsRef = useStaggerReveal(3, { staggerDelay: 200 });

  const motionRef = useScrollReveal({ direction: 'fade' });
  const featuresHeaderRef = useScrollReveal({ direction: 'scale' });
  const videoRef = useScrollReveal({ direction: 'scale', delay: 100 });
  const motionContentRef = useScrollReveal({ direction: 'up', delay: 200 });

  const reviewRef = useScrollReveal({ direction: 'fade' });
  const reviewCardsRef = useStaggerReveal(6, { staggerDelay: 100 });

  const faqLeftRef = useScrollReveal({ direction: 'up', delay: 100 });
  const faqRightRef = useScrollReveal({ direction: 'up', delay: 200 });

  return (
    <div className="bg-aerovue-grey-white flex flex-col items-start w-full overflow-x-hidden">
      {/* ===== HERO ===== */}
      <header className="w-full" ref={heroRef}>
        <Navbar />
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between px-5 md:px-10 lg:px-[60px] pt-10 md:pt-16 pb-8 lg:pb-12">
            <div className="flex flex-col gap-5 md:gap-6">
              <h1 ref={heroTitleRef} className="font-host-grotesk font-semibold leading-tight text-[32px] sm:text-[40px] md:text-[54px] lg:text-[64px] xl:text-[72px] text-neutral-100 uppercase tracking-[-0.02em]">
                Enhance Your Vision for Every Moment
              </h1>
              <p ref={heroTextRef} className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base lg:text-lg text-aerovue-grey-700 max-w-[485px]">
                Introducing our precision engineered sport eyewear, crafted to enhance your visual clarity, boost performance, and offer unmatched protection.
              </p>
              <div ref={heroCtaRef} className="flex flex-wrap items-center gap-3 md:gap-4 pt-1">
                <Button variant="primary">Explore Shop</Button>
                <Button variant="secondary">Colaborate</Button>
              </div>
            </div>
            {/* Stats */}
            <div className="flex flex-col gap-2 mt-8 lg:mt-0">
              <div className="flex items-center gap-3">
                <div className="h-10 md:h-[48px] w-auto">
                  <img alt="12k+ customers" className="block h-full w-auto" src={images.avatarGroup} />
                </div>
                <span className="font-host-grotesk font-semibold leading-none text-[32px] md:text-[48px] tracking-[-0.96px] uppercase text-neutral-100">12k+</span>
              </div>
              <p className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base text-aerovue-grey-700">
                Whether you&rsquo;re on the trails, riding the waves, or competing
              </p>
            </div>
          </div>
          {/* Right image */}
          <div className="w-full lg:w-1/2">
            <div className="w-full aspect-[4/3] md:aspect-[903/783] lg:h-auto">
              <img alt="AEROVUE Hero" className="w-full h-full object-cover" src={images.heroBg} />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between px-5 md:px-10 lg:pr-[60px] py-4 gap-3">
              <div className="flex gap-0">
                <div className="bg-aerovue-primary h-3 w-16 md:w-[86px]" />
                <div className="bg-aerovue-secondary h-3 w-16 md:w-[86px]" />
                <div className="bg-aerovue-light h-3 w-16 md:w-[86px]" />
              </div>
              <div className="flex gap-6 md:gap-[53px]">
                <div>
                  <p className="font-host-grotesk font-semibold leading-none text-2xl md:text-[48px] tracking-[-0.96px] uppercase text-aerovue-grey-900">50,000+</p>
                  <p className="font-host-grotesk font-medium leading-relaxed text-xs md:text-sm text-aerovue-grey-700">units sold globally</p>
                </div>
                <div>
                  <p className="font-host-grotesk font-semibold leading-none text-2xl md:text-[48px] tracking-[-0.96px] uppercase text-aerovue-grey-900">4.8/5</p>
                  <p className="font-host-grotesk font-medium leading-relaxed text-xs md:text-sm text-aerovue-grey-700">from 8,500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== CATEGORY ===== */}
      <section className="w-full" ref={categoryRef}>
        <div className="flex flex-col items-center gap-12 md:gap-20 pt-16 md:pt-[100px] px-4 md:px-[60px] w-full">
          <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-[1392px]">
            {/* Banner */}
            <div className="w-full max-w-[1052px] overflow-hidden rounded-lg">
              <img alt="Sport Series" className="w-full h-40 md:h-[300px] lg:h-[402px] object-cover" src={images.categoryBanner} />
            </div>
            {/* Title */}
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-12 w-full">
              <div className="flex-1">
                <Label>category</Label>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-3 md:mt-4">
                  <h2 className="font-host-grotesk font-semibold leading-tight text-2xl md:text-[44px] lg:text-[52px] text-aerovue-secondary uppercase max-w-[517px]">
                    Explore Our<br />Sport Series
                  </h2>
                  <p className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base text-aerovue-grey-700 max-w-[569px]">
                    Discover performance eyewear built for your world&mdash;whether you&rsquo;re racing on the track, cutting through open water, or scanning the horizon on your next fishing trip.
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                <Button variant="primary">Shop The Series</Button>
              </div>
            </div>
            {/* Cards */}
            <div ref={categoryCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
              {categories.map((cat, i) => (
                <CategoryCard key={i} category={cat} />
              ))}
            </div>
          </div>
          <div className="h-px w-full max-w-[1392px] bg-gradient-to-r from-transparent via-aerovue-grey-100 to-transparent" />
        </div>
      </section>

      {/* ===== BEST OF SERIES ===== */}
      <section className="w-full" ref={highlightRef}>
        <div className="flex flex-col gap-8 md:gap-16 px-4 md:px-[60px] py-16 md:py-[100px] w-full max-w-[1392px] mx-auto">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-host-grotesk font-semibold leading-tight text-[28px] md:text-[48px] lg:text-[64px] text-aerovue-secondary uppercase">
              Best of Series
            </h2>
            <div className="hidden md:block">
              <img alt="" className="h-6 md:h-[30px] w-auto" src={images.groupOrnament} />
            </div>
          </div>
          <div ref={highlightProductsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative w-full" ref={featuresHeaderRef}>
        <div className="absolute inset-0">
          <img alt="" className="w-full h-full object-cover" src={images.featureLight} />
        </div>
        <div className="relative backdrop-blur-[100px] bg-[rgba(117,153,222,0.32)] flex flex-col items-center gap-8 md:gap-16 px-4 md:px-[60px] py-16 md:py-[100px] w-full">
          <div className="flex flex-col items-center gap-4 md:gap-8 w-full max-w-[1004px]">
            <div className="flex flex-col items-center gap-1">
              <span className="font-host-grotesk font-bold text-xs md:text-sm text-center tracking-[1.28px] uppercase text-aerovue-light z-[2]">features</span>
              <div className="bg-aerovue-primary h-2 w-16 md:w-[121px]" />
            </div>
            <h2 className="font-host-grotesk font-semibold leading-tight text-center text-[24px] md:text-[40px] lg:text-[52px] text-aerovue-light uppercase max-w-[900px]">
              Why Athletes Choose <span className="italic">AER</span><span className="italic text-aerovue-primary">OV</span><span className="italic">UE</span>
            </h2>
            <p className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base text-center text-[#f9f9f9] max-w-[900px]">
              Every AEROVUE product is tested in real conditions&mdash;on the track, in open water, and under the sun. So whatever challenge you face, your vision stays sharp and unstoppable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[1392px]">
            {[
              { num: '01', title: 'Ultra-Light Performance', desc: 'Designed for speed, endurance, and zero distractions.', img: images.featureLight },
              { num: '02', title: 'Precision Optics', desc: 'Crystal-clear vision engineered for every sport environment.', img: images.featureOptics },
              { num: '03', title: 'Superior Protection', desc: 'UV400, anti-fog, impact-resistant—built for real athletes.', img: images.featureProtection },
              { num: '04', title: 'Ergonomic Comfort', desc: 'Fits naturally, stays stable, moves with you.', img: images.featureComfort },
            ].map((f, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-[4/3] md:aspect-auto md:h-[450px] overflow-hidden">
                  <img alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={f.img} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-aerovue-primary p-3 md:p-5">
                  <h3 className="font-host-grotesk font-semibold leading-snug text-sm md:text-xl tracking-[-0.48px] text-aerovue-light">{f.title}</h3>
                  <p className="font-host-grotesk font-normal leading-relaxed text-xs md:text-sm text-aerovue-light mt-1">{f.desc}</p>
                </div>
                <span className="absolute top-3 md:top-5 left-3 md:left-5 font-greater-theory leading-none not-italic text-aerovue-primary text-3xl md:text-[64px] opacity-90">{f.num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MOTION ===== */}
      <section className="w-full" ref={motionRef}>
        <div className="flex flex-col items-center gap-8 md:gap-16 pt-16 md:pt-[100px] px-4 md:px-[60px] w-full">
          <SectionHeader
            label="motion"
            title="Proven in the Field. Approved by Experts."
            description="This is where clarity meets speed, precision meets adrenaline, and performance becomes a lifestyle."
          />
          <div className="flex flex-col items-start gap-12 md:gap-16 w-full max-w-[1392px]">
            {/* Video */}
            <div ref={videoRef} className="flex flex-col items-center gap-4 md:gap-6 w-full">
              <div className="relative w-full aspect-[16/9] md:aspect-[1392/741] overflow-hidden rounded-lg">
                <img alt="AEROVUE in action" className="absolute inset-0 w-full h-full object-cover" src={images.videoThumbnail} />
                <div className="absolute inset-0 bg-[rgba(22,35,42,0.56)]" />
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-[48px] md:h-[48px] hover:scale-110 transition-transform" aria-label="Play video">
                  <img alt="Play" className="block w-full h-full" src={images.iconPlay} />
                </button>
              </div>
              <p className="font-host-grotesk font-semibold leading-snug text-base md:text-[28px] lg:text-[32px] text-aerovue-grey-900 text-center tracking-[-0.64px]">
                &ldquo;Where athletic experience meets scientific precision.&rdquo;
              </p>
            </div>
            {/* Content */}
            <div ref={motionContentRef} className="flex flex-col lg:flex-row items-start gap-6 md:gap-10 w-full">
              <div className="flex items-start gap-4 md:gap-8 w-full lg:w-auto">
                <div className="hidden lg:block w-[50px] h-[262px] shrink-0">
                  <img alt="" className="block w-full h-full" src={images.frameOrnament} />
                </div>
                <div className="flex-1 flex flex-col gap-6 md:gap-10">
                  <div className="w-full aspect-[583/490] rounded-lg overflow-hidden">
                    <img alt="Research" className="w-full h-full object-cover" src={images.motionImage1} />
                  </div>
                  <p className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base text-aerovue-grey-700">
                    We also collaborate with sports doctors, optometrists, and performance specialists to refine our lens technology, ergonomic design, and long-term eye protection features.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-6 md:gap-10 w-full lg:w-[661px] lg:shrink-0">
                <div className="flex flex-col items-start md:items-end gap-3 max-w-[538px] w-full">
                  <h3 className="font-host-grotesk font-semibold leading-snug text-base md:text-xl tracking-[-0.48px] text-aerovue-primary">
                    Proven in the Field. Approved by Experts.
                  </h3>
                  <p className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base text-aerovue-grey-700 text-left md:text-right">
                    At AEROVUE, performance isn&rsquo;t just a promise&mdash;it&rsquo;s a standard. Every product is rigorously tested by professional athletes across running, swimming, and outdoor sports to ensure clarity, comfort, and durability in real-world conditions.
                  </p>
                </div>
                <div className="w-full aspect-[661/420] rounded-lg overflow-hidden">
                  <img alt="Athletes testing" className="w-full h-full object-cover" src={images.motionImage2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="w-full" ref={reviewRef}>
        <div className="flex flex-col items-center gap-8 md:gap-16 pt-16 md:pt-[100px] px-4 md:px-[60px] w-full max-w-[1392px] mx-auto">
          <div className="flex flex-col items-center gap-5 md:gap-8 max-w-[1112px]">
            <div className="flex items-center -space-x-3 md:-space-x-4">
              {[images.avatarSm1, images.avatarSm2, images.avatarSm3, images.avatarSm4].map((src, i) => (
                <div key={i} className="w-10 h-10 md:w-[55px] md:h-[55px] rounded-full border-2 border-white overflow-hidden">
                  <img alt="" className="w-full h-full object-cover" src={src} />
                </div>
              ))}
            </div>
            <div className="text-center">
              <h2 className="font-host-grotesk font-semibold leading-tight text-[24px] md:text-[40px] lg:text-[52px] text-aerovue-secondary uppercase">
                Trusted by Athletes. Built for Performance.
              </h2>
              <p className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base text-aerovue-grey-700 max-w-[621px] mx-auto mt-4 md:mt-6">
                This is where clarity meets speed, precision meets adrenaline, and performance becomes a lifestyle.
              </p>
            </div>
          </div>
          <div ref={reviewCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-aerovue-grey-100 to-transparent" />
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 px-4 md:px-[60px] py-16 md:py-[100px] w-full max-w-[1392px] mx-auto">
          <div ref={faqLeftRef} className="w-full lg:w-[492px] lg:shrink-0 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4 md:gap-6">
              <Label>FAQ</Label>
              <h2 className="font-host-grotesk font-semibold leading-tight text-2xl md:text-[44px] text-aerovue-secondary uppercase max-w-[443px]">
                Questions About Aerovue
              </h2>
              <p className="font-host-grotesk font-normal leading-relaxed text-sm md:text-base text-aerovue-grey-700 max-w-[443px]">
                Everything you need to know before choosing your AEROVUE gear.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <a href="mailto:support@aerovue.com" className="flex items-center gap-4 md:gap-6 group">
                <div className="w-6 h-6 md:w-[32px] md:h-[32px] shrink-0">
                  <img alt="" className="w-full h-full" src={images.iconMail} />
                </div>
                <span className="font-host-grotesk font-semibold leading-snug text-base md:text-xl tracking-[-0.48px] text-aerovue-grey-900 group-hover:text-aerovue-primary transition-colors">support@aerovue.com</span>
              </a>
              <a href="tel:+62891034648" className="flex items-center gap-4 md:gap-6 group">
                <div className="w-6 h-6 md:w-[32px] md:h-[32px] shrink-0">
                  <img alt="" className="w-full h-full" src={images.iconPhone} />
                </div>
                <span className="font-host-grotesk font-semibold leading-snug text-base md:text-xl tracking-[-0.48px] text-aerovue-grey-900 group-hover:text-aerovue-primary transition-colors">+62891034648</span>
              </a>
            </div>
          </div>
          <div ref={faqRightRef} className="flex-1 flex flex-col gap-4 md:gap-8 min-w-0 w-full">
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